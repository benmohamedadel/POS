import { Component, OnInit } from '@angular/core';
import { Iproduct_sale } from './Iproduct_sale';
import { Iproduct } from './product';
import { productlistservice } from './dashboard-manager.service';
import { Isale } from './sale';
import { Router } from '@angular/router';
import { AlertsTableService } from '../alerts-table/alerts-table.service';
import { AlertsTableComponent } from '../alerts-table/alerts-table.component';
import { Ialert } from './alerts';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard-manager',
  templateUrl: './dashboard-manager.component.html',
  styleUrls: ['./dashboard-manager.component.css']
})
export class DashboardManagerComponent implements OnInit {
  public alert_color='';
  tqForm!:FormGroup;

 b='';
public payments:Iproduct_sale[]=[];
public P=0;

  public a='';
  auth :any
  alerts:Ialert[]=[];
  public error_msg!: string;
  public products:Iproduct[]=[];
  public productfiltre :Iproduct[]=[];
  private _productfiltre :string ="";
  ///////////////////////////////////
  /////////////////////////////////////
  constructor(private product_list_service: productlistservice,private alert_list_service: AlertsTableService, private fb :FormBuilder,private alert_service:AlertsTableService,private router :Router) { }
/////////////////////////////
//////////////////////////////
 alertVide(alerts:Ialert[]):string
  {
    if(alerts.length==0)
             {return 'yellow';
            }else
       return 'red';
  }
  ///////////////////////////
  //////////////////////////

  ngOnInit(): void {

    this.tqForm=this.fb.group({

      serverName:['',Validators.required],
      tableNumber:['',Validators.required],

    });

    this.alert_service.getAlerts().subscribe({next: alerts=>this.alerts=alerts});


    //this.alert_color=this.alertVide(this.alerts);

   this.auth=localStorage.getItem('token');
    if(!this.auth)
    {  window.alert('you don\'t have permission to view this page');
      this.router.navigate(['/home']);

    }
     this.product_list_service.getProducts().subscribe({
      next:products=>
      { //console.log(products);
        for(let i=0;i<products.length;i++)
        {
          products[i].productPrice = Number(products[i].productPrice);
        }this.products=products;
        console.log(products);
        this.filtreproduct="Café";
      }
      ,
      error: err=>this.error_msg=err
     });

  }


 /////////////////////////////////////////
 ///////////////////////////////////////
  public get filtreproduct():string
{return this._productfiltre;

}
public the_category(){
  this.filtreproduct="thé";
}
public Cafe_category(){
  this.filtreproduct="Café";
}
public snacks_category(){
  this.filtreproduct="Snacks";
}
public Other_drinks_category(){
  this.filtreproduct="Autres boissons";
}
/*public Autres_boissons_category()
{this.filtreproduct="Autres boissons";}*/
public set filtreproduct(ch:string){
    this._productfiltre=ch;
    this.productfiltre=this._productfiltre?this.filproduct(this.filtreproduct): this.products;
}
////////////////////////////////////
//////////////////////////////////////
private filproduct (  ch : string): Iproduct[]
{ch =ch.toLocaleLowerCase();

    const res =this.products.filter(
        (product:Iproduct) => product.productCategory.toLocaleLowerCase().indexOf(ch) != -1
    );
    return res;

}

//////////////////////////////////////////////
//////////////////////////////////////////////
remove()
{
  localStorage.removeItem('token');
}

////////////////////////
///////////////////////

  public  add_payment(product :Iproduct):void{
  let t=0;
for(let i=0;i<this.payments.length;i++)
{if(this.payments[i].productName==product.productName)
{ t=1;

  this.payments[i].productId = product.productId;
  this.payments[i].productName = product.productName;
  this.payments[i].productQuantity = product.productQuantity;
  this.payments[i].productPrice= product.productPrice;
  this.payments[i].quantity++;
  this.payments[i].productCategory= product.productCategory;
  this.payments[i].price += product.productPrice;
  this.P+=product.productPrice;
}
}
if(t==0)
{

  this.payments.push( new Iproduct_sale(product.productId,product.productName,product.productPrice,product.productQuantity,product.productCategory,1,product.productPrice));
  this.P+=product.productPrice;
}

  }
  /////////////////////////////////////
  //////////////////////////////////////
  public trach( x:string):void{
for(let i=0;i<this.payments.length;i++)
{
if(this.payments[i].productName==x)
{
  this.P-=this.payments[i].productPrice;
  this.payments.splice(i,1);
}

}

  }
  /////////////////////////////////
  //////////////////////////////
public Cancel()
{
  this.payments=[];
 this.P=0;

}
////////////////////
////////////////////

dose=0.1;
confirm_payement()
{ if(this.payments.length!=0)
   {
    const  navbar = document.getElementById("navbar") ;
const  content = document.getElementById("content") ;
const  footer = document.getElementById("footer") ;
this.a='s';
navbar!.style.opacity="0.2";
content!.style.opacity="0.2";
footer!.style.opacity="0.2";
   }
   else
  alert("il n'existe aucune vente");

}

/////////////////////
///////////////////
imprimer(tqForm:FormGroup)
{
  var allertt=0;

for(let i=0;i<this.payments.length;i++)
{
  if((this.payments[i].productQuantity-this.payments[i].quantity*this.dose)>0)
  {
    console.log("******"+this.payments[i].productId);
    console.log("******"+this.payments[i].productName);
    console.log("******"+this.payments[i].productPrice);
    console.log("******"+ (this.payments[i].productQuantity-this.payments[i].quantity*this.dose));

if(this.payments[i].productId&&this.payments[i].productName&&this.payments[i].productPrice&&this.payments[i].productQuantity-this.payments[i].quantity*this.dose&&this.payments[i].productCategory)
  this.product_list_service.changeProduct(this.payments[i].productId,this.payments[i].productName,this.payments[i].productPrice,this.payments[i].productQuantity-this.payments[i].quantity*this.dose,this.payments[i].productCategory).subscribe(

  );

}
  else{
    alert("fin de stock de ");
    allertt=1;
    var description= "Fin de stock de "+this.payments[i].productName;
this.alert_list_service.putAlert(description).subscribe({});
//window.location.reload();
///
  }




}
if(allertt==0)
{var des="";
for(let i=0;i<this.payments.length;i++)
{
  des+=this.payments[i].productName +" : "+this.payments[i].quantity+" a "+this.payments[i].price +" / "  ;

}
  des+=" porté par " +tqForm.get('serverName')?.value +" a la table "+ tqForm.get('numberTable')?.value +". " ;
this.product_list_service.putSale(des,this.P).subscribe({});}


const  navbar = document.getElementById("navbar") ;
const  content = document.getElementById("content") ;
const  footer = document.getElementById("footer") ;
this.a='';
navbar!.style.opacity="1";
content!.style.opacity="1";
footer!.style.opacity="1";
window.location.reload();

}

}

import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PurchaseTableService } from './purchase-table.service';
import { Ipurchase } from './purchases';

@Component({
  selector: 'app-purchases-table',
  templateUrl: './purchases-table.component.html',
  styleUrls: ['./purchases-table.component.css']
})
export class PurchasesTableComponent implements OnInit {
  public purchaseForm :FormGroup;
  public purchaseeForm! :FormGroup;
  constructor(private fb:FormBuilder,private purchase_service:PurchaseTableService,private router:Router) {
    this.purchaseForm = fb.group({
      title: fb.control('initial value')});
  }



  public purchases:Ipurchase[]=[];
  auth :any
  ngOnInit(): void {
    this.auth=localStorage.getItem('token');
    if(!this.auth)
    {  window.alert('you don\'t have permission to view this page');
      this.router.navigate(['/home']);

    }
    this.purchase_service.getPurchases().subscribe({
      next:purchases =>
      {  this.purchases= purchases;

      }


     });
     this.purchaseForm=this.fb.group({

      purchaseId:['',Validators.required],
      productId:['',Validators.required],
      purchasePrice:['',Validators.required],
      purchaseQuantity:['',Validators.required],
      purchaseDescription:['',Validators.required],
      purchaseDate:['',Validators.required],

    });
    this.purchaseeForm=this.fb.group({


      purchasePrice:['',Validators.required],

      purchaseDescription:['',Validators.required],


    });
    }
  public prch!:Ipurchase;

  public add_product():void{
    const  para2 = document.getElementById ('new_mod1') ;
    const  container = document.getElementById('container') ;
    const  footer = document.getElementById('footer') ;
    this.b="1";
    if (container !=null)
    container.style.opacity="0.2";
    footer!.style.opacity="0.2";
  }

  public a="";
public b="";
/////////////////////////////////
/////////////////////////////////
public edit_product( x:Ipurchase):void{
this.a="1";
this.prch=x;
const  container = document.getElementById('container') ;
const  footer = document.getElementById('footer') ;
if (container !=null)
container.style.opacity="0.2";
footer!.style.opacity="0.2";

}
public c="";
/////////////////////////
//////////////////////////
editPurchase()
{const purchaseDescription= this.purchaseeForm.get('purchaseDescription')?.value;
const purchasePrice= this.purchaseeForm.get('purchasePrice')?.value;


if(purchaseDescription && purchasePrice )
{

 this.purchase_service.changePurchace(this.prch.purchaseId,purchaseDescription,purchasePrice).subscribe
 (
 /*  data=>{
     this.products= this.products.filter(x=> x.productId!=this.id_Delete);
   }*/
 );


} else
alert("vous devez remplir tous les champs");
// window.location.reload();
}
/////////////////////////////
//////////////////////////////
public retour_tab():void{
  const  container = document.getElementById('container') ;
const  footer = document.getElementById('footer') ;
  if (container !=null)
  {container.style.opacity="1";
  footer!.style.opacity="1";
  this.a="";
  this.b="";
  this.c="";


  }}
  ///////////////////////////////////
  add_new_product(productForm :FormGroup){
 console.log(productForm.value);
    //const purchaseId= productForm.get('purchaseId')?.value;
    const productId= productForm.get('productId')?.value;
    const  purchasePrice= productForm.get('purchasePrice')?.value;
    const purchaseQuantity= productForm.get('purchaseQuantity')?.value;
    const purchaseDescription= productForm.get('purchaseDescription')?.value;
   // const purchaseDate= productForm.get('purchaseDate')?.value;
    if(  productId &&  purchasePrice && purchaseQuantity && purchaseDescription )
    {  this.purchase_service.putPurchases( productId, purchasePrice,purchaseQuantity,purchaseDescription

       ).subscribe({

        next:data =>
        {  //console.log(data);
          if(data.message !='success')

            {alert("Verifier  product Id");

          }else
          window.location.reload();


        }}
        );
    }
    else
    alert("Vous devez remplir tous les champs");
  }
  id_Delete:any;
  //////////////////////////////
  /////////////////////////////
  public trach1( x :any):void
  { this.id_Delete=x
    this.c="1";


  const  container = document.getElementById('container') ;
  const  footer = document.getElementById('footer') ;

  container!.style.opacity="0.2";
  footer!.style.opacity="0.2";
  }
  /////////////////////////
  deletePurchase(){
    this.purchase_service.deletePurchase(this.id_Delete).subscribe
    (
      data=>{
        this.purchases= this.purchases.filter(m=> m.purchaseId!=this.id_Delete);
      }
    )
    this.retour_tab();
    window.location.reload();

  }
}

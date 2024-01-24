import { HttpEvent, HttpEventType } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { productlistservice } from '../dashboard-manager/dashboard-manager.service';
import { Iproduct } from '../dashboard-manager/product';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {




  public products:Iproduct[]=[];
  public productForm :FormGroup;
  public productFormm :FormGroup;
  constructor(private fb:FormBuilder , private router:Router,private productservice:productlistservice) {
    this.productForm = fb.group({
      title: fb.control('initial value')});
      this.productFormm = fb.group({
        title: fb.control('initial value')})}
        auth:any;
  ngOnInit(): void {
    this.auth=localStorage.getItem('token');
    if(!this.auth)
    {  window.alert('you don\'t have permission to view this page');
      this.router.navigate(['/home']);

    }
    this.productForm=this.fb.group({

      productName:['',Validators.required],
      productPrice:['',Validators.required],
      productQuantity:['',Validators.required],
      productCategory:['',Validators.required],
       productImage:[null]
    });
    this.productFormm=this.fb.group({

      productName:['',Validators.required],
      productPrice:['',Validators.required],
      productQuantity:['',Validators.required],
      productCategory:['',Validators.required]

    });
    this.productservice.getProducts().subscribe({
      next:products =>
      {  this.products= products;

      }


     });


  }
  public progress :number=0;
  //////////////////////////////
public add_product():void{
  const  para2 = document.getElementById ('new_mod1') ;
  const  container = document.getElementById('container') ;
  const  footer = document.getElementById('footer') ;
  this.b="1";
  if (container !=null)
  container.style.opacity="0.2";
  footer!.style.opacity="0.2";
}
public prod :any;
public a="";
public b="";
////////////////////////////////
public edit_product(x:Iproduct ):void{
this.a="1";
this.productChange=x;

const  container = document.getElementById('container') ;
const  footer = document.getElementById('footer') ;
if (container !=null)
container.style.opacity="0.2";
footer!.style.opacity="0.2";

}
productChange:any;
////////////////////////////////////
change_product(productFormm:FormGroup)
{
  const productName= productFormm.get('productName')?.value;
 const productPrice= productFormm.get('productPrice')?.value;
 const productCategory= productFormm.get('productCategory')?.value;
 const productQuantity= productFormm .get('productQuantity')?.value;

if(productName && productPrice &&productCategory && productQuantity )
{

  this.productservice.changeProduct(this.productChange.productId,productName,productPrice,productQuantity ,productCategory).subscribe
  (
  /*  data=>{
      this.products= this.products.filter(x=> x.productId!=this.id_Delete);
    }*/
  )

}


  else
  alert("Vous devez remplir tous les champs");
 window.location.reload();
}
public c="";
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


  }


}
////////////////////////////
id_Delete:any;
public trach1( id :number):void
{
  this.c="1";
const  container = document.getElementById('container') ;
const  footer = document.getElementById('footer') ;

container!.style.opacity="0.2";
footer!.style.opacity="0.2";
this.id_Delete=id;


}
////////////////////
////////////////////
deleteProduct()
{this.productservice.deleteProduct(this.id_Delete).subscribe
  (
    data=>{
      this.products= this.products.filter(x=> x.productId!=this.id_Delete);
    }
  )
  this.retour_tab();

}
public msg="";
public msgg="";
add_new_product(productForm :FormGroup){

 const productName= productForm.get('productName')?.value;
 const productPrice= productForm.get('productPrice')?.value;
 const productCategory= productForm.get('productCategory')?.value;
 const productImage= productForm.get('productImage')?.value;
 const productQuantity= productForm.get('productQuantity')?.value;
 if(productName &&  productPrice &&  productPrice &&  productQuantity)
 {
 var x:FormData =new FormData();

x.append("productName",productName);
x.append("productImage",productImage);
x.append("productPrice",productPrice);
x.append("productCategory",productCategory);
x.append("productQuantity",productQuantity);

  this.productservice.putProducts(
   x
    ).subscribe((event :HttpEvent<any>)=>{
      switch (event.type){
   case HttpEventType.UploadProgress:
           var eventTotal =event.total ?event.total :0;
            if(event.total ){
              this.progress=Math.round((100/event.total)*event.loaded);
              setTimeout(() =>
{
  this.msg= "Uploaded! "+this.progress+" %"
},
2000);
         //   this.msg= "Uploaded! "+this.progress+" %"
        }
            break;
            case HttpEventType.Response:
            if(event.body.success )
            {
                this.msgg=event.body.success;

               setTimeout(() =>
               {
                 this.retour_tab();
               },
               2000);
               //alert(event.body.success);
               setTimeout(() =>
               {
                window.location.reload();
               },
               1000);

            }


            else if(event.body.error)
            {
              this.msgg=event.body.error;
              alert(event.body.error);
              //this.retour_tab();

                this.retour_tab();
                window.location.reload();

              //alert(event.body.error);
            }

         //  console.log(event.body.error);
          }

    })




  }

else
alert("Vous devez remplir tous les champs");
//this.retour_tab();

}



uploadFile(event:any){
  const file=event.target.files ? event.target.files[0] : '';
this.productForm.patchValue({
  productImage:file
});
this.productForm.get('productImage')?.updateValueAndValidity();

}
}

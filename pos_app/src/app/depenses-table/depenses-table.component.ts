import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Idepence } from './depences';
import { DepencesTableService } from './depences-table.service';

@Component({
  selector: 'app-depenses-table',
  templateUrl: './depenses-table.component.html',
  styleUrls: ['./depenses-table.component.css']
})
export class DepensesTableComponent implements OnInit {

  constructor(private fb :FormBuilder,private depence_service:DepencesTableService ,private router:Router) {
    this.depenceForm = fb.group({
      title: fb.control('initial value')});
      this.depenceFormm = fb.group({
        title: fb.control('initial value')});
    }


  public depences:Idepence[]=[];
  public depenceForm :FormGroup;
  public depenceFormm :FormGroup;
  auth:any;
  ngOnInit(): void {
    this.auth=localStorage.getItem('token');
    if(!this.auth)
    {  window.alert('you don\'t have permission to view this page');
      this.router.navigate(['/home']);

    }
    this.depence_service.getPurchases().subscribe({
      next:depences =>
      {  this.depences= depences;

      }


     });
     this.depenceFormm=this.fb.group({



      depencePrice:['',Validators.required],
     depenceDescription:['',Validators.required],


    });
    this.depenceForm=this.fb.group({



      depencePrice:['',Validators.required],
     depenceDescription:['',Validators.required],


    });
  }
  /////////////////////////////////////////
  add_new_depence(depenceForm :FormGroup )
  { console.log(depenceForm.value);
    //const purchaseId= productForm.get('purchaseId')?.value;
    const depencePrice=depenceForm.get('depencePrice')?.value;
    const  depenceDescription=depenceForm.get('depenceDescription')?.value;
    if( depencePrice&& depenceDescription )
    {  this.depence_service.putDepences(depencePrice, depenceDescription).subscribe({

      next:data =>
      {  //console.log(data);
        if(data.message =='success')

          {
            alert("opération réussie");
                window.location.reload();
        }



      }}
      );


} else
alert("Vous devez remplir tous les champs");

    }

  ///////////////
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
depence!:number;
public c="";
/////////////////////////////////////////////////
public edit_product( x:number):void{
this.a="1";
this.depence=x;


const  container = document.getElementById('container') ;
const  footer = document.getElementById('footer') ;
if (container !=null)
container.style.opacity="0.2";
footer!.style.opacity="0.2";

}
////////////////////////////////////////

  editDepence(depenceFormm:FormGroup)
{
  const depenceDescription= depenceFormm.get('depenceDescription')?.value;
 const depencePrice= depenceFormm.get('depencePrice')?.value;


if(depenceDescription && depencePrice )
{

  this.depence_service.changeDepence(this.depence,depenceDescription,depencePrice).subscribe
  (
  /*  data=>{
      this.products= this.products.filter(x=> x.productId!=this.id_Delete);
    }*/
  );

}


  else
  alert("Vous devez remplir tous les champs");
 window.location.reload();
}




//////////////////////////////////////////////
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
  ////////////////////////////////////////////////
  dId!:number;
  public trach1( id :number):void
  {this.dId=id;


    this.c="1";


  const  container = document.getElementById('container') ;
  const  footer = document.getElementById('footer') ;

  container!.style.opacity="0.2";
  footer!.style.opacity="0.2";


  }


///////////////////////////////////////////////
//////////////////////////////////////////////
deleteDepence(){
  this.depence_service.deleteDepence(this.dId).subscribe
  (
    data=>{
      this.depences= this.depences.filter(m=> m.depenceId!=this.dId);
    }
  )
  this.retour_tab();
  window.location.reload();

}
}

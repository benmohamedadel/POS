import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ialert } from '../dashboard-manager/alerts';
import { AlertsTableService } from './alerts-table.service';

@Component({
  selector: 'app-alerts-table',
  templateUrl: './alerts-table.component.html',
  styleUrls: ['./alerts-table.component.css']
})

export class AlertsTableComponent implements OnInit {

  constructor( private alert_service:AlertsTableService,private router:Router) { }
  public alerts :Ialert[]=[];
  alertIddel!:number;
  public a="";
  public b="";
  public c="";
  auth:any;
  ngOnInit(): void {
    this.auth=localStorage.getItem('token');
    if(!this.auth)
    {  window.alert('you don\'t have permission to view this page');
      this.router.navigate(['/home']);

    }
this.alert_service.getAlerts().subscribe({
    next: alerts=>this.alerts=alerts





});
  }

  /////////////////////////////
  /////////////////////////////
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

  ///////////////////////////////
  ////////////////////////////////
public trach1( id :number):void
{
   this.alertIddel=id;
   this.c="1";


   const  container = document.getElementById('container') ;
   const  footer = document.getElementById('footer') ;

   container!.style.opacity="0.2";
   footer!.style.opacity="0.2";



}
//////////////////////////////////
/////////////////////////////////////
deleteAlert(){
  this.alert_service.deleteAlert(this.alertIddel ).subscribe
  (
    data=>{
      this.alerts= this.alerts.filter(x=> x.alertId!=this.alertIddel);
    }


  )
  this.retour_tab();

}
/////////////////////////
////////////////////////
public alerts_color(i:Date):string{
  return "red";

}
}

import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../dashboard-manager/product';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {
 public products:Iproduct[]=[]
  constructor() { }


  ngOnInit(): void {
  }

}

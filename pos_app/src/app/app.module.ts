import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {formatDate} from '@angular/common';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { DashboardManagerComponent } from './dashboard-manager/dashboard-manager.component';
import { ProductTableComponent } from './product-table/product-table.component';
import { AlertsTableComponent } from './alerts-table/alerts-table.component';
import { HttpClientModule } from '@angular/common/http';
import { PurchasesTableComponent } from './purchases-table/purchases-table.component';
import { DepensesTableComponent } from './depenses-table/depenses-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { NgxPrintModule } from 'ngx-print';
registerLocaleData(localeFr,'fr');
//formatDate(new Date(),'dd/MM/yyyy', 'fr');
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardManagerComponent,
    DashboardAdminComponent,
    ProductTableComponent,
    AlertsTableComponent,
    PurchasesTableComponent,
    DepensesTableComponent
  ],
  imports: [
    BrowserModule,NgxPrintModule,
    RouterModule.forRoot([
      {path :'home',component:LoginComponent},
    {path:'' ,redirectTo:'home',pathMatch:'full'},
    {path :'admin',component:DashboardAdminComponent},
    {path :'manager',component:DashboardManagerComponent,canActivate:[AuthGuard]},
    {path:'products_table',component:ProductTableComponent,},
    {path:'alerts_table',component:AlertsTableComponent,},
    {path:'purchases_table',component:PurchasesTableComponent,},
    {path:'depences_table',component:DepensesTableComponent,},

   ]),HttpClientModule,
   FormsModule,ReactiveFormsModule,
    ],

  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

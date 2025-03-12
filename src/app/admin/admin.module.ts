import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageCustomersComponent } from './components/manage-customers/manage-customers.component';
import { ManageAccountsComponent } from './components/manage-accounts/manage-accounts.component';
import { ViewAuditLogsComponent } from './components/view-audit-logs/view-audit-logs.component';
import { SearchTransactionsComponent } from './components/search-transactions/search-transactions.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    ManageCustomersComponent,
    ManageAccountsComponent,
    ViewAuditLogsComponent,
    SearchTransactionsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    FormsModule,
  ]
})
export class AdminModule { }

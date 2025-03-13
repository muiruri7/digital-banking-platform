import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ManageCustomersComponent } from './components/manage-customers/manage-customers.component';
import { ManageAccountsComponent } from './components/manage-accounts/manage-accounts.component';
import { ViewAuditLogsComponent } from './components/view-audit-logs/view-audit-logs.component';
import { SearchTransactionsComponent } from './components/search-transactions/search-transactions.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { CustomerUpdateComponent } from './components/customer-update/customer-update.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { AccountUpdateComponent } from './components/account-update/account-update.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    ManageCustomersComponent,
    ManageAccountsComponent,
    ViewAuditLogsComponent,
    SearchTransactionsComponent,
    CustomerDetailsComponent,
    CustomerUpdateComponent,
    CreateAccountComponent,
    AccountDetailsComponent,
    AccountUpdateComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    FormsModule,
  ]
})
export class AdminModule { }

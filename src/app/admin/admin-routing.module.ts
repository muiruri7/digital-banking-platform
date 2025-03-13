import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageCustomersComponent } from './components/manage-customers/manage-customers.component';
import { ManageAccountsComponent } from './components/manage-accounts/manage-accounts.component';
import { ViewAuditLogsComponent } from './components/view-audit-logs/view-audit-logs.component';
import { SearchTransactionsComponent } from './components/search-transactions/search-transactions.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component'; // Import the new components
import { CustomerUpdateComponent } from './components/customer-update/customer-update.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { AccountUpdateComponent } from './components/account-update/account-update.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'manage-customers', component: ManageCustomersComponent },
  { path: 'manage-accounts', component: ManageAccountsComponent },
  { path: 'view-audit-logs', component: ViewAuditLogsComponent },
  { path: 'search-transactions', component: SearchTransactionsComponent },
  { path: 'customer-details/:id', component: CustomerDetailsComponent }, // Add routes for the new components
  { path: 'customer-update/:id', component: CustomerUpdateComponent },
  { path: 'account-create', component: CreateAccountComponent },
  { path: 'account-details/:id', component: AccountDetailsComponent },
  { path: 'account-update/:id', component: AccountUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
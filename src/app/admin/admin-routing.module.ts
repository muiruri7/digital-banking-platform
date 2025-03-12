import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageCustomersComponent } from './components/manage-customers/manage-customers.component';
import { ManageAccountsComponent } from './components/manage-accounts/manage-accounts.component';
import { ViewAuditLogsComponent } from './components/view-audit-logs/view-audit-logs.component';
import { SearchTransactionsComponent } from './components/search-transactions/search-transactions.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'manage-customers', component: ManageCustomersComponent },
  { path: 'manage-accounts', component: ManageAccountsComponent },
  { path: 'view-audit-logs', component: ViewAuditLogsComponent },
  { path: 'search-transactions', component: SearchTransactionsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
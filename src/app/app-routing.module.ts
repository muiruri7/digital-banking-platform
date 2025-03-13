import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
// Import Customer Dashboard Component
import { CustomerDashboardComponent } from './customer/components/customer-dashboard/customer-dashboard.component';
// Import Admin Dashboard Component
import { AdminDashboardComponent } from './admin/components/admin-dashboard/admin-dashboard.component';
import { ProfileComponent } from './customer/components/profile/profile.component';
import { AccountsComponent } from './customer/components/accounts/accounts.component';
import { MiniStatementComponent } from './customer/components/mini-statement/mini-statement.component';
import { DepositWithdrawComponent } from './customer/components/deposit-withdraw/deposit-withdraw.component';
import { TransferComponent } from './customer/components/transfer/transfer.component';
import { NotificationsComponent } from './customer/components/notifications/notifications.component';
import { ManageCustomersComponent } from './admin/components/manage-customers/manage-customers.component';
import { ManageAccountsComponent } from './admin/components/manage-accounts/manage-accounts.component';
import { ViewAuditLogsComponent } from './admin/components/view-audit-logs/view-audit-logs.component';
import { SearchTransactionsComponent } from './admin/components/search-transactions/search-transactions.component';

const routes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' }, // Default route

  // Auth Routes
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/register', component: RegisterComponent },

  // Customer Routes
  {
    path: 'customer/dashboard',
    component: CustomerDashboardComponent,
    //canActivate: [AuthGuard], // Implement AuthGuard to protect routes
    data: { roles: ['CUSTOMER'] }  // Role-based access control
  },
  { path: 'customer/profile', component: ProfileComponent, data: { roles: ['CUSTOMER'] } },
  { path: 'customer/accounts', component: AccountsComponent, data: { roles: ['CUSTOMER'] } },
  { path: 'customer/mini-statement/:id', component: MiniStatementComponent, data: { roles: ['CUSTOMER'] } },
  { path: 'customer/deposit-withdraw', component: DepositWithdrawComponent, data: { roles: ['CUSTOMER'] } },
  { path: 'customer/transfer', component: TransferComponent, data: { roles: ['CUSTOMER'] } },
  { path: 'customer/notifications', component: NotificationsComponent, data: { roles: ['CUSTOMER'] } },

  // Admin Routes
  {
    path: 'admin/dashboard',
    component: AdminDashboardComponent,
    //canActivate: [AuthGuard], // Implement AuthGuard to protect routes
    data: { roles: ['ADMIN'] }      // Role-based access control
  },
  { path: 'admin/manage-customers', component: ManageCustomersComponent, data: { roles: ['ADMIN'] } },
  { path: 'admin/manage-accounts', component: ManageAccountsComponent, data: { roles: ['ADMIN'] } },
  { path: 'admin/view-audit-logs', component: ViewAuditLogsComponent, data: { roles: ['ADMIN'] } },
  { path: 'admin/search-transactions', component: SearchTransactionsComponent, data: { roles: ['ADMIN'] } },

  { path: '**', redirectTo: '/auth/login' }  // Wildcard route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
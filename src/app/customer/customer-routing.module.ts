import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { MiniStatementComponent } from './components/mini-statement/mini-statement.component';
import { DepositWithdrawComponent } from './components/deposit-withdraw/deposit-withdraw.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { NotificationsComponent } from './components/notifications/notifications.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'accounts', component: AccountsComponent },
  { path: 'mini-statement/:id', component: MiniStatementComponent },
  { path: 'deposit-withdraw', component: DepositWithdrawComponent },
  { path: 'transfer', component: TransferComponent },
  { path: 'notifications', component: NotificationsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
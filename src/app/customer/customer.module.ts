import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { MiniStatementComponent } from './components/mini-statement/mini-statement.component';
import { DepositWithdrawComponent } from './components/deposit-withdraw/deposit-withdraw.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CustomerComponent,
    CustomerDashboardComponent,
    ProfileComponent,
    AccountsComponent,
    MiniStatementComponent,
    DepositWithdrawComponent,
    TransferComponent,
    NotificationsComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    HttpClientModule,
    FormsModule,
  ]
})
export class CustomerModule { }

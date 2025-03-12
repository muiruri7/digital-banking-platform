import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-customer-deposit-withdraw',
  templateUrl: './deposit-withdraw.component.html',
  styleUrls: ['./deposit-withdraw.component.css']
})
export class DepositWithdrawComponent {
  accountNumber = '';
  amount = 0;
  transactionType = 'DEPOSIT'; // Default to deposit
  errorMessage = '';
  successMessage = '';

  constructor(private http: HttpClient, private authService: AuthService) {}

  depositWithdraw() {
    const payload = {
      accountNumber: this.accountNumber,
      amount: this.amount,
      type: this.transactionType
    };
    const token = this.authService.getToken();

    if (token) {
      this.http.post('YOUR_BACKEND_API_URL/api/transactions/deposit-withdraw', payload).subscribe({
        next: (response) => {
          this.successMessage = 'Transaction successful';
          this.errorMessage = '';
          // Reset form
          this.accountNumber = '';
          this.amount = 0;
          this.transactionType = 'DEPOSIT';
        },
        error: (error) => {
          this.errorMessage = 'Transaction failed';
          this.successMessage = '';
          console.error(error);
        }
      });
    } else {
      this.errorMessage = 'Authentication token not found';
    }
  }
}
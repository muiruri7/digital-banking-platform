import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-customer-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent {
  fromAccountNumber = '';
  toAccountNumber = '';
  amount = 0;
  errorMessage = '';
  successMessage = '';

  constructor(private http: HttpClient, private authService: AuthService) {}

  transferFunds() {
    const payload = {
      fromAccountNumber: this.fromAccountNumber,
      toAccountNumber: this.toAccountNumber,
      amount: this.amount
    };
    const token = this.authService.getToken();

    if (token) {
      this.http.post('YOUR_BACKEND_API_URL/api/transactions/transfer', payload).subscribe({
        next: (response) => {
          this.successMessage = 'Transfer successful';
          this.errorMessage = '';
          // Reset form
          this.fromAccountNumber = '';
          this.toAccountNumber = '';
          this.amount = 0;
        },
        error: (error) => {
          this.errorMessage = 'Transfer failed';
          this.successMessage = '';
          console.error(error);
        }
      });
    } else {
      this.errorMessage = 'Authentication token not found';
    }
  }
}
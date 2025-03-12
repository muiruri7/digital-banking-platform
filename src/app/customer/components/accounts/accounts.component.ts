import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-customer-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  accounts: any= ''; // Replace 'any' with a specific interface later
  errorMessage = '';

  constructor(private http: HttpClient, private authService: AuthService) {}

  ngOnInit(): void {
    this.loadAccounts();
  }

  loadAccounts() {
    // Assuming you have the customer ID stored in local storage or available
    // after decoding the JWT token
    const customerId = '123'; // Replace with actual customer ID retrieval logic
    const token = this.authService.getToken();

    if (token) {
      this.http.get(`YOUR_BACKEND_API_URL/api/accounts/${customerId}`).subscribe({
        next: (data: any) => { // Replace 'any' with a specific interface later
          this.accounts = data;
        },
        error: (error) => {
          this.errorMessage = 'Error loading accounts';
          console.error(error);
        }
      });
    } else {
      this.errorMessage = 'Authentication token not found';
    }
  }
}
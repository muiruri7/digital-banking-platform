import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-admin-manage-accounts',
  templateUrl: './manage-accounts.component.html',
  styleUrls: ['./manage-accounts.component.css']
})
export class ManageAccountsComponent implements OnInit {
  accounts: any= ''; // Replace 'any' with a specific interface later
  errorMessage = '';

  constructor(private http: HttpClient, private authService: AuthService) {}

  ngOnInit(): void {
    this.loadAccounts();
  }

  loadAccounts() {
    const token = this.authService.getToken();

    if (token) {
      this.http.get('YOUR_BACKEND_API_URL/api/accounts').subscribe({
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

  // Implement methods for:
  // - Create Account
  // - View Account Details
  // - Update Account
  // - Freeze Account
  // - Unfreeze Account
  // These methods will make API calls to your backend.
  // Example:
  // createAccount() { ... }
  // viewAccountDetails(accountId: string) { ... }
  // updateAccount(account: any) { ... }
  // freezeAccount(accountId: string) { ... }
  // unfreezeAccount(accountId: string) { ... }
}
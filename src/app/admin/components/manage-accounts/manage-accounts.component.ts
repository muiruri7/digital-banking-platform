import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../auth/auth.service';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-admin-manage-accounts',
  templateUrl: './manage-accounts.component.html',
  styleUrls: ['./manage-accounts.component.css']
})
export class ManageAccountsComponent implements OnInit {
  accounts: any= '';
  errorMessage = '';

  constructor(private http: HttpClient, private authService: AuthService, private router: Router) {} // Inject Router

  ngOnInit(): void {
    this.loadAccounts();
  }

  loadAccounts() {
    const token = this.authService.getToken();

    if (token) {
      this.http.get('YOUR_BACKEND_API_URL/api/accounts').subscribe({
        next: (data: any) => {
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

  createAccount() {
    // Navigate to a create account page (you might need to create this component)
    this.router.navigate(['/admin/account-create']);
  }

  viewAccountDetails(accountId: string) {
    // Navigate to an account details page (you might need to create this component)
    this.router.navigate(['/admin/account-details', accountId]);
  }

  updateAccount(account: any) {
    // Navigate to an account update page (you might need to create this component)
    this.router.navigate(['/admin/account-update', account.id]);
  }

  freezeAccount(accountId: string) {
    this.updateAccountStatus(accountId, 'FROZEN');
  }

  unfreezeAccount(accountId: string) {
    this.updateAccountStatus(accountId, 'ACTIVE');
  }

  private updateAccountStatus(accountId: string, status: string) {
    const token = this.authService.getToken();
    if (token) {
      this.http.put(`YOUR_BACKEND_API_URL/api/accounts/${accountId}/status`, { status: status }).subscribe({
        next: (response) => {
          // Handle successful status update (e.g., refresh account list)
          this.loadAccounts();
        },
        error: (error) => {
          this.errorMessage = 'Error updating account status';
          console.error(error);
        }
      });
    } else {
      this.errorMessage = 'Authentication token not found';
    }
  }
}
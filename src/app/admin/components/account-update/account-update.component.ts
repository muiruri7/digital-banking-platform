import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../auth/auth.service'; // Assuming AuthService is in app/auth

@Component({
  selector: 'app-account-update',
  templateUrl: './account-update.component.html',
  styleUrls: ['./account-update.component.css']
})
export class AccountUpdateComponent implements OnInit {
  account: any; // Replace 'any' with a specific interface later
  errorMessage = '';
  accountId: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.accountId = params['id'];
      if (this.accountId) {
        this.loadAccountDetails(this.accountId);
      }
    });
  }

  loadAccountDetails(accountId: string) {
    const token = this.authService.getToken();
    if (token) {
      this.http.get(`YOUR_BACKEND_API_URL/api/accounts/${accountId}`).subscribe({
        next: (data: any) => {
          this.account = data;
        },
        error: (error) => {
          this.errorMessage = 'Error loading account details';
          console.error(error);
        }
      });
    } else {
      this.errorMessage = 'Authentication token not found';
    }
  }

  updateAccount() {
    const token = this.authService.getToken();
    if (token && this.account) {
      this.http.put(`YOUR_BACKEND_API_URL/api/accounts/${this.account.id}`, this.account).subscribe({
        next: (response) => {
          // Handle successful update (e.g., show success message, navigate back)
          this.router.navigate(['/admin/manage-accounts']);
        },
        error: (error) => {
          this.errorMessage = 'Error updating account';
          console.error(error);
        }
      });
    } else {
      this.errorMessage = 'Authentication token not found or account data missing';
    }
  }
}
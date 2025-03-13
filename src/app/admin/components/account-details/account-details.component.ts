import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../auth/auth.service'; // Assuming AuthService is in app/auth

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {
  account: any; // Replace 'any' with a specific interface later
  errorMessage = '';
  accountId: string | null = null;

  constructor(
    private route: ActivatedRoute,
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
}
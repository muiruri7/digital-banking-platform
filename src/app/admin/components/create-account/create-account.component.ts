import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/auth.service'; // Assuming AuthService is in app/auth

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {
  account: any = {}; // Replace 'any' with a specific interface later
  errorMessage = '';

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) {}

  createAccount() {
    const token = this.authService.getToken();
    if (token) {
      this.http.post('YOUR_BACKEND_API_URL/api/accounts', this.account).subscribe({
        next: (response) => {
          // Handle successful account creation (e.g., show success message, navigate back)
          this.router.navigate(['/admin/manage-accounts']);
        },
        error: (error) => {
          this.errorMessage = 'Error creating account';
          console.error(error);
        }
      });
    } else {
      this.errorMessage = 'Authentication token not found';
    }
  }
}
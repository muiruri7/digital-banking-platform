import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: any; // Replace 'any' with a specific interface later
  errorMessage = '';

  constructor(private http: HttpClient, private authService: AuthService) {}

  ngOnInit(): void {
    this.loadProfile();
  }

  loadProfile() {
    // Assuming you have the customer ID stored in local storage or available
    // after decoding the JWT token
    const customerId = '123'; // Replace with actual customer ID retrieval logic
    const token = this.authService.getToken(); // Get the token

    if (token) {
      // You might need to include the token in the request headers for authorization
      // Example:
      // const headers = new HttpHeaders({
      //   'Authorization': `Bearer ${token}`
      // });
      // return this.http.get(`${this.apiUrl}/customers/${customerId}`, { headers });

      this.http.get(`YOUR_BACKEND_API_URL/api/customers/${customerId}`).subscribe({
        next: (data) => {
          this.profile = data;
        },
        error: (error) => {
          this.errorMessage = 'Error loading profile';
          console.error(error);
        }
      });
    } else {
      this.errorMessage = 'Authentication token not found';
    }
  }
}
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-customer-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  notifications: any= ''; // Replace 'any' with a specific interface later
  errorMessage = '';

  constructor(private http: HttpClient, private authService: AuthService) {}

  ngOnInit(): void {
    this.loadNotifications();
  }

  loadNotifications() {
    // Assuming you have the customer ID stored in local storage or available
    // after decoding the JWT token
    const customerId = '123'; // Replace with actual customer ID retrieval logic
    const token = this.authService.getToken();

    if (token) {
      this.http.get('YOUR_BACKEND_API_URL/api/notifications/${customerId}').subscribe({
        next: (data: any) => { // Replace 'any' with a specific interface later
          this.notifications = data;
        },
        error: (error) => {
          this.errorMessage = 'Error loading notifications';
          console.error(error);
        }
      });
    } else {
      this.errorMessage = 'Authentication token not found';
    }
  }
}
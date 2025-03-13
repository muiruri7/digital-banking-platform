import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service'; // Assuming AuthService is in app/auth

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  username: string | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // For simplicity, let's extract the username from the token (if available)
    // In a real-world scenario, you might fetch the admin's profile details
    // from the backend and store it in local storage upon login.
    const token = this.authService.getToken();
    if (token) {
      // This is a placeholder - you'll need to decode the token to get the username
      // You can use a library like `jwt-decode` for this (npm install jwt-decode)
      // For now, let's just set a dummy username
      this.username = 'Administrator'; // Replace with actual username extraction logic
    }
  }
}
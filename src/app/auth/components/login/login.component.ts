import { Component } from '@angular/core';
import { AuthService } from '../../auth.service'; // We'll create this service later
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login({ username: this.username, password: this.password }).subscribe({      next: (response: any) => { // Replace 'any' with a specific interface later
        // Assuming the response contains a JWT token
        const token = response.token;
        const role = response.role; // Assuming the role is also in the response
        this.authService.storeToken(token);
        this.authService. storeLoggedInRole(role);
        if (role === 'ADMIN') {
          this.router.navigate(['/admin']);
        } else if (role === 'CUSTOMER') {
          this.router.navigate(['/customer']);
        } else {
          this.errorMessage = 'Invalid role';
        }
      },
      error: (error) => {
        this.errorMessage = 'Invalid credentials';
        console.error(error);
      }
    });
  }
}
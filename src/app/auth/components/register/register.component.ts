import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username = '';
  password = '';
  role = 'CUSTOMER'; // Default role
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    this.authService.register(this.username, this.password, this.role).subscribe({
      next: (response) => {
        // Assuming successful registration navigates to login
        this.router.navigate(['/auth/login']);
      },
      error: (error) => {
        this.errorMessage = 'Registration failed';
        console.error(error);
      }
    });
  }
}
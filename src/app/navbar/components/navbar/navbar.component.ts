import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;
  role: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.checkLoginStatus();
  }

  checkLoginStatus(): void {
    this.isLoggedIn = this.authService.getToken() !== null;
    this.role = this.authService.getLoggedInRole();
  }

  logout(): void {
    this.authService.removeToken();
    this.authService.removeLoggedInRole();
    this.router.navigate(['/auth/login']);
    this.checkLoginStatus(); // Update login status immediately
  }
}
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  isLoggedIn = false;
  role: string | null = null;
  username: string | null = null;
  tokenSubscription: Subscription | undefined;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.checkLoginStatus();
    this.tokenSubscription = this.authService.tokenRefreshed$.subscribe(() => {
      this.checkLoginStatus();
    });
  }

  ngOnDestroy(): void {
    if (this.tokenSubscription) {
      this.tokenSubscription.unsubscribe();
    }
  }

  checkLoginStatus(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    if (this.isLoggedIn) {
      const decodedToken = this.authService.getDecodedToken();
      this.role = this.authService.getLoggedInRole();
      this.username = decodedToken ? decodedToken.sub : null;
    } else {
      this.role = null;
      this.username = null;
    }
  }

  logout(): void {
    this.authService.removeToken();
    this.authService.removeLoggedInRole();
    this.router.navigate(['/auth/login']);
    this.checkLoginStatus();
  }

  getAccountId(): string {
    // Logic to get account ID (replace with your actual implementation)
    return '12345'; // Placeholder
  }
}
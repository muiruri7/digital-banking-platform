import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router'; // Import ActivatedRoute
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-customer-mini-statement',
  templateUrl: './mini-statement.component.html',
  styleUrls: ['./mini-statement.component.css']
})
export class MiniStatementComponent implements OnInit {
  transactions: any= ''; // Replace 'any' with a specific interface later
  errorMessage = '';
  accountId: string | null = null; // To store the account ID

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute, // Inject ActivatedRoute
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    // Get the account ID from the route parameters
    this.route.params.subscribe(params => {
      this.accountId = params['id']; // Assuming the route parameter is named 'id'
      if (this.accountId) {
        this.loadMiniStatement(this.accountId);
      }
    });
  }

  loadMiniStatement(accountId: string) {
    const token = this.authService.getToken();

    if (token) {
      this.http.get(`YOUR_BACKEND_API_URL/api/transactions/account/${accountId}`).subscribe({
        next: (data: any) => { // Replace 'any' with a specific interface later
          this.transactions = data;
        },
        error: (error) => {
          this.errorMessage = 'Error loading mini-statement';
          console.error(error);
        }
      });
    } else {
      this.errorMessage = 'Authentication token not found';
    }
  }
}
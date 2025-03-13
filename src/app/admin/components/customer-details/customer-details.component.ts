import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../auth/auth.service'; // Assuming AuthService is in app/auth

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  customer: any; // Replace 'any' with a specific interface later
  errorMessage = '';
  customerId: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.customerId = params['id'];
      if (this.customerId) {
        this.loadCustomerDetails(this.customerId);
      }
    });
  }

  loadCustomerDetails(customerId: string) {
    const token = this.authService.getToken();
    if (token) {
      this.http.get(`YOUR_BACKEND_API_URL/api/customers/${customerId}`).subscribe({
        next: (data: any) => {
          this.customer = data;
        },
        error: (error) => {
          this.errorMessage = 'Error loading customer details';
          console.error(error);
        }
      });
    } else {
      this.errorMessage = 'Authentication token not found';
    }
  }
}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../auth/auth.service'; // Assuming AuthService is in app/auth

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {
  customer: any; // Replace 'any' with a specific interface later
  errorMessage = '';
  customerId: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
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

  updateCustomer() {
    const token = this.authService.getToken();
    if (token && this.customer) {
      this.http.put(`YOUR_BACKEND_API_URL/api/customers/${this.customer.id}`, this.customer).subscribe({
        next: (response) => {
          // Handle successful update (e.g., show success message, navigate back)
          this.router.navigate(['/admin/manage-customers']);
        },
        error: (error) => {
          this.errorMessage = 'Error updating customer';
          console.error(error);
        }
      });
    } else {
      this.errorMessage = 'Authentication token not found or customer data missing';
    }
  }
}
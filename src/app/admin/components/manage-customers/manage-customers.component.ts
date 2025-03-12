import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-admin-manage-customers',
  templateUrl: './manage-customers.component.html',
  styleUrls: ['./manage-customers.component.css']
})
export class ManageCustomersComponent implements OnInit {
  customers: any= ''; // Replace 'any' with a specific interface later
  errorMessage = '';

  constructor(private http: HttpClient, private authService: AuthService) {}

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers() {
    const token = this.authService.getToken();

    if (token) {
      this.http.get('YOUR_BACKEND_API_URL/api/customers').subscribe({
        next: (data: any) => { // Replace 'any' with a specific interface later
          this.customers = data;
        },
        error: (error) => {
          this.errorMessage = 'Error loading customers';
          console.error(error);
        }
      });
    } else {
      this.errorMessage = 'Authentication token not found';
    }
  }

  // Implement methods for:
  // - View Customer Details
  // - Deactivate Customer
  // - Update Customer
  // These methods will make API calls to your backend.
  // Example:
  // viewCustomerDetails(customerId: string) { ... }
  // deactivateCustomer(customerId: string) { ... }
  // updateCustomer(customer: any) { ... }
}
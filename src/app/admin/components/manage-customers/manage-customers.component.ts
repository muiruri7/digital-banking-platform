import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../auth/auth.service';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-admin-manage-customers',
  templateUrl: './manage-customers.component.html',
  styleUrls: ['./manage-customers.component.css']
})
export class ManageCustomersComponent implements OnInit {
  customers: any= '';
  errorMessage = '';

  constructor(private http: HttpClient, private authService: AuthService, private router: Router) {} // Inject Router

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers() {
    const token = this.authService.getToken();

    if (token) {
      this.http.get('YOUR_BACKEND_API_URL/api/customers').subscribe({
        next: (data: any) => {
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

  viewCustomerDetails(customerId: string) {
    // Navigate to a customer details page (you might need to create this component)
    this.router.navigate(['/admin/customer-details', customerId]);
  }

  deactivateCustomer(customerId: string) {
    const token = this.authService.getToken();
    if (token) {
      this.http.put(`YOUR_BACKEND_API_URL/api/customers/${customerId}/deactivate`, {}).subscribe({
        next: (response) => {
          // Handle successful deactivation (e.g., refresh customer list)
          this.loadCustomers();
        },
        error: (error) => {
          this.errorMessage = 'Error deactivating customer';
          console.error(error);
        }
      });
    } else {
      this.errorMessage = 'Authentication token not found';
    }
  }

  updateCustomer(customer: any) {
    // Navigate to a customer update page (you might need to create this component)
    this.router.navigate(['/admin/customer-update', customer.id]);
  }
}
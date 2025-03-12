import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-admin-search-transactions',
  templateUrl: './search-transactions.component.html',
  styleUrls: ['./search-transactions.component.css']
})
export class SearchTransactionsComponent {
  transactions: any= ''; // Replace 'any' with a specific interface later
  errorMessage = '';
  // Add properties for filter criteria
  dateRange = '';
  transactionType = '';
  amountRange = '';

  constructor(private http: HttpClient, private authService: AuthService) {}

  searchTransactions() {
    const token = this.authService.getToken();

    if (token) {
      // Implement logic to build the query based on filter criteria
      // Example:
      // let url = 'YOUR_BACKEND_API_URL/api/transactions/search?';
      // if (this.dateRange) {
      //   url += `dateRange=${this.dateRange}&`;
      // }
      // ...
      // this.http.get(url).subscribe({ ... });

      this.http.get('YOUR_BACKEND_API_URL/api/transactions/search').subscribe({
        next: (data: any) => { // Replace 'any' with a specific interface later
          this.transactions = data;
        },
        error: (error) => {
          this.errorMessage = 'Error searching transactions';
          console.error(error);
        }
      });
    } else {
      this.errorMessage = 'Authentication token not found';
    }
  }
}
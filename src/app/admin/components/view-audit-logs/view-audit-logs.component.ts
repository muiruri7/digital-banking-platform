import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-admin-view-audit-logs',
  templateUrl: './view-audit-logs.component.html',
  styleUrls: ['./view-audit-logs.component.css']
})
export class ViewAuditLogsComponent implements OnInit {
  auditLogs: any= ''; // Replace 'any' with a specific interface later
  errorMessage = '';
  searchQuery = ''; // For searching logs

  constructor(private http: HttpClient, private authService: AuthService) {}

  ngOnInit(): void {
    this.loadAuditLogs();
  }

  loadAuditLogs() {
    const token = this.authService.getToken();

    if (token) {
      // Implement logic to handle search query if needed
      // Example:
      // let url = 'YOUR_BACKEND_API_URL/api/audit/logs';
      // if (this.searchQuery) {
      //   url += `?search=${this.searchQuery}`;
      // }
      // this.http.get(url).subscribe({ ... });

      this.http.get('YOUR_BACKEND_API_URL/api/audit/logs').subscribe({
        next: (data: any) => { // Replace 'any' with a specific interface later
          this.auditLogs = data;
        },
        error: (error) => {
          this.errorMessage = 'Error loading audit logs';
          console.error(error);
        }
      });
    } else {
      this.errorMessage = 'Authentication token not found';
    }
  }

  // Implement method for searching logs
  // searchLogs() { ... }
}
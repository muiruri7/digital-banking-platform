import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'YOUR_BACKEND_API_URL'; // Replace with your backend API URL
  private readonly TOKEN_KEY = 'auth_token';
  private readonly ROLE_KEY = 'auth_role';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, { username, password });
  }

  register(username: string, password: string, role: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/register`, { username, password, role });
  }

  saveToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  removeToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  setLoggedInRole(role: string): void {
    localStorage.setItem(this.ROLE_KEY, role);
  }

  getLoggedInRole(): string | null {
    return localStorage.getItem(this.ROLE_KEY);
  }

  removeLoggedInRole(): void {
    localStorage.removeItem(this.ROLE_KEY);
  }

  // You might need a method to handle JWT expiration and refresh tokens
  // This is a more advanced topic and depends on your backend implementation
}
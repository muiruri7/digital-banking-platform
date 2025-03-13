import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'YOUR_BACKEND_API_URL/auth';
  private tokenRefreshedSource = new BehaviorSubject<void>(undefined);
  tokenRefreshed$ = this.tokenRefreshedSource.asObservable();

  constructor(private http: HttpClient, private router: Router) { }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
      catchError(this.handleError)
    );
  }

  register(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData).pipe(
      catchError(this.handleError)
    );
  }

  storeToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  removeToken(): void {
    localStorage.removeItem('token');
  }

  storeLoggedInRole(role: string): void {
    localStorage.setItem('role', role);
  }

  getLoggedInRole(): string | null {
    return localStorage.getItem('role');
  }

  removeLoggedInRole(): void {
    localStorage.removeItem('role');
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }

  getDecodedToken(): any | null {
    const token = this.getToken();
    if (token) {
      try {
        return jwt_decode.jwtDecode(token);
      } catch (error) {
        console.error('Error decoding token:', error);
        return null;
      }
    }
    return null;
  }

  isTokenExpired(): boolean {
    const decodedToken = this.getDecodedToken();
    if (decodedToken && decodedToken.exp) {
      return Date.now() >= decodedToken.exp * 1000;
    }
    return true;
  }

  refreshToken(): Observable<any> {
    return this.http.post(`${this.apiUrl}/refresh`, {}).pipe(
      catchError(this.handleError),
      tap((response: any) => {
        const newToken = response.token;
        this.storeToken(newToken);
        this.tokenRefreshedSource.next(undefined);
      })
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
}
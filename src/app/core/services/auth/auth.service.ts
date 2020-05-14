import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { IUser } from '../../../shared/interfaces/user';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {
  }

  public login(user: Pick<IUser, 'email' | 'password'>): Observable<IUser | never> {
    const url = apiUrl + '/login';
    return this.httpClient.post<{ token: string, user: IUser }>(url, user).pipe(
      tap((response) => {
        localStorage.setItem('token', response.token);
      }),
      map(response => {
        return response.user;
      }),
      catchError(error => {
        return throwError(error);
      })
    );
  }

  public registrate(user: Omit<IUser, 'tasks' | 'assignedTasks'>): Observable<IUser | never> {
    const url = apiUrl + '/register';
    return this.httpClient.post<{ user: IUser }>(url, user).pipe(
      map(response => {
        return response.user;
      }),
      catchError(error => {
        return throwError(error);
      })
    );
  }

  public logout(): void {
    localStorage.removeItem('token');
  }

  public isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }
}

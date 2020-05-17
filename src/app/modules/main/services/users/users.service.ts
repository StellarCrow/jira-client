import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { IUser } from '../../../../shared/interfaces/user';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../../../../../environments/environment';
import { catchError, map } from 'rxjs/operators';
import { ISelectOption } from '../../../../shared/interfaces/select-option';
import { assigneeIconColorDefault, assigneeIconDefault } from '../../../../constants/task.constants';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) {
  }

  public getCurrentUser(): Observable<IUser | never> {
    const url = apiUrl + '/user';
    return this.httpClient.get<IUser>(url).pipe(
      map(user => {
        return user;
      }),
      catchError(error => {
        return throwError(error);
      })
    );
  }

  public getUsersOptionList(): Observable<ISelectOption[] | never> {
    const url = apiUrl + '/users';
    return this.httpClient.get<IUser[]>(url).pipe(
      map(users => {
        return users.map(user => {
          return { name: user.name, value: user._id, icon: assigneeIconDefault, color: assigneeIconColorDefault };
        });
      }),
      catchError(error => {
        return throwError(error);
      })
    );
  }
}

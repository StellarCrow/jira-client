import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { apiUrl } from '../../../../../environments/environment';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ITask } from '../../../../shared/interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  constructor(private httpClient: HttpClient) {
  }

  public getIssueInfo(id: string): Observable<ITask | never> {
    const url = apiUrl + `/task/${id}`;
    return this.httpClient.get<{ task: ITask }>(url).pipe(
      map(res => {
        return res.task;
      }),
      catchError(error => {
        return throwError(error);
      })
    );
  }

  public updateIssue(id: string, update: object): Observable<string | never> {
    const url = apiUrl + `/task/${id}`;
    return this.httpClient.patch<{ message: string }>(url, { update }).pipe(
      map(response => {
        return response.message;
      }),
      catchError(error => {
        return throwError(error);
      })
    );
  }
}

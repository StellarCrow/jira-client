import { Injectable } from '@angular/core';
import { ITask } from '../../../../shared/interfaces/task';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../../../../../environments/environment';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private httpClient: HttpClient) {
  }

  public createTask(task: ITask): Observable<ITask | never> {
    const url = apiUrl + '/task';
    return this.httpClient.post<ITask>(url, task).pipe(
      map(response => {
        return response;
      }),
      catchError(error => {
        return throwError(error);
      })
    );
  }

  public getAllTasks(): Observable<ITask[] | never> {
    const url = apiUrl + '/task';
    return this.httpClient.get<{ tasks: ITask[] }>(url).pipe(
      map(response => {
        return response.tasks;
      }),
      catchError(error => {
        return throwError(error);
      })
    );
  }
}

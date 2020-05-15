import { Injectable } from '@angular/core';
import { ITask } from '../../../../shared/interfaces/task';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../../../../../environments/environment';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private httpClient: HttpClient) {
  }

  public createTask(task: ITask): void {
    const url = apiUrl + '/task';
    this.httpClient.post(url, task).pipe(
      map(response => {
        return response;
      }),
      catchError(error => {
        return throwError(error);
      })
    );
  }
}

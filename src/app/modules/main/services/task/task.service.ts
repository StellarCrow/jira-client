import { Injectable } from '@angular/core';
import { ITask } from '../../../../shared/interfaces/task';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../../../../../environments/environment';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { taskStatusList } from '../../../../constants/task.constants';
import { IFilteredTasks } from '../../../../shared/interfaces/filtered-tasks';

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

  public getAllTasks(): Observable<IFilteredTasks | never> {
    const url = apiUrl + '/task';
    return this.httpClient.get<{ tasks: ITask[] }>(url).pipe(
      map(response => {
        return response.tasks.reduce((acc, item) => {
          for (const status of Object.keys(taskStatusList)) {
            const arrayName = status.toLowerCase();
            if (taskStatusList[status] === item.status) {
              if (!acc[arrayName]) {
                acc[arrayName] = [];
              }

              acc[arrayName].push(item);
            }
          }
          return acc;
        }, {} as IFilteredTasks);
      }),
      catchError(error => {
        return throwError(error);
      })
    );
  }
}

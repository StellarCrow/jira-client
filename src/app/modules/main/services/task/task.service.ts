import { Injectable } from '@angular/core';
import { ITask } from '../../../../shared/interfaces/task';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../../../../../environments/environment';
import { catchError, map, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { taskStatusList } from '../../../../constants/task.constants';
import { IFilteredTasks } from '../../../../shared/interfaces/filtered-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private taskListObject: IFilteredTasks;
  private taskSubject = new BehaviorSubject<IFilteredTasks>({ todo: [], progress: [], testing: [], done: [] });
  public tasks$: Observable<IFilteredTasks> = this.taskSubject.asObservable();

  constructor(private httpClient: HttpClient) {
    this.getAllTasks().subscribe();
  }

  public createTask(task: ITask): Observable<ITask | never> {
    const url = apiUrl + '/task';
    return this.httpClient.post<{ task: ITask }>(url, task).pipe(
      map(response => {
        this.taskListObject.todo.push(response.task);
        this.taskSubject.next(this.taskListObject);
        return response.task;
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
            if (!acc[arrayName]) {
              acc[arrayName] = [];
            }
            if (taskStatusList[status] === item.status) {
              acc[arrayName].push(item);
            }
          }
          return acc;
        }, {} as IFilteredTasks);
      }),
      tap((object) => {
        this.taskListObject = object;
        this.taskSubject.next(this.taskListObject);
      }),
      catchError(error => {
        return throwError(error);
      })
    );
  }
}

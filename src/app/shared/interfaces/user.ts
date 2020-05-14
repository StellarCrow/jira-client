import {ITask} from './task';

export interface IUser {
  email: string;
  password: string;
  name: string;
  tasks: ITask;
  assignedTasks: ITask[];
}

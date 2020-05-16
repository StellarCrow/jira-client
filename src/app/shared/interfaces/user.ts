import {ITask} from './task';

export interface IUser {
  _id: string;
  email: string;
  password: string;
  name: string;
  tasks: ITask;
  assignedTasks: ITask[];
}

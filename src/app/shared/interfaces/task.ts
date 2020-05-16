import {IUser} from './user';

export interface ITask {
  _id: string;
  title: string;
  summary: string;
  description: string;
  reporter: IUser;
  assignee: IUser;
  created: Date;
  updated: Date;
  deadline: Date;
  type: string;
  priority: string;
  status: string;
  resolution: string;
  labels: string[];
}

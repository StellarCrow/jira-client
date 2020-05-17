import { ITask } from './task';

export interface IFilteredTasks {
  todo: ITask[];
  progress: ITask[];
  testing: ITask[];
  done: ITask[];
}

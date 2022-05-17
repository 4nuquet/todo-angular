import { createAction, props } from '@ngrx/store';
import { singleTask } from './task.state';

enum TYPE_ACTIONS {
  save = '[save] task saved',
  get = '[get] task got',
}

export const saveTask = createAction(TYPE_ACTIONS.save, props<singleTask>());
export const getTask = createAction(TYPE_ACTIONS.get);

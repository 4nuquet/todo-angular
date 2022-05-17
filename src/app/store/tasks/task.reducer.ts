import { createReducer, on } from '@ngrx/store';
import { saveTask } from './task.actions';
import { initialTaskState, singleTask, taskState } from './task.state';

const _tasksReducer = createReducer(
  initialTaskState,
  on(saveTask, (state, { done, title }) => updateTasks(state, { title, done }))
);

function updateTasks(state: any, task: singleTask) {
  return {
    tasks: state.tasks.concat(task),
  };
}

export function taksReducer(state: any, action: any) {
  return _tasksReducer(state, action);
}

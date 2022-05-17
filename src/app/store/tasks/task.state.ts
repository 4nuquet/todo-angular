export const initialTaskState: taskState = {
  tasks: [],
};

export interface taskState {
  tasks: [] | [singleTask];
}

export interface singleTask {
  title: string;
  done: boolean;
}

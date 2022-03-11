import { createAction, props } from '@ngrx/store';

enum TYPE_ACTIONS {
  save = '[save] nickname saved',
  get = '[get] nickname got',
}

export const saveNickname = createAction(
  TYPE_ACTIONS.save,
  props<SaveNickname>()
);
export const getNickname = createAction(TYPE_ACTIONS.get);

interface SaveNickname {
  nickname: string;
}

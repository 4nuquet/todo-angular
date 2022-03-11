import { createReducer, on } from '@ngrx/store';
import { saveNickname } from './nickname.actions';
import { initialState } from './nickname.state';

const _nicknameReducer = createReducer(
  initialState,
  on(saveNickname, (state, { nickname }) => changeNickname(state, nickname))
);

function changeNickname(state: any, nickname: any) {
  return {
    ...state,
    nickname,
  };
}

export function nicknameReducer(state: any, action: any) {
  return _nicknameReducer(state, action);
}

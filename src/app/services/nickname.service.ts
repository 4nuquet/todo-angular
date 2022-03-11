import { Injectable } from '@angular/core';
import { LocalStoreKeys } from '../enums/store-keys';

@Injectable({
  providedIn: 'root',
})
export class NicknameService {
  constructor() {}

  save(nickname: string) {
    localStorage.setItem(LocalStoreKeys.nickname, nickname);
  }

  get() {
    return localStorage.getItem(LocalStoreKeys.nickname);
  }
}

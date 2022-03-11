import { TestBed } from '@angular/core/testing';

import { NicknameService } from './nickname.service';

describe('NicknameService', () => {
  let service: NicknameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NicknameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

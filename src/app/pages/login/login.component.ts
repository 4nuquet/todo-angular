import { NicknameService } from './../../services/nickname.service';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { nicknameState } from 'src/app/store/nickname/nickname.state';
import { saveNickname } from 'src/app/store/nickname/nickname.actions';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private nicknameService: NicknameService,
    private store: Store<nicknameState>
  ) {
    this.loginForm = this.formBuilder.group({
      nickname: ['', [Validators.required]],
    });
  }

  get nickname(): AbstractControl | null {
    return this.loginForm.get('nickname');
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.store.dispatch(saveNickname({ nickname: this.nickname?.value }));
      this.nicknameService.save(this.nickname?.value);
      this.router.navigate(['/home']);
    }
  }
}

import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/components/task-card/task-card.component';
import { NicknameService } from 'src/app/services/nickname.service';
import { RamApiService } from 'src/app/services/ram-api.service';
import { Store } from '@ngrx/store';
import { nicknameState } from 'src/app/store/nickname/nickname.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  nickname$: Observable<string>;
  nickname: string | null = '';
  listTasks: Array<Task> = [];
  listCharacters: any = [];

  task = '';

  constructor(
    private nicknameService: NicknameService,
    private ramApiService: RamApiService,
    private store: Store<nicknameState>
  ) {
    this.nickname$ = this.store.select('nickname');
  }

  ngOnInit(): void {
    this.nickname$.subscribe((res: any) => {
      console.log(res);
      this.nickname = res.nickname;
    });
    this.nickname = this.nicknameService.get();
    this.fetchApi();
  }

  eventFromNav(msg: string | null) {
    alert(msg);
  }

  addTask() {
    this.listTasks.push({
      id: this.generateId(),
      title: this.task,
      state: false,
    });
    //this.getSingleChar(this.task);
    this.task = '';
  }

  removeTask(tsk: any) {
    this.listTasks = this.listTasks.filter(
      (singleTask) => singleTask.id !== tsk.id
    );
  }

  doneTask(tsk: any) {
    this.listTasks = this.listTasks.map((singleTask) => {
      return singleTask.id === tsk.id
        ? {
            ...singleTask,
            state: true,
          }
        : singleTask;
    });
  }

  fetchApi() {
    this.ramApiService.getAllCharacters().subscribe((res: any) => {
      console.log('desde Rick and Morty API', res);
      this.listCharacters = res.results;
    });
  }

  // getSingleChar(id: any) {
  //   this.ramApiService.getSingleCharacter(id).subscribe((res: any) => {
  //     console.log('getSingleChar', res);
  //     this.listCharacters = [res];
  //   });
  // }

  generateId(): number {
    return Math.floor(Math.random() * 100);
  }
}

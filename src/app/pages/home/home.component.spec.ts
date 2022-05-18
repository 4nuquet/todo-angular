import { RamApiService } from './../../services/ram-api.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';
import { of, throwError } from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let ramApiService: RamApiService;
  const initialState = { nickname: 'test' };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [
        provideMockStore({ initialState }),
        {
          provide: RamApiService,
          useValue: {
            getAllCharacters: () =>
              of({
                results: [
                  {
                    id: 1,
                    name: 'Rick Sanchez',
                    status: 'Alive',
                    species: 'Human',
                    gender: 'Male',
                    origin: {
                      name: 'Earth',
                      url: 'https://rickandmortyapi.com/api/location/1',
                    },
                  },
                ],
              }),
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deberia devolver algo', () => {
    spyOn(window, 'alert');
    component.eventFromNav('hola'),
      expect(window.alert).toHaveBeenCalledWith('hola');
  });

  it('deberia agregar tarea', () => {
    component.task = 'Hacer la cama';
    component.addTask();
    expect(component.listTasks.length).toBeGreaterThan(0);
  });

  it('deberia quitar tarea', () => {
    component.task = 'Hacer la cama2';
    component.addTask();
    const singleTask = component.listTasks[0];
    component.removeTask(singleTask);
    expect(component.listTasks.length).toBeLessThan(1);
  });

  it('deberia completar tarea', () => {
    component.task = 'Hacer la cama2';
    component.addTask();
    const singleTask = component.listTasks[0];
    component.doneTask(singleTask);
    expect(component.listTasks[0].state).toBeTruthy();
  });

  it('deberia devolver tarea', () => {
    component.task = 'Hacer la cama2';
    component.addTask();
    const oldArray = component.listTasks;

    const singleTask = {
      id: 1231,
      title: 'hola',
      state: true,
    };
    component.doneTask(singleTask);

    expect(component.listTasks).toEqual(oldArray);
  });

  it('deberia generar un numero mayor a 100', () => {
    expect(component.generateId()).toBeLessThanOrEqual(100);
  });

  it('deberia traer datos de la API', () => {
    component.fetchApi();
    expect(component.listCharacters.length).toBeGreaterThan(0);
  });
});

describe('HomeComponent - servicio 500', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let ramApiService: RamApiService;
  const initialState = { nickname: 'test' };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [
        provideMockStore({ initialState }),
        {
          provide: RamApiService,
          useValue: {
            getAllCharacters: () => throwError(''),
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deberia traer datos de la API', () => {
    component.fetchApi();
    expect(component.listCharacters.length).toEqual(0);
  });
});

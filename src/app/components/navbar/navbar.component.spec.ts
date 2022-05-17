import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;

    component.brand = 'hola';
    fixture.detectChanges();
  });

  // beforeEach(() => {
  // });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('le paso un nombre', () => {
    expect(component.brand).toBe('hola');
  });

  it('deberia devolver brand', () => {
    spyOn(component.eventBrand, 'emit');
    component.onSubmit();
    expect(component.eventBrand.emit).toHaveBeenCalledWith('hola');
  });
});

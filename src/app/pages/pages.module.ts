import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [LoginComponent, HomeComponent, NotFoundComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ComponentsModule],
  exports: [LoginComponent, HomeComponent, NotFoundComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PagesModule {}

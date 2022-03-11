import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { TaskCardComponent } from './task-card/task-card.component';

@NgModule({
  declarations: [NavbarComponent, TaskCardComponent],
  imports: [CommonModule],
  exports: [NavbarComponent, TaskCardComponent],
})
export class ComponentsModule {}

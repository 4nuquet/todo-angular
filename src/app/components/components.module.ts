import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { TaskCardComponent } from './task-card/task-card.component';
import { HelpComponent } from './help/help.component';

@NgModule({
  declarations: [NavbarComponent, TaskCardComponent, HelpComponent],
  imports: [CommonModule],
  exports: [NavbarComponent, TaskCardComponent],
})
export class ComponentsModule {}

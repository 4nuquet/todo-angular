import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Input() brand: string | null = '';
  @Output() eventBrand = new EventEmitter<string | null>();

  constructor() {}
}

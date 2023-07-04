import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-private-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './private-home.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  styleUrls: ['./private-home.component.scss'],
})
export class PrivateHomeComponent {
  constructor() {}
}

import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor() {}
}

import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-app-private-sidenav-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-private-sidenav-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  styleUrls: ['./app-private-sidenav-list.component.scss'],
})
export class AppPrivateSidenavListComponent {
  @Output() PrivatesidenavClose = new EventEmitter();

  constructor() {}

  public onPrivateSidenavClose = () => {
    this.PrivatesidenavClose.emit();
  };
}

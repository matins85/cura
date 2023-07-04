import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToggleNavService } from 'src/app/dashboard/sharedService/toggle-nav.service';
import { PrivateDialogComponent } from '../private-dialog/private-dialog.component';

@Component({
  selector: 'app-private-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './private-header.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  styleUrls: ['./private-header.component.scss'],
})
export class PrivateHeaderComponent {
  @Output() public PrivatesidenavToggle = new EventEmitter();

  constructor(
    public shared: ToggleNavService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  openDialog(type: string, data: any) {
    this.snackBar.dismiss();
    this.dialog.open(PrivateDialogComponent, {
      data: {
        type: type,
        data: data,
      },
    });
  }

  // left sidenav
  public onPrivatesidenavToggle = () => {
    this.PrivatesidenavToggle.emit();
  };
}

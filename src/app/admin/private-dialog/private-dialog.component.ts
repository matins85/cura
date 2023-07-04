import { CommonModule, DatePipe } from '@angular/common';
import { Component, Inject, ViewEncapsulation } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SharedServiceService } from '../shared-service/shared-service.service';

@Component({
  selector: 'app-private-dialog',
  standalone: true,
  imports: [CommonModule, RouterModule, MatDialogModule],
  templateUrl: './private-dialog.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  styleUrls: ['./private-dialog.component.scss'],
})
export class PrivateDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<PrivateDialogComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public service: SharedServiceService,
    public datepipe: DatePipe,
    public sanitizer: DomSanitizer
  ) {
    // dialogRef.disableClose = true;
  }
}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppPrivateSidenavRoutingModule } from './app-private-sidenav-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppPrivateSidenavRoutingModule,
    MatSidenavModule,
    MatDialogModule,
    MatSnackBarModule,
    MatButtonModule,
  ],
})
export class AppPrivateSidenavModule {}

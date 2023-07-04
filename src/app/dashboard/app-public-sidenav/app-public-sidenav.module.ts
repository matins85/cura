import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { ChartModule } from 'angular-highcharts';
import { AppPublicSidenavRoutingModule } from './app-public-sidenav-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppPublicSidenavRoutingModule,
    ChartModule,
    MatDialogModule,
    MatSnackBarModule,
    LoadingBarModule,
    LoadingBarRouterModule,
  ],
})
export class AppPublicSidenavModule {}

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ToggleNavService } from 'src/app/dashboard/sharedService/toggle-nav.service';
import { AuthService } from 'src/app/services/auth.service';
import { AppPrivateSidenavListComponent } from '../app-private-sidenav-list/app-private-sidenav-list.component';
import { PrivateHeaderComponent } from '../private-header/private-header.component';

@Component({
  selector: 'app-app-private-sidenav',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    PrivateHeaderComponent,
    AppPrivateSidenavListComponent,
    LoadingBarRouterModule,
  ],
  templateUrl: './app-private-sidenav.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  styleUrls: ['./app-private-sidenav.component.scss'],
})
export class AppPrivateSidenavComponent implements OnInit {
  clickEventSubscription?: Subscription;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService,
    public shared: ToggleNavService
  ) {}

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe([
      Breakpoints.Tablet,
      Breakpoints.TabletLandscape,
      Breakpoints.TabletPortrait,
      Breakpoints.Handset,
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait,
      '(max-width: 1279px)',
    ])
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  logout() {
    this.authService.logout();
  }

  ngOnInit(): void {
    console.log();
  }
}

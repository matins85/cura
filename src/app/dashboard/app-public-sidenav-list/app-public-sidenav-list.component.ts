import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { ToggleNavService } from 'src/app/dashboard/sharedService/toggle-nav.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-app-public-sidenav-list',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule,
    MatToolbarModule,
    MatExpansionModule,
    MatButtonModule,
  ],
  templateUrl: './app-public-sidenav-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  styleUrls: ['./app-public-sidenav-list.component.scss'],
})
export class AppPublicSidenavListComponent {
  @Output() public publicsidenavClose = new EventEmitter();
  clickEventSubscription?: Subscription;
  panelOpenState: boolean = false;
  hide: boolean = false;
  step!: number;

  constructor(
    private router: Router,
    private authService: AuthService,
    public shared: ToggleNavService
  ) {
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        this.getRoute();
      }
    });
  }

  getRoute() {
    if (this.router.url == '/') {
      // feedback
      let feedback = document.querySelector('.panel-user');
      feedback?.classList.add('active');
      let feedback2 = document.querySelector('.panel-user2');
      feedback2?.classList.add('active');
      this.step = 1;
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['']);
  }

  setStep(index: number): void {
    this.step = index;
  }

  nextStep(id: number): void {
    this.step = id;
  }

  public onPublicHeaderToggleSidenav = () => {
    this.publicsidenavClose.emit();
  };
}

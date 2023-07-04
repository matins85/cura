import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoginGuard } from 'src/app/guards/login.guards';
import { AppPublicSidenavComponent } from './app-public-sidenav.component';

const routes: Routes = [
  {
    path: '',
    component: AppPublicSidenavComponent,
    children: [
      // dashboard
      { path: '', redirectTo: '/', pathMatch: 'full' },
      {
        path: '',
        loadComponent: () =>
          import('../dashboard-component/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ),
        canLoad: [LoginGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), LoadingBarRouterModule],
  exports: [RouterModule],
})
export class AppPublicSidenavRoutingModule {}

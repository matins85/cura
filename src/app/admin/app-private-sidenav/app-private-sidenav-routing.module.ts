import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsLoggedInGuard } from 'src/app/guards/isLoggedIn.guards';
import { AppPrivateSidenavComponent } from './app-private-sidenav.component';

const routes: Routes = [
  {
    path: '',
    component: AppPrivateSidenavComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('../dashboard/private-home/private-home.component').then(
            (m) => m.PrivateHomeComponent
          ),
        canLoad: [IsLoggedInGuard],
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('../dashboard/private-home/private-home.component').then(
            (m) => m.PrivateHomeComponent
          ),
        canLoad: [IsLoggedInGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppPrivateSidenavRoutingModule {}

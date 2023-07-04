import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, of } from 'rxjs';
import { catchError, mapTo, tap } from 'rxjs/operators';
import { Tokens } from 'src/app/dashboard/shared/form';
import { baseUrl } from 'src/environments/environment';
import { ToggleNavService } from '../dashboard/sharedService/toggle-nav.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  @Output() public sidenavToggle2 = new EventEmitter();
  private readonly JWT_TOKEN = baseUrl.jwt_token;
  private readonly REFRESH_TOKEN = baseUrl.refresh_token;
  private helper = new JwtHelperService();
  private base_url = baseUrl.server;

  constructor(
    public shared: ToggleNavService,
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  login(user: any): Observable<boolean> {
    return this.http.post<any>(this.base_url + baseUrl.login, user).pipe(
      tap((tokens: any) => {
        this.storeTokens({ token: tokens?.data?.token });
      }),
      mapTo(true),
      catchError((error: any) => {
        this.snackBar.open(
          error?.error?.data ||
            error?.error?.message ||
            'An error occured, please try again',
          'x',
          {
            duration: 5000,
            panelClass: 'error',
            horizontalPosition: 'center',
            verticalPosition: 'top',
          }
        );
        return of(false);
      })
    );
  }

  // check if user is login
  isLoggedIn() {
    return !!this.getJwtToken();
  }

  checkExpired() {
    const isExpired = this.helper.isTokenExpired(this.getJwtToken());
    if (isExpired) {
      this.logout();
    }
  }

  // refresh token
  refreshToken() {
    const data = {
      refresh: this.getRefreshToken(),
    };
    return this.http.post<any>(this.base_url + baseUrl.refresh, data).subscribe(
      (tokens: any) => {
        this.storeJwtToken(tokens.access);
        return true;
      },
      () => {
        return false;
      }
    );
  }

  getJwtToken(): any {
    return sessionStorage.getItem(this.JWT_TOKEN);
  }

  // logout user
  public logout() {
    this.removeTokens();
    this.router.navigate(['/']);
  }

  getRefreshToken(): any {
    return sessionStorage.getItem(this.REFRESH_TOKEN);
  }

  private storeJwtToken(jwt: string) {
    sessionStorage.setItem(this.JWT_TOKEN, jwt);
  }

  public storeTokens(tokens: Tokens) {
    sessionStorage.setItem(this.JWT_TOKEN, tokens.token);
  }

  private removeTokens() {
    sessionStorage.removeItem(this.JWT_TOKEN);
    sessionStorage.removeItem(this.REFRESH_TOKEN);
  }
}

import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { LoginService } from '../pages/services/login.service';
import { Router } from '@angular/router';


export const authGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);
  const router = inject(Router);
  if (!loginService.isLoggedIn) {
    return router.createUrlTree(['/login']);
  } else {
    return true;
  }
};

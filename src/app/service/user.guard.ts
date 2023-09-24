import { CanActivateFn, Router } from '@angular/router';
import {inject} from '@angular/core';
import { LoginService } from './login.service';



export const UserGuard: CanActivateFn = (route, state) => {
  console.log({route, state})
  const authService= inject(LoginService)
  const router= inject(Router)
  if(authService.isLoggedIn() && authService.getUserRole() === 'USER'){
    return true
  }
  router.navigate(['/login'])
  return false;
};

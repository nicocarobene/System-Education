import { CanActivateFn, Router } from '@angular/router';
import {inject} from '@angular/core';
import { LoginService } from './login.service';



export const AdminGuard: CanActivateFn = (route, state) => {
  const authService= inject(LoginService)
  const router= inject(Router)
  console.log({route, state})
  const value= authService.isLoggedIn() && authService.getUserRole() === 'ADMIN'
  console.log(value)
  if(value){
    console.log('entro al guard ADMIN')
    return true
  }
  router.navigate(['/login'])
  return false;
};

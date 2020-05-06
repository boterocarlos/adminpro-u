import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../settings/user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {
  
  constructor( public userService: UserService, public router: Router){

  }

  canActivate() {

    if (this.userService.estaLogueado()) {
      console.log('paso el guard');
      return true;
    }else{
      console.log('bloqueado por guard');
      this.router.navigate(['/login']);
      return false;
    }

  }
}

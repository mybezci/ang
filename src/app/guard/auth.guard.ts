import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LogvalidService } from '../login/logvalid.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private logvalidService : LogvalidService, private router:Router){


  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

      let logged = this.logvalidService.isLogin;
      console.log(logged);


      this.logvalidService.redirectUrl = state.url;

      
      if(logged){
        return true;
      }else{
        this.router.navigate(['/login']);
        return false;
      }
    }


}

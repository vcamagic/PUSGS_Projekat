import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class ViewGuard implements CanActivate {
  
  constructor(private jwtHelper: JwtHelperService, private router: Router) {
  }

  canActivate(){
    const token = localStorage.getItem("jwt");
    const type = localStorage.getItem("type");
    console.log(type);

      if(type === 'Admin'){
        return true;
      }else{
        return false;
      }
   
  }
  
}

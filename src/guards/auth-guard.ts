import { Injectable} from "@angular/core"
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router"
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(public router: Router,private jwtHelper: JwtHelperService){

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    const token = localStorage.getItem("jwt");

    if(token){
      return true;
    }

    this.router.navigate(["/login"]);
    return false;
  }
}

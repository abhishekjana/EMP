import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  canActivate() {
    let Role = localStorage.getItem('UserType');
    if (Role == 'admin') {
      return true;
    }
    alert('You dont have Admin rights');
    return false;
  }
}

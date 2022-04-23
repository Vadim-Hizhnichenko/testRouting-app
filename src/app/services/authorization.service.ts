import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {Observable, of, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private router: Router) { }

  login(userInfo: {email: string, password: string}): Observable<string | boolean>{
    if(userInfo.email === 'admin@gmail.com' && userInfo.password === 'qwerty123'){
      this.setToken('yourTokenIsSetSuccessful!!!')
      return of(true)
    }
    return throwError(() => new Error('Failed Login'))
  }

  logOut(){
    this.router.navigate(['login'])
  }

  setToken(token: string){
    localStorage.setItem('token', token)
  }

  getToken(){
    return localStorage.getItem('token')
  }

  isLogged(){
    return this.getToken() !== null;
  }


}

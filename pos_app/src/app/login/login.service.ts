import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //control the gard
  constructor(private http :HttpClient){}
  private readonly   MANAGER_API_URL= 'http://localhost/POS/get_manager.php';

  get_manager(email:string, password: string) {
    return this.http.post<any>(this.MANAGER_API_URL,{email,password}).pipe(map(
      managers=>{
        console.log(managers.email);
       this.setToken(managers.email)
      return managers;
    }
    ));
  }
  setToken(token: string) {
    localStorage.setItem('token',token);
  }
  redirectUrl: any;



}

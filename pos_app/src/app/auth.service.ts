import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 public auth=0;
  constructor() { }
  isLoggedIn():boolean
  { if(this.auth==1)
    {
      return false;
    }
else{
  return true;
}
  }
}

import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public gerantForm:FormGroup;
  constructor(private fb:FormBuilder , private router:Router,private loginservice:LoginService) {
  this.gerantForm = fb.group({
    title: fb.control('initial value')})}
  ngOnInit(): void {
    this.gerantForm=this.fb.group({
      email_manager:['',Validators.required],
      password_manager:['',Validators.required],

    });
  }

  postdata(gerantForm :FormGroup){
 const email_manager =gerantForm.get('email_manager')?.value;
 const password_manager =gerantForm.get('password_manager')?.value;

    this.loginservice.get_manager(email_manager,password_manager)
    .pipe(first())
    .subscribe({
       next:data => {

       console.log(data);
        if(data.message =='success')
        this.router.navigate(['/manager']);
        else  {alert("Email or password is incorrect")};

},
          error:  error =>
              {
               {alert("veuillez réessayer ultérieurement")};
              }

            });


  }
  setToken(email: any) {
    localStorage.setItem('token',email)
  }




}

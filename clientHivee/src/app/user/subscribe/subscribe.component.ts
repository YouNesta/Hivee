import {Component, OnInit, ViewChild} from '@angular/core';
import {MdInput} from "@angular/material";
import {AuthService} from "../../auth/auth.service";
import {Router} from "@angular/router";
import {User} from "../user";

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {

  @ViewChild('emailInput') emailInput: MdInput;

  public model = {
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    password: "",
    confirmedPassword: ""
  };
  submitted = false;

  constructor(private auth: AuthService, private router: Router) {

  }

  ngOnInit() {
    if(this.auth.isLoggedIn()) this.router.navigate(['']) ;
    this.emailInput.focus();

  }
  onSubmit(){
    this.submitted = true;
    this.subscribe();
  }

  subscribe(){
    var newUser = new User( this.model.email, this.model.firstName, this.model.lastName, this.model.phone);

    this.auth.subscribe(newUser, this.model.password)
      .subscribe(
        res => {
          if (res.success) {
            localStorage.setItem('auth_token', res.auth_token);
            var user = JSON.stringify(res.user);
            localStorage.setItem('user', user);
            this.router.navigate(['user'])
          }
        },
        err => console.error(err),
        () => console.log('done')
      );

  }

}

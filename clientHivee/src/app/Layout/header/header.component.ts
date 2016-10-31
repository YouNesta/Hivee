import {Component, OnInit, Input} from '@angular/core';
import {MdSidenav} from "@angular/material";
import {AuthService} from "../../auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input('sidenav') sidenav: MdSidenav;
  @Input() title: string;

  constructor(private auth: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  isLoggedIn(){
    console.log(this.auth.isLoggedIn())
    return this.auth.isLoggedIn() == true;

  }
  logout(){
    this.auth.logout();
    this.router.navigate(['']);
  }

}

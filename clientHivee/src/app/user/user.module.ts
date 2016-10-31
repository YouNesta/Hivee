import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { LoginComponent } from './login/login.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import {UserRoutingModule} from "./user-routing.module";

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  declarations: [UserComponent]
})
export class UserModule { }

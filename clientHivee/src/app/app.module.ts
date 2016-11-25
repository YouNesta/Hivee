import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from "@angular/router";
import {MaterialModule} from "@angular/material";

import { AppComponent } from './app.component';
import { UserModule } from "./user/user.module";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { AuthService } from "./auth/auth.service";
import { AuthGuard } from "./auth/auth.guard.service";
import { LoginComponent } from "./user/login/login.component";
import { SubscribeComponent } from "./user/subscribe/subscribe.component";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    UnauthorizedComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    LoginComponent,
    SubscribeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    MaterialModule.forRoot(),
    UserModule,
    AppRoutingModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

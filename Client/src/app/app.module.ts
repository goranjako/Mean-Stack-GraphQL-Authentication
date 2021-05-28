import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtModule } from '@auth0/angular-jwt';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NavbarComponent } from './index/navbar/navbar.component';
import { NotFoundComponent } from './index/not-found/not-found.component';
import { UserProfileComponent } from './index/user-profile/user-profile.component';
import { RegisterComponent } from './index/register/register.component';
import { LoginComponent } from './index/login/login.component';


export function tokenGetter()  {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotFoundComponent,
    UserProfileComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    NgModule,
    BrowserModule,
    AppRoutingModule,  MDBBootstrapModule.forRoot(), GraphQLModule, HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    HttpClientModule, SweetAlert2Module.forRoot(),
    FormsModule, ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['http://localhost:4000/graphql']
      },
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

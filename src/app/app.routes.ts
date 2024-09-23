import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { RegisterComponent } from './page/auth/register/register.component';
import { Component } from '@angular/core';
import { LoginComponent } from './page/auth/login/login.component';
import { LoginGuard } from './guards/login.guard';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path:'register', component: RegisterComponent, canActivate:[LoginGuard]},
    {path:'login', component: LoginComponent,pathMatch: 'full', canActivate:[LoginGuard]},
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: '**', redirectTo: 'login'}
];

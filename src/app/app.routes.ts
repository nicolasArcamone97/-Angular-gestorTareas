import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { RegisterComponent } from './page/auth/register/register.component';
import { Component } from '@angular/core';
import { LoginComponent } from './page/auth/login/login.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path:'register', component: RegisterComponent},
    {path:'login', component: LoginComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', redirectTo: 'home'}
];

import { Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './page/home/home.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', redirectTo: 'home'}
];

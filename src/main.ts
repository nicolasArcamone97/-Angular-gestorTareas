import { bootstrapApplication } from '@angular/platform-browser';
import { HomeComponent } from './app/page/home/home.component';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(HomeComponent, {
  providers: [provideHttpClient()]
});
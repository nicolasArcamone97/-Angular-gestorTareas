import { bootstrapApplication } from '@angular/platform-browser';
import { HomeComponent } from './app/page/home/home.component';
import { provideHttpClient, withFetch} from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // Proporciona el enrutamiento
    provideHttpClient(withFetch()), // Proporciona HttpClient globalmente
    provideAnimations(), // Proporciona animaciones
  ],
});
import { bootstrapApplication } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app/app.routes';
import { TokenService } from './app/services/token.service';
import { tareaInterceptor } from './app/interceptors/tareas.interceptor';


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // Proporciona el enrutamiento
    TokenService,
    provideHttpClient(
      withFetch(),
      withInterceptors([tareaInterceptor])
    ), // Asegúrate de proporcionar HttpClient globalmente
     provideAnimations(), // Proporciona animaciones
  ],
});
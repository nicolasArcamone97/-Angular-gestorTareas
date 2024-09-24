import { bootstrapApplication } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app/app.routes';
import { TareaInterceptor } from './app/interceptors/tareas.interceptor';
import { TokenService } from './app/services/token.service';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // Proporciona el enrutamiento
    {provide:HTTP_INTERCEPTORS, useClass:TareaInterceptor,multi:true},
    TokenService,
    provideHttpClient(withFetch()), // Proporciona HttpClient globalmente
    provideAnimations(), // Proporciona animaciones
  ],
});
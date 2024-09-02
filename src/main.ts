import { bootstrapApplication } from '@angular/platform-browser';
import { HomeComponent } from './app/page/home/home.component';
import { provideHttpClient, withFetch} from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

bootstrapApplication(HomeComponent, {
  providers: [ provideHttpClient(withFetch()), provideAnimationsAsync()]
});
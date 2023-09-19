import { enableProdMode, importProvidersFrom } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { provideRouter, withComponentInputBinding, withDebugTracing } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
//import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { routes } from './app/routes';
import { AppComponent } from './app/app.component';
import { ProductsRoutingModule } from './app/products/products-routes.module';
import { TimingInterceptor } from './app/core/interceptors/timing.interceptor';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(
  AppComponent, 
  {
    providers: [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: TimingInterceptor, 
        multi: true
      },
      importProvidersFrom(ProductsRoutingModule, HttpClientModule),
      provideRouter(routes, withComponentInputBinding())
    ]
  }).catch(e => console.error(e));

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

import { enableProdMode, isDevMode, importProvidersFrom } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { provideRouter, withComponentInputBinding, withDebugTracing } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { StoreModule, provideStore } from '@ngrx/store';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { DEFAULT_ROUTER_FEATURENAME, StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { StoreDevtools, StoreDevtoolsModule, provideStoreDevtools } from '@ngrx/store-devtools';

//import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { routes } from './app/routes';
import { AppComponent } from './app/app.component';
import { ProductsRoutingModule } from './app/products/products-routes.module';
import { TimingInterceptor } from './app/core/interceptors/timing.interceptor';
import { RouterEffects } from './app/core/store/router/router.effects';


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
      provideRouter(routes, withComponentInputBinding()),
      //provideStore(),
      //provideEffects(),
      importProvidersFrom(
        StoreModule.forRoot({
          [DEFAULT_ROUTER_FEATURENAME]: routerReducer
        }), 
        EffectsModule.forRoot(RouterEffects), 
        StoreRouterConnectingModule.forRoot(),
        StoreDevtoolsModule.instrument({
          //maxAge: 25, // Retains last 25 states
          logOnly: !isDevMode(), // Restrict extension to log-only mode
          autoPause: true, // Pauses recording actions and state changes when the extension window is not open
          trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
          traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
        })),
        // provideStoreDevtools({
        //   maxAge: 25, // Retains last 25 states
        //   logOnly: !isDevMode(), // Restrict extension to log-only mode
        //   autoPause: true, // Pauses recording actions and state changes when the extension window is not open
        //   trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
        //   traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
        // }),
    ]
  }).catch(e => console.error(e));

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

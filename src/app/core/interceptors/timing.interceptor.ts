import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, finalize, tap } from 'rxjs';

@Injectable()
export class TimingInterceptor implements HttpInterceptor {
  private apisToTraceRequestTime: Array<string> = ['/products'];

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const startTime: Date = new Date();

    if (!this.apisToTraceRequestTime.some(url => request.url.includes(url))) {
      return next.handle(request)
    }

    return next.handle(request)
      .pipe(
        tap((response: HttpResponse<any> | HttpEvent<unknown>) => {
          if (!(response instanceof HttpResponse) || !response.url) {
            return
          }

          const endTime: Date = new Date();
          const duration: number = (endTime.valueOf() - startTime.valueOf()) / 1000;

          console.log(`url: ${response.url}, duration: ${duration}`);
        })
      );
  }
}

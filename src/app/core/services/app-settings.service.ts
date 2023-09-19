import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, catchError, of, retry, switchMap } from 'rxjs';

import { LocalStorageService } from './local-storage.service';
import { ApplicationModel } from '../models/appSettins';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {
  private static SETTINGS_KEY: string = 'application-settings'
  private static RETRY_COUNT: number = 2

  constructor(private storage: LocalStorageService, private httpClient: HttpClient) { }

  getSettings(): Observable<ApplicationModel>  {

    if (this.storage.getItem(AppSettingsService.SETTINGS_KEY)) {
      return of(this.storage.getItem(AppSettingsService.SETTINGS_KEY) as ApplicationModel)
    }

    return this.httpClient.get<ApplicationModel>('assets/settings.json')
      .pipe(
        switchMap(value => {
          this.storage.setItem(AppSettingsService.SETTINGS_KEY, value);
          return of(value);
        }),
        retry(AppSettingsService.RETRY_COUNT),
        catchError(error => {
          console.log(error);
          return of({
            "sort": "asc",
            "appVersion": "0.0.0"
          })
        })
      );
  }
}

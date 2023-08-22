import { InjectionToken } from "@angular/core";

export const AppInfo = { App: "Shop", Ver: "1.1", API_URL: "http://localhost:42" }

export const APP_INFO = new InjectionToken<{App: string, Ver: string, API_URL: string}>('App Info');

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setItem(key: string, value: any) {
    this.storage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string) : any | undefined {
    const data = this.storage.getItem(key);
    if (!data) {
      return null;
    }
 
    return JSON.parse(data);
  }

  removeItem(key: string): void {
    this.storage.removeItem(key);
  }

  private get storage(): Storage {
    return localStorage;
  }
}

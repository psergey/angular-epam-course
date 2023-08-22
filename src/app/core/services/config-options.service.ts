import { Injectable } from '@angular/core';
import { ConfigModel } from '../models/config';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {

  private _config: ConfigModel = {
    id: '',
    email: '',
    login: ''
  };

  constructor() { }

  setConfig(config: Partial<ConfigModel>): void {
    this._config = {
      ...this._config,
      ...config
    }
  }

  getConfig(): ConfigModel {
    return this._config;
  }

  setConfigProperty(key: keyof ConfigModel, value: any): void {
    this._config[key] = value;
  }
}

import { TestBed } from '@angular/core/testing';

import { ConfigOptionsService } from './config-options.service';

describe('ConfigOptionsService', () => {
  let service: ConfigOptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigOptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set config values', () => {
    const config = {
      id: '42',
      email: 'ultimate@answer.com',
      login: 'ArthurDent'
    };

    service.setConfig(config);

    expect(service.getConfig()).toStrictEqual(config)
  })

  it('should set config partially values', () => {
    const config = {
      id: '42',
      email: 'ultimate@answer.com',
      login: 'ArthurDent'
    };

    const valueToUpdate = {
      login: 'FordPrefect'
    };

    service.setConfig(config);
    service.setConfig(valueToUpdate);

    expect(service.getConfig()).toStrictEqual({
      ...config,
      login: valueToUpdate.login
    })
  })

  it('should set individual config value', () => {
    const config = {
      id: '42',
      email: 'ultimate@answer.com',
      login: 'ArthurDent'
    };

    service.setConfig(config);
    service.setConfigProperty('login', 'FordPrefect');

    expect(service.getConfig()).toStrictEqual({
      ...config,
      login: 'FordPrefect'
    })
  })
});

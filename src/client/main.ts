import {bootstrap} from 'angular2/platform/browser';
import {enableProdMode} from 'angular2/core';
import {environment} from './app/environment';
import {NgnewApp} from './app/ngnew';

if (environment.production) {
  enableProdMode();
}

bootstrap(NgnewApp);

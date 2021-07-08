// import('./bootstrap');

import { enableProdMode, NgZone } from '@angular/core';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { Router } from '@angular/router';
import { ɵAnimationEngine as AnimationEngine } from '@angular/animations/browser';

import { singleSpaAngular, getSingleSpaExtraProviders } from 'single-spa-angular';
import { environment } from './environments/environment';
import { singleSpaPropsSubject } from './single-spa/single-spa-props';
import { AddonModule } from './app/app.module';

const   lifecycles = singleSpaAngular({
  bootstrapFunction: singleSpaProps => {
      singleSpaPropsSubject.next(singleSpaProps);
      return platformBrowserDynamic(getSingleSpaExtraProviders()).bootstrapModule(AddonModule);
  },
  template: '<addon-root />',
  Router: null,
  NgZone,
  AnimationEngine,
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;
export const update = lifecycles.update;

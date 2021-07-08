import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NgZone } from '@angular/core';

import { AddonComponent } from './app.component';
import { AddonRoutingModule } from './app.routes';
import { ConfigComponent } from './config/config.component';
import { AddonProxyComponent } from './plugins/addon-proxy.component';
import { PepUIModule } from './modules/pepperi.module';
import { MaterialModule } from './modules/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PepDialogModule } from '@pepperi-addons/ngx-lib/dialog';
@NgModule({
  imports: [
    BrowserModule,
    PepUIModule,
    MaterialModule,
    BrowserAnimationsModule,
    MatDialogModule,
    PepDialogModule,
    AddonRoutingModule
  ],
  declarations: [
    AddonComponent,
    AddonProxyComponent,
    ConfigComponent
  ],
  providers: [ ],
  bootstrap: [AddonComponent]
})
export class AddonModule {
  constructor(private ngZone: NgZone) {
    (window as any).ngZone = this.ngZone;
  }
}

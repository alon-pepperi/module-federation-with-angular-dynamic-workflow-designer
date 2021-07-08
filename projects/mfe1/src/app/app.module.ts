import { UploadComponent } from './upload.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AddonComponent } from './app.component';
import { PepUIModule } from './modules/pepperi.module';
import { MaterialModule } from './modules/material.module';
import { ReactiveFormsModule ,FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {  MatNativeDateModule } from '@angular/material/core';
import {
  MatDatetimepickerModule,
  MatNativeDatetimeModule,
  DatetimeAdapter,
  MAT_DATETIME_FORMATS
} from '@mat-datetimepicker/core';
import { MomentDatetimeAdapter } from '@mat-datetimepicker/moment';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { DownloadComponent, DownloadModule } from './download/download.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { SharedModule } from './shared/shared.module';
import { MyComponentWrapperComponent } from './my-react-component/MyReactComponentWrapper';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
const routes: Routes = [{
  path: 'settings/:addon_uuid',
  children: [
    {
        path: ':editor',
        component: DownloadComponent
        // loadChildren: () => import('./download/download.component').then(m => m.DownloadModule),
    }
]
  // children: [
  //   {
  //     path: ':editor',
  //     component: DownloadComponent,

  //   },
  //     {
  //         path: '**',
  //         component: EmptyRouteComponent
  //     }
  // ]


},


];
@NgModule({
  imports: [
    BrowserModule,
    PepUIModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
MaterialModule,
DownloadModule,
FormsModule,
ReactiveFormsModule,
TranslateModule.forRoot({
  loader: {
    provide: TranslateLoader,
    useFactory: (createTranslateLoader),
    deps: [HttpClient]
  }
}),
SharedModule

  ],
  declarations: [
    AddonComponent,
    UploadComponent,
    MyComponentWrapperComponent

  ],
  providers: [
    TranslateService
  ],
  bootstrap: [
    AddonComponent
  ]
})
export class AddonModule {

 }

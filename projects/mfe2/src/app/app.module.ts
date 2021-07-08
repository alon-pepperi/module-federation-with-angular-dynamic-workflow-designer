import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EnrichComponent } from './enrich.component';
import { AnalyzeComponent } from './analyze.component';
import { MyComponentWrapperComponent } from './my-react-component/MyReactComponentWrapper';

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    AppComponent,
    EnrichComponent,
    AnalyzeComponent,
    MyComponentWrapperComponent
  ],
  providers: [],
  bootstrap: [
      AppComponent
  ]
})
export class AppModule { }

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';

import {ViewerDetectionService} from './viewer-detection.service';
import {ViewerDetectionOutputService} from './viewer-detection-output.service';

import {PersonComponent} from './person/person.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ViewerDetectionService, ViewerDetectionOutputService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

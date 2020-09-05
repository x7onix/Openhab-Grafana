import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NetatmoDiagramComponent } from './netatmo-diagram/netatmo-diagram.component';
import { UrlSafePipePipe } from './url-safe-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NetatmoDiagramComponent,
    UrlSafePipePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

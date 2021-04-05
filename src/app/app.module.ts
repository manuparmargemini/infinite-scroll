import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClientModule } from '@angular/common/http';
import { FactService } from './_service/fact.service';
import { ResponseScrollerComponent } from './response-scroller/response-scroller.component';


@NgModule({
  declarations: [
    AppComponent,
    ResponseScrollerComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ScrollingModule
  ],
  providers: [FactService],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      jqxGridModule
    ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
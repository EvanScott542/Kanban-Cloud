import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxKanbanModule } from 'jqwidgets-ng/jqxkanban';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      jqxButtonModule,
      jqxKanbanModule
    ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
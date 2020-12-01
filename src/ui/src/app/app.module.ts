import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxKanbanModule } from 'jqwidgets-ng/jqxkanban';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NewCardComponent } from './new-card/new-card.component';

@NgModule({
    declarations: [ AppComponent, NewCardComponent ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      jqxButtonModule,
      jqxKanbanModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule
    ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
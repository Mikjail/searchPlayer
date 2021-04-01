import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SearchEngineComponent } from './@containers/search-engine/search-engine.component';
import { SearchPanelComponent } from './@components/search-panel/search-panel.component';

@NgModule({
  declarations: [AppComponent, SearchEngineComponent, SearchPanelComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

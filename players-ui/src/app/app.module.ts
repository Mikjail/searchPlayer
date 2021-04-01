import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SearchEngineComponent } from './@containers/search-engine/search-engine.component';
import { SearchPanelComponent } from './@components/search-panel/search-panel.component';
import { DetailPanelComponent } from './@components/detail-panel/detail-panel.component';
import { StatsComponent } from './@components/detail-panel/stats/stats.component';
import { SummaryComponent } from './@components/detail-panel/summary/summary.component';

import { SearchEngineService } from './@containers/search-engine/search-engine.service';

import { TitleToSentencePipe } from './utils/pipes/title-to-sentence.pipe';
import { ProfileComponent } from './@components/detail-panel/profile/profile.component';
import { LoaderComponent } from './@components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchEngineComponent,
    SearchPanelComponent,
    DetailPanelComponent,
    StatsComponent,
    TitleToSentencePipe,
    SummaryComponent,
    ProfileComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [SearchEngineService],
  bootstrap: [AppComponent],
})
export class AppModule {}

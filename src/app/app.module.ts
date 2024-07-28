import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { SearchModule } from './components/search/search.module';
import { SidebarModule } from './components/sidebar/sidebar.module';
import { GifsModule } from './components/gifs/gifs.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SearchModule, SidebarModule, GifsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {

}

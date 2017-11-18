import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './header/app-header.component';
import { AppSearchComponent } from './search/app-search.component';
import { AppBottomComponent } from './bottom/app-bottom.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppSearchComponent,
    AppBottomComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

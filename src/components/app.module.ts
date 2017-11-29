import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './header/app-header.component';
import { AppHeaderListPanelComponent} from './headerListPanel/app-header-list-panel.component';
import { AppSearchPanelComponent } from './searchContent/app-search-content.component';
import { AppSearchResultListComponent} from './searchHistoryDetail/app-search-result-list.component'
import { AppFooterComponent } from './footer/app-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppHeaderListPanelComponent,
    AppSearchPanelComponent,
    AppSearchResultListComponent,
    AppFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

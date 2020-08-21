import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CargerFinderComponent } from './carger-finder/carger-finder.component';
import { ChargerSearchComponent } from './charger-search/charger-search.component';
import { ChargerListComponent } from './charger-list/charger-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ChildNodeComponent } from './child-node/child-node.component';
import { ChargerDetailsComponent } from './charger-details/charger-details.component'


@NgModule({
  declarations: [
    AppComponent,
    CargerFinderComponent,
    ChargerSearchComponent,
    ChargerListComponent,
    ChildNodeComponent,
    ChargerDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAqTxJmLehgF_aum2XMAK-Q6sMSQIV3BDM',
      libraries: ['geometry', 'places']
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

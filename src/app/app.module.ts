import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { Drivers } from '@ionic/storage';
import { IonicStorageModule } from '@ionic/storage-angular';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent]
  , imports: [BrowserModule
    , HttpClientModule
    , IonicModule.forRoot()
    , AppRoutingModule
    , IonicStorageModule.forRoot({
      name: '__mydb',
      driverOrder: [Drivers.SecureStorage, Drivers.IndexedDB, Drivers.LocalStorage]
    })
  ]
  , schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
  , providers: [ IonicStorageModule, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }]
  , bootstrap: [AppComponent]
})
export class AppModule {

}

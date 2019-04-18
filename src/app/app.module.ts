import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { AES256 } from '@ionic-native/aes-256/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { Network } from '@ionic-native/network/ngx';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { NgCalendarModule  } from 'ionic2-calendar';
import { ProductModalComponent } from './components/product-modal/product-modal.component';
import { CollectionModalComponent } from './components/collection-modal/collection-modal.component';
import { DatePipe } from '@angular/common';
import { SyncComponent } from './components/sync/sync.component';
import { IonicSelectableModule } from 'ionic-selectable';

import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { BankModalComponent } from './components/bank-modal/bank-modal.component';




@NgModule({
  declarations: [AppComponent],
  entryComponents: [
    ProductModalComponent,
    CollectionModalComponent,
    SyncComponent,
    BankModalComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgCalendarModule,
    IonicSelectableModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    SQLite,
    AES256,
    Network,
    DatePipe,
    BarcodeScanner,
    InAppBrowser
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

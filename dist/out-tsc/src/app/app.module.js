var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
import { NgCalendarModule } from 'ionic2-calendar';
import { ProductModalComponent } from './components/product-modal/product-modal.component';
import { CollectionModalComponent } from './components/collection-modal/collection-modal.component';
import { DatePipe } from '@angular/common';
import { SyncComponent } from './components/sync/sync.component';
import { IonicSelectableModule } from 'ionic-selectable';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [AppComponent],
            entryComponents: [
                ProductModalComponent,
                CollectionModalComponent,
                SyncComponent
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
                BarcodeScanner
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map
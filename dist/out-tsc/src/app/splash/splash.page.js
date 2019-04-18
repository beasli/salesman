var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Platform, Events } from '@ionic/angular';
var SplashPage = /** @class */ (function () {
    function SplashPage(router, barcodeScanner, platform, events) {
        this.router = router;
        this.barcodeScanner = barcodeScanner;
        this.platform = platform;
        this.events = events;
        this.url = 'false';
    }
    SplashPage.prototype.ngOnInit = function () {
        if (this.platform.is('cordova')) {
            var data = localStorage.getItem('DataInstalled');
            if (data === 'true') {
                if (localStorage.getItem('Salesman')) {
                    this.router.navigate(['/dashboard']);
                }
                else {
                    this.router.navigate(['/salesmanlogin']);
                }
            }
        }
        else {
            var data = localStorage.getItem('DataInstalled');
            if (data === 'true') {
                if (localStorage.getItem('Salesman')) {
                    this.router.navigate(['/dashboard']);
                }
                else {
                    this.router.navigate(['/salesmanlogin']);
                }
            }
            else {
                localStorage.setItem('apiUrl', 'http://erpmain-001-site1.ftempurl.com');
                this.events.publish('ApiUrl:Updated', 1, Date.now());
                this.initDB();
            }
        }
    };
    SplashPage.prototype.openFiles = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            console.log('Barcode data', barcodeData);
            var data = JSON.parse(barcodeData.text);
            console.log(data);
            _this.details = data;
            localStorage.setItem('apiUrl', data.BaseUrl);
            _this.events.publish('ApiUrl:Updated', 1, Date.now());
            _this.url = 'true';
        }).catch(function (err) {
            console.log('Error', err);
        });
    };
    SplashPage.prototype.initDB = function () {
        this.router.navigate(['/initializing']);
    };
    SplashPage = __decorate([
        Component({
            selector: 'app-splash',
            templateUrl: './splash.page.html',
            styleUrls: ['./splash.page.scss'],
        }),
        __metadata("design:paramtypes", [Router,
            BarcodeScanner,
            Platform,
            Events])
    ], SplashPage);
    return SplashPage;
}());
export { SplashPage };
//# sourceMappingURL=splash.page.js.map
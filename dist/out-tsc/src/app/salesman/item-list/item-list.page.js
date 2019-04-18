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
import { ActivatedRoute, Router } from '@angular/router';
import { FakeApiService } from '../../service/fake-api/fake-api.service';
import { Platform } from '@ionic/angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
var ItemListPage = /** @class */ (function () {
    function ItemListPage(route, fakeApi, router, platform, barcodeScanner) {
        this.route = route;
        this.fakeApi = fakeApi;
        this.router = router;
        this.platform = platform;
        this.barcodeScanner = barcodeScanner;
        this.offset = 0;
        this.searchResult = false;
    }
    ItemListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.searchResult = false;
        this.offset = 0;
        this.route.params.subscribe(function (params) {
            _this.sortID = params['SortID'];
            _this.fakeApi.getItemsBySortID(_this.sortID, _this.offset).then(function (data) {
                console.log(data.res.rows.item(0));
                if (_this.platform.is('cordova')) {
                    _this.items = [];
                    if (data.res.rows.length > 0) {
                        for (var i = 0; i < data.res.rows.length; i++) {
                            _this.items.push(data.res.rows.item(i));
                        }
                    }
                    _this.offset += 10;
                }
                else {
                    _this.items = Object.values(data.res.rows);
                }
                console.log(_this.items);
            }).catch(function (err) {
                console.log(err);
            });
        });
    };
    ItemListPage.prototype.loadData = function (event) {
        var _this = this;
        this.fakeApi.getItemsBySortID(this.sortID, this.offset).then(function (data) {
            console.log(data.res.rows.item(0));
            if (_this.platform.is('cordova')) {
                if (data.res.rows.length > 0) {
                    for (var i = 0; i < data.res.rows.length; i++) {
                        _this.items.push(data.res.rows.item(i));
                    }
                }
                else {
                    event.target.disabled = true;
                }
            }
            else {
                var items = Object.values(data.res.rows);
                if (items.length > 0) {
                    items.forEach(function (ele) {
                        _this.items.push(ele);
                    });
                }
                else {
                    event.target.disabled = true;
                }
            }
            _this.offset += 10;
            console.log('Done');
            event.target.complete();
            console.log(_this.items);
        }).catch(function (err) {
            console.log(err);
            event.target.disabled = true;
        });
        // App logic to determine if all data is loaded
        // and disable the infinite scroll
        // if (data.length == 1000) {
        //   event.target.disabled = true;
        // }
    };
    ItemListPage.prototype.loadSearchData = function (event) {
        var _this = this;
        this.fakeApi.getItemsBySearchKeyword('%' + this.keyword + '%', this.offset).then(function (data) {
            console.log(data.res.rows.item(0));
            if (_this.platform.is('cordova')) {
                if (data.res.rows.length > 0) {
                    for (var i = 0; i < data.res.rows.length; i++) {
                        _this.items.push(data.res.rows.item(i));
                    }
                }
                else {
                    event.target.disabled = true;
                }
            }
            else {
                var items = Object.values(data.res.rows);
                if (items.length > 0) {
                    items.forEach(function (ele) {
                        _this.items.push(ele);
                    });
                }
                else {
                    event.target.disabled = true;
                }
            }
            _this.offset += 10;
            console.log('Done');
            event.target.complete();
            console.log(_this.items);
        }).catch(function (err) {
            console.log(err);
            event.target.disabled = true;
        });
        // App logic to determine if all data is loaded
        // and disable the infinite scroll
        // if (data.length == 1000) {
        //   event.target.disabled = true;
        // }
    };
    ItemListPage.prototype.openItemGeneralDetail = function (ItemId) {
        localStorage.setItem('Item', JSON.stringify(ItemId));
        this.router.navigate(['/item-detail']);
    };
    ItemListPage.prototype.searchItem = function (evt) {
        var _this = this;
        console.log(evt.target.value);
        this.keyword = evt.target.value;
        if (!evt.target.value) {
            this.ngOnInit();
        }
        else {
            this.searchResult = true;
            this.fakeApi.getItemsBySearchKeyword('%' + evt.target.value + '%', 0).then(function (data) {
                if (_this.platform.is('cordova')) {
                    _this.items = [];
                    if (data.res.rows.length > 0) {
                        for (var i = 0; i < data.res.rows.length; i++) {
                            _this.items.push(data.res.rows.item(i));
                        }
                    }
                }
                else {
                    _this.items = Object.values(data.res.rows);
                }
                _this.offset += 10;
            }).catch(function (exp) {
                console.log('exp', exp);
            });
        }
    };
    ItemListPage.prototype.Scan = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            console.log(barcodeData.text);
            _this.SearchSerial(barcodeData.text);
        }).catch(function (err) {
            console.log('Error', err);
        });
    };
    ItemListPage.prototype.SearchSerial = function (barcode) {
        var _this = this;
        if (!barcode) {
            this.ngOnInit();
        }
        else {
            this.fakeApi.getItemsByBarcode(barcode).then(function (data) {
                if (_this.platform.is('cordova')) {
                    _this.items = [];
                    if (data.res.rows.length > 0) {
                        for (var i = 0; i < data.res.rows.length; i++) {
                            _this.items.push(data.res.rows.item(i));
                        }
                    }
                }
                else {
                    _this.items = Object.values(data.res.rows);
                }
            }).catch(function (exp) {
                console.log('exp', exp);
            });
        }
    };
    ItemListPage = __decorate([
        Component({
            selector: 'app-item-list',
            templateUrl: './item-list.page.html',
            styleUrls: ['./item-list.page.scss'],
        }),
        __metadata("design:paramtypes", [ActivatedRoute,
            FakeApiService,
            Router,
            Platform,
            BarcodeScanner])
    ], ItemListPage);
    return ItemListPage;
}());
export { ItemListPage };
//# sourceMappingURL=item-list.page.js.map
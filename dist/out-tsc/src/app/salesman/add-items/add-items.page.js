var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FakeApiService } from '../../service/fake-api/fake-api.service';
import { Platform, Events, ModalController } from '@ionic/angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ProductModalComponent } from '../../components/product-modal/product-modal.component';
var AddItemsPage = /** @class */ (function () {
    function AddItemsPage(route, fakeApi, router, events, platform, barcodeScanner, modalController) {
        var _this = this;
        this.route = route;
        this.fakeApi = fakeApi;
        this.router = router;
        this.events = events;
        this.platform = platform;
        this.barcodeScanner = barcodeScanner;
        this.modalController = modalController;
        this.offset = 0;
        this.search = false;
        this.cartTotal = 0;
        this.searchResult = false;
        this.cart = (localStorage.getItem('Cart')) ? JSON.parse(localStorage.getItem('Cart')) : [];
        events.subscribe('cart:updated', function (user, time) {
            // user and time are the same arguments passed in `events.publish(user, time)`
            _this.getCartTotal();
        });
    }
    AddItemsPage.prototype.ngOnInit = function () {
        this.ionViewWillEnter();
        this.getCartTotal();
    };
    AddItemsPage.prototype.presentModal = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.modalController.create({
                                component: ProductModalComponent,
                                componentProps: { value: item, cart: this.cart },
                                cssClass: 'my-custom-modal-css'
                            })];
                    case 1:
                        _a.modal = _b.sent();
                        return [4 /*yield*/, this.modal.present()];
                    case 2: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    AddItemsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.searchResult = false;
        this.offset = 0;
        this.cart = (localStorage.getItem('Cart')) ? JSON.parse(localStorage.getItem('Cart')) : [];
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
    AddItemsPage.prototype.loadData = function (event) {
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
    AddItemsPage.prototype.loadSearchData = function (event) {
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
    // Depricated
    AddItemsPage.prototype.addToCart = function (item, qty) {
        console.log(this.cart.find(function (x) { return x.ItemID === item.ItemID; }));
        if (this.cart.find(function (x) { return x.ItemID === item.ItemID; })) {
            this.cart.find(function (x) { return x.ItemID === item.ItemID; }).Qty += qty;
            if (this.cart.find(function (x) { return x.ItemID === item.ItemID; }).Qty === 0) {
                var index = this.cart.indexOf(this.cart.find(function (x) { return x.ItemID === item.ItemID; }));
                if (index > -1) {
                    this.cart.splice(index, 1);
                }
            }
        }
        else {
            this.cart.push({ item: item, Qty: 1, ItemID: item.ItemID });
        }
        localStorage.setItem('Cart', JSON.stringify(this.cart));
        this.events.publish('cart:updated', 1, Date.now());
        this.getCartTotal();
    };
    AddItemsPage.prototype.removeFromCart = function (item) {
        console.log(this.cart.find(function (x) { return x.ItemID === item.ItemID; }));
        if (this.cart.find(function (x) { return x.ItemID === item.ItemID; })) {
            this.cart.find(function (x) { return x.ItemID === item.ItemID; }).Qty = 0;
            if (this.cart.find(function (x) { return x.ItemID === item.ItemID; }).Qty === 0) {
                var index = this.cart.indexOf(this.cart.find(function (x) { return x.ItemID === item.ItemID; }));
                if (index > -1) {
                    this.cart.splice(index, 1);
                }
            }
        }
        localStorage.setItem('Cart', JSON.stringify(this.cart));
        this.getCartTotal();
    };
    AddItemsPage.prototype.isInTheCart = function (itemId) {
        return (this.cart.find(function (x) { return x.ItemID === itemId; })) ? true : false;
        // return itemId ;
    };
    AddItemsPage.prototype.itemCountInCart = function (item) {
        if (this.cart.find(function (x) { return x.ItemID === item; })) {
            return this.cart.find(function (x) { return x.ItemID === item; }).Qty;
        }
        else {
            return 0;
        }
    };
    AddItemsPage.prototype.goToSales = function () {
        this.router.navigate(['/create-sales-order']);
    };
    AddItemsPage.prototype.toggleSearchBar = function () {
        this.search = !this.search;
        if (!this.search) {
            this.ngOnInit();
        }
    };
    AddItemsPage.prototype.searchItem = function (evt) {
        var _this = this;
        console.log(evt.target.value);
        if (!evt.target.value) {
            this.ngOnInit();
        }
        else {
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
            }).catch(function (exp) {
                console.log('exp', exp);
            });
        }
    };
    AddItemsPage.prototype.valuechange = function (item) {
        var _this = this;
        if (this.interval) {
            clearTimeout(this.interval);
        }
        this.interval = setTimeout(function () {
            console.log(_this.SerialNo);
            _this.SearchSerial(_this.SerialNo);
            setTimeout(function () {
                _this.myInput.setFocus();
            }, 1000);
        }, 500);
    };
    AddItemsPage.prototype.Scan = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            console.log(barcodeData.text);
            _this.SearchSerial(barcodeData.text);
        }).catch(function (err) {
            console.log('Error', err);
        });
    };
    AddItemsPage.prototype.SearchSerial = function (barcode) {
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
    AddItemsPage.prototype.getCartTotal = function () {
        var _this = this;
        this.cartTotal = 0;
        console.log('cartTotal', this.cartTotal);
        this.cart.forEach(function (element) {
            _this.cartTotal += element.item.Price * element.Qty;
        });
        console.log('cartTotal', this.cartTotal);
    };
    __decorate([
        ViewChild('input'),
        __metadata("design:type", Object)
    ], AddItemsPage.prototype, "myInput", void 0);
    AddItemsPage = __decorate([
        Component({
            selector: 'app-add-items',
            templateUrl: './add-items.page.html',
            styleUrls: ['./add-items.page.scss'],
        }),
        __metadata("design:paramtypes", [ActivatedRoute,
            FakeApiService,
            Router,
            Events,
            Platform,
            BarcodeScanner,
            ModalController])
    ], AddItemsPage);
    return AddItemsPage;
}());
export { AddItemsPage };
//# sourceMappingURL=add-items.page.js.map
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
import { Component } from '@angular/core';
import { LocalStorageService } from '../../service/local-storage.service';
import { DataService } from '../../service/api/data.service';
import { LoadingController, Platform } from '@ionic/angular';
import { FakeApiService } from '../../service/fake-api/fake-api.service';
import { Router } from '@angular/router';
var ClientCreatePage = /** @class */ (function () {
    function ClientCreatePage(LS, api, loadingCtrl, fakeApi, router, platform) {
        this.LS = LS;
        this.api = api;
        this.loadingCtrl = loadingCtrl;
        this.fakeApi = fakeApi;
        this.router = router;
        this.platform = platform;
        this.salsman = JSON.parse(localStorage.getItem('Salesman'));
        this.sorts = [];
        this.client = {
            CompanyID: 1,
            AccArName: '',
            VatNumber: '',
            ParentAccID: 1102,
            AccLevel: 4,
            // AccIDForUser: ,
            IsActive: 1,
            CurrencyID: 1,
            MultiCurrency: 1,
            CreatedBy: this.salsman.ArName,
            SortID: 1,
            Filter1: 1,
            Filter2: 0,
            Filter3: 0,
            Filter4: 0,
            Filter5: 0,
            PrintingName: '',
            VatStatus: 1,
            CityID: 2,
            Address: '',
            Tel: '',
            Fax: '',
            Mobile: '',
            Email: '',
            WebSite: '',
            //  CommercialID: 12,
            BudgetParentAccID: 1102,
            GeneralPriceListID: 1,
            // PriceListID: 2,
            // GuarantorAccID: 65,
            RecordAddBy: this.salsman.ArName
        };
    }
    ClientCreatePage.prototype.ngOnInit = function () {
    };
    ClientCreatePage.prototype.ionViewWillEnter = function () {
        // this.LS.getSortData().then((data: any) => {
        //   //    this.sorts = Object.values(sort);
        //   this.sorts = data;
        // }).catch(err => {
        //   console.log(err);
        // });
        var _this = this;
        this.fakeApi.getAllClientSort().then(function (data) {
            console.log(data.res.rows.item(0));
            //  this.sort = data.res.rows.item(0);
            if (_this.platform.is('cordova')) {
                // this.items = [];
                if (data.res.rows.length > 0) {
                    for (var i = 0; i < data.res.rows.length; i++) {
                        _this.sorts.push(data.res.rows.item(i));
                    }
                }
            }
            else {
                _this.sorts = Object.values(data.res.rows);
            }
            console.log(_this.sorts);
        }).catch(function (err) {
            console.log(err);
        });
    };
    ClientCreatePage.prototype.uploadClient = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, savedData;
            return __generator(this, function (_a) {
                if (this.client.AccArName === '') {
                    alert('Please fill all required fields');
                    console.log(this.client);
                }
                else {
                    console.log(this.client);
                    // const loading = await this.loadingCtrl.create({
                    //   message: 'Please Wait'
                    // });
                    //  await loading.present();
                    if (this.api.networkStatus === 'Connected') {
                        //       alert('Connected');
                        this.api.uploadClient(this.client).then(function (res) {
                            console.log(res);
                            //  alert(JSON.stringify(res));
                            // loading.dismiss();
                        }, function (err) {
                            //  loading.dismiss();
                            console.log(err);
                            // alert(JSON.stringify(err));
                        }).catch(function (exp) {
                            //  alert(JSON.stringify(exp));
                        });
                    }
                    else {
                        data = { api: 'uploadClient', data: this.client };
                        savedData = localStorage.getItem('savedData');
                        if (savedData) {
                            savedData = JSON.parse(savedData);
                            savedData.push(data);
                            savedData = JSON.stringify(savedData);
                            localStorage.setItem('savedData', savedData);
                        }
                        else {
                            savedData = [];
                            savedData.push(data);
                            savedData = JSON.stringify(savedData);
                            localStorage.setItem('savedData', savedData);
                        }
                    }
                    this.router.navigate(['/clients', 'view']);
                }
                return [2 /*return*/];
            });
        });
    };
    ClientCreatePage = __decorate([
        Component({
            selector: 'app-client-create',
            templateUrl: './client-create.page.html',
            styleUrls: ['./client-create.page.scss'],
        }),
        __metadata("design:paramtypes", [LocalStorageService,
            DataService,
            LoadingController,
            FakeApiService,
            Router,
            Platform])
    ], ClientCreatePage);
    return ClientCreatePage;
}());
export { ClientCreatePage };
//# sourceMappingURL=client-create.page.js.map
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { ModalController, Events, Platform } from '@ionic/angular';
import { FakeApiService } from '../../service/fake-api/fake-api.service';
import { DatePipe } from '@angular/common';
var CollectionModalComponent = /** @class */ (function () {
    function CollectionModalComponent(modalController, events, fakeApi, platform, datePipe) {
        this.modalController = modalController;
        this.events = events;
        this.fakeApi = fakeApi;
        this.platform = platform;
        this.datePipe = datePipe;
        this.Currency = JSON.parse(localStorage.getItem('Currency'));
        this.header = JSON.parse(localStorage.getItem('CollectionsHeader'));
        this.Cash = {
            AccID: 1,
            CurrencyID: 1,
            Equal_Debit: 0,
            Debit: 0,
            TheRate: 1
        };
        this.Check = {
            AccID: 4,
            CheckNo: '',
            CheckAccout: '',
            CurrencyID: 1,
            Equal_Debit: 0,
            Debit: 0,
            TheRate: 1,
            ChequeDate: '',
            BranchCode: '',
            ChequeStatusId: 5,
            RecieptAverage: 29.474
        };
        this.CheckAcc = [
            {
                AccID: 4,
                CompanyID: 1,
                AccArName: 'الشيكات الواردة',
                AccEnName: 'الشيكات الواردة',
                ParentAccID: 1101,
                AccLevel: 4,
                AccIDForUser: 1200
            }
        ];
        this.CashAcc = [
            {
                AccID: 1,
                CompanyID: 1,
                AccArName: 'الصندوق النقدي',
                AccEnName: 'الصندوق النقدي',
                ParentAccID: 1101,
                AccLevel: 4,
                AccIDForUser: 1101
            }
        ];
        var current_date = new Date();
        console.log(this.datePipe.transform(current_date, 'yyyy-MM-dd'));
        this.date = this.datePipe.transform(current_date, 'yyyy-MM-dd');
        this.Check.ChequeDate = this.date;
    }
    CollectionModalComponent.prototype.portChange = function (event) {
        console.log('port:', event.value);
        console.log(this.port.BranchCode);
        this.Check.BranchCode = this.port.BranchCode;
        this.data.BranchCode = this.port.BranchCode;
    };
    CollectionModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fakeApi.getBank().then(function (data) {
            console.log(data.res.rows.item(0));
            if (_this.platform.is('cordova')) {
                _this.banks = [];
                if (data.res.rows.length > 0) {
                    for (var i = 0; i < data.res.rows.length; i++) {
                        _this.banks.push(data.res.rows.item(i));
                    }
                }
                //   this.offset += 10;
            }
            else {
                _this.banks = Object.values(data.res.rows);
            }
            console.log(_this.banks);
        }).catch(function (err) {
            console.log(err);
        });
        console.log(this.banks);
    };
    CollectionModalComponent.prototype.close = function () {
        this.modalController.dismiss();
    };
    CollectionModalComponent.prototype.accept = function () {
        if (this.value === 'cash') {
            console.log(this.value);
            this.header.Cash.push(this.Cash);
            localStorage.setItem('CollectionsHeader', JSON.stringify(this.header));
        }
        else if (this.value === 'check') {
            this.header.Cheque.push(this.Check);
            localStorage.setItem('CollectionsHeader', JSON.stringify(this.header));
        }
        this.events.publish('Collection:updated', 1, Date.now());
        this.modalController.dismiss();
    };
    CollectionModalComponent.prototype.update = function () {
        if (this.value === 'cash') {
            console.log(this.value);
            this.header.Cash[this.index] = this.data;
            localStorage.setItem('CollectionsHeader', JSON.stringify(this.header));
        }
        else if (this.value === 'check') {
            this.header.Cheque[this.index] = this.data;
            localStorage.setItem('CollectionsHeader', JSON.stringify(this.header));
        }
        this.events.publish('Collection:updated', 1, Date.now());
        this.modalController.dismiss();
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], CollectionModalComponent.prototype, "value", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], CollectionModalComponent.prototype, "data", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], CollectionModalComponent.prototype, "index", void 0);
    CollectionModalComponent = __decorate([
        Component({
            selector: 'app-collection-modal',
            templateUrl: './collection-modal.component.html',
            styleUrls: ['./collection-modal.component.scss']
        }),
        __metadata("design:paramtypes", [ModalController,
            Events,
            FakeApiService,
            Platform,
            DatePipe])
    ], CollectionModalComponent);
    return CollectionModalComponent;
}());
export { CollectionModalComponent };
//# sourceMappingURL=collection-modal.component.js.map
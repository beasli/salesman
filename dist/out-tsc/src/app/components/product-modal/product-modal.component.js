var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ViewChild } from '@angular/core';
import { ModalController, Events } from '@ionic/angular';
var ProductModalComponent = /** @class */ (function () {
    function ProductModalComponent(modalController, events) {
        this.modalController = modalController;
        this.events = events;
        this.Warehouse = JSON.parse(localStorage.getItem('Warehouse'));
        this.Units = JSON.parse(localStorage.getItem('Lookup'));
    }
    ProductModalComponent.prototype.ionViewWillEnter = function () {
        var _this = this;
        setTimeout(function () {
            _this.qtyField.setFocus();
        }, 150);
    };
    ProductModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Units = this.Units.filter(function (x) { return x.LKP_Type === 'Unit'; });
        console.log(this.Units);
        this.value.WarehouseID = 1;
        this.value.UnitID = this.Units[0].LKP_ID;
        if (this.cart.find(function (x) { return x.ItemID === _this.value.ItemID; })) {
            this.qty = this.cart.find(function (x) { return x.ItemID === _this.value.ItemID; }).Qty;
        }
        else {
            this.qty = '';
        }
    };
    ProductModalComponent.prototype.addToCart = function (item, qty) {
        console.log(this.cart.find(function (x) { return x.ItemID === item.ItemID; }));
        if (this.cart.find(function (x) { return x.ItemID === item.ItemID; })) {
            this.cart.find(function (x) { return x.ItemID === item.ItemID; }).Qty = +qty;
            if (this.cart.find(function (x) { return x.ItemID === item.ItemID; }).Qty === 0) {
                var index = this.cart.indexOf(this.cart.find(function (x) { return x.ItemID === item.ItemID; }));
                if (index > -1) {
                    this.cart.splice(index, 1);
                }
            }
        }
        else {
            this.cart.push({ item: item, Qty: +qty, ItemID: item.ItemID });
            if (this.cart.find(function (x) { return x.ItemID === item.ItemID; }).Qty === 0) {
                var index = this.cart.indexOf(this.cart.find(function (x) { return x.ItemID === item.ItemID; }));
                if (index > -1) {
                    this.cart.splice(index, 1);
                }
            }
        }
        localStorage.setItem('Cart', JSON.stringify(this.cart));
        this.events.publish('cart:updated', 1, Date.now());
        this.modalController.dismiss({
            'result': this.cart
        });
    };
    ProductModalComponent.prototype.close = function () {
        this.modalController.dismiss({
            'result': this.cart
        });
    };
    ProductModalComponent.prototype.accept = function () {
        //  console.log(this.value);
        this.addToCart(this.value, this.qty);
    };
    ProductModalComponent.prototype.changeQty = function () {
        console.log(this.qty);
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ProductModalComponent.prototype, "value", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ProductModalComponent.prototype, "cart", void 0);
    __decorate([
        ViewChild('qtyField'),
        __metadata("design:type", Object)
    ], ProductModalComponent.prototype, "qtyField", void 0);
    ProductModalComponent = __decorate([
        Component({
            selector: 'app-product-modal',
            templateUrl: './product-modal.component.html',
            styleUrls: ['./product-modal.component.scss']
        }),
        __metadata("design:paramtypes", [ModalController,
            Events])
    ], ProductModalComponent);
    return ProductModalComponent;
}());
export { ProductModalComponent };
//# sourceMappingURL=product-modal.component.js.map
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
import { FakeApiService } from '../../service/fake-api/fake-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';
import { LocalStorageService } from '../../service/local-storage.service';
var CatalogPage = /** @class */ (function () {
    function CatalogPage(fakeApi, LS, router, route, platform) {
        this.fakeApi = fakeApi;
        this.LS = LS;
        this.router = router;
        this.route = route;
        this.platform = platform;
        this.sorts = [];
        this.search = false;
    }
    CatalogPage.prototype.ngOnInit = function () {
    };
    CatalogPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            // PARAMS CHANGED .. TO SOMETHING REALLY COOL HERE ..
            // for example extract the id..
            console.log(params['type']); // (+) converts string 'id' to a number
            _this.type = params['type'];
        });
        this.LS.getSortData().then(function (data) {
            //    this.sorts = Object.values(sort);
            _this.sorts = data;
        }).catch(function (err) {
            console.log(err);
        });
    };
    CatalogPage.prototype.openItemsList = function (SortID) {
        if (this.type === 'add-to-cart') {
            this.router.navigate(['/add-items', SortID]);
        }
        else {
            this.router.navigate(['/item-list', SortID]);
        }
    };
    CatalogPage.prototype.toggleSearchBar = function () {
        this.search = !this.search;
        if (!this.search) {
            this.ionViewWillEnter();
        }
    };
    CatalogPage.prototype.searchItem = function (evt) {
        console.log(evt.detail.value);
        if (!evt.detail.value) {
            this.ionViewWillEnter();
        }
        else {
            // this.sorts = this.sorts.filter(x => x.ArName == evt.detail.value)
            var temp_1 = [];
            this.sorts.forEach(function (element) {
                if (element.ArName.includes(evt.detail.value)) {
                    temp_1.push(element);
                }
            });
            this.sorts = temp_1;
        }
    };
    CatalogPage = __decorate([
        Component({
            selector: 'app-catalog',
            templateUrl: './catalog.page.html',
            styleUrls: ['./catalog.page.scss'],
        }),
        __metadata("design:paramtypes", [FakeApiService,
            LocalStorageService,
            Router,
            ActivatedRoute,
            Platform])
    ], CatalogPage);
    return CatalogPage;
}());
export { CatalogPage };
//# sourceMappingURL=catalog.page.js.map
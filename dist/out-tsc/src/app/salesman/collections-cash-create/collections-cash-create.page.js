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
import { ModalController, Events } from '@ionic/angular';
import { CollectionModalComponent } from '../../components/collection-modal/collection-modal.component';
var CollectionsCashCreatePage = /** @class */ (function () {
    function CollectionsCashCreatePage(modalController, events) {
        var _this = this;
        this.modalController = modalController;
        this.events = events;
        this.header = JSON.parse(localStorage.getItem('CollectionsHeader'));
        events.subscribe('Collection:updated', function (user, time) {
            // user and time are the same arguments passed in `events.publish(user, time)`
            _this.header = JSON.parse(localStorage.getItem('CollectionsHeader'));
        });
    }
    CollectionsCashCreatePage.prototype.ngOnInit = function () {
    };
    CollectionsCashCreatePage.prototype.presentModal = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.modalController.create({
                                component: CollectionModalComponent,
                                componentProps: { value: item, data: 0 }
                            })];
                    case 1:
                        _a.modal = _b.sent();
                        return [4 /*yield*/, this.modal.present()];
                    case 2: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    CollectionsCashCreatePage.prototype.deleteCash = function (array, index) {
        console.log(array);
        if (index > -1) {
            array.splice(index, 1);
        }
        this.header.Cash = array;
        localStorage.setItem('CollectionsHeader', JSON.stringify(this.header));
    };
    CollectionsCashCreatePage.prototype.updateModal = function (item, data, index) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.modalController.create({
                                component: CollectionModalComponent,
                                componentProps: { value: item, data: data, index: index }
                            })];
                    case 1:
                        _a.modal = _b.sent();
                        return [4 /*yield*/, this.modal.present()];
                    case 2: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    CollectionsCashCreatePage = __decorate([
        Component({
            selector: 'app-collections-cash-create',
            templateUrl: './collections-cash-create.page.html',
            styleUrls: ['./collections-cash-create.page.scss'],
        }),
        __metadata("design:paramtypes", [ModalController,
            Events])
    ], CollectionsCashCreatePage);
    return CollectionsCashCreatePage;
}());
export { CollectionsCashCreatePage };
//# sourceMappingURL=collections-cash-create.page.js.map
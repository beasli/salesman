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
import { Injectable } from '@angular/core';
import { AES256 } from '@ionic-native/aes-256/ngx';
var EncryptionService = /** @class */ (function () {
    function EncryptionService(aes256) {
        this.aes256 = aes256;
        this.generateSecureKeyAndIV(); // To generate the random secureKey and secureIV
    }
    EncryptionService.prototype.generateSecureKeyAndIV = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.aes256.generateSecureKey('random password 12345')];
                    case 1:
                        _a.secureKey = _c.sent(); // Returns a 32 bytes string
                        _b = this;
                        return [4 /*yield*/, this.aes256.generateSecureIV('random password 12345')];
                    case 2:
                        _b.secureIV = _c.sent(); // Returns a 16 bytes string
                        return [2 /*return*/];
                }
            });
        });
    };
    EncryptionService.prototype.encrytPassword = function (toEncrypt) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.aes256.encrypt(_this.secureKey, _this.secureIV, toEncrypt)
                .then(function (res) {
                return resolve(res);
            })
                .catch(function (error) {
                return reject(error);
            });
        });
    };
    EncryptionService.prototype.decrytPassword = function (encrypted) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.aes256.decrypt(_this.secureKey, _this.secureIV, encrypted)
                .then(function (res) {
                return resolve(res);
            })
                .catch(function (error) {
                return reject(error);
            });
        });
    };
    EncryptionService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [AES256])
    ], EncryptionService);
    return EncryptionService;
}());
export { EncryptionService };
//# sourceMappingURL=encryption.service.js.map
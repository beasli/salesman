var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
var LocalStorageService = /** @class */ (function () {
    function LocalStorageService() {
    }
    /**
     * Create Lookup Storage in local
     */
    LocalStorageService.prototype.setLookup = function (lookup) {
        return new Promise(function (resolve, reject) {
            localStorage.setItem('Lookup', JSON.stringify(lookup));
            resolve(true);
        });
    };
    /**
    * Create Company Storage in local
    */
    LocalStorageService.prototype.setCompany = function (lookup) {
        return new Promise(function (resolve, reject) {
            localStorage.setItem('Company', JSON.stringify(lookup));
            resolve(true);
        });
    };
    /**
    * Create Role Storage in local
    */
    LocalStorageService.prototype.setRole = function (lookup) {
        return new Promise(function (resolve, reject) {
            localStorage.setItem('Role', JSON.stringify(lookup));
            resolve(true);
        });
    };
    /**
    * Create User Storage in local
    */
    LocalStorageService.prototype.setUser = function (lookup) {
        return new Promise(function (resolve, reject) {
            localStorage.setItem('User', JSON.stringify(lookup));
            resolve(true);
        });
    };
    /**
    * Create Currency Storage in local
    */
    LocalStorageService.prototype.setCurrency = function (lookup) {
        return new Promise(function (resolve, reject) {
            localStorage.setItem('Currency', JSON.stringify(lookup));
            resolve(true);
        });
    };
    /**
    * Create Inventory Storage in local
    */
    LocalStorageService.prototype.setInventory = function (lookup) {
        return new Promise(function (resolve, reject) {
            localStorage.setItem('Inventory', JSON.stringify(lookup));
            resolve(true);
        });
    };
    /**
    * Create Sort Storage in local
    */
    LocalStorageService.prototype.setSort = function (lookup) {
        return new Promise(function (resolve, reject) {
            localStorage.setItem('Sort', JSON.stringify(lookup));
            resolve(true);
        });
    };
    /**
     * Create Warehouse Storage in local
     */
    LocalStorageService.prototype.setWarehouse = function (lookup) {
        return new Promise(function (resolve, reject) {
            localStorage.setItem('Warehouse', JSON.stringify(lookup));
            resolve(true);
        });
    };
    /**
     * Perform an arbitrary SQL Select Opration
     * on User Table
     * @param {array} element the array to use by query for tables columns value
     * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
     */
    LocalStorageService.prototype.getUserByUsernameAndPassword = function (element) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.JsonData = JSON.parse(localStorage.getItem('User'));
            var res = _this.JsonData.find(function (x) { return x.UserName === element.UserName; });
            if (res) {
                if (res.Password === element.Password) {
                    resolve(res);
                }
                else {
                    reject({ msg: 'Password is incorrect.' });
                }
            }
            else {
                reject({ msg: 'Username is incorrect.' });
            }
        });
    };
    /**
     * Perform an arbitrary SQL Select Opration
     * on User Table
     * @param {array} element the array to use by query for tables columns value
     * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
     */
    LocalStorageService.prototype.addUser = function (element) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.JsonData = JSON.parse(localStorage.getItem('User'));
            var res = _this.JsonData.findIndex(function (x) { return x.Id === element.ID; });
            if (res) {
                resolve(res);
            }
            else {
                reject({ msg: 'User not found' });
            }
        });
    };
    /**
    * Perform an arbitrary SQL Select Opration
    * on User Table
    * @param {array} element the array to use by query for tables columns value
    * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
    */
    LocalStorageService.prototype.getSortData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.JsonData = JSON.parse(localStorage.getItem('Sort'));
            var res = _this.JsonData;
            if (res) {
                resolve(res);
            }
            else {
                reject({ msg: 'Data Not Available' });
            }
        });
    };
    LocalStorageService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], LocalStorageService);
    return LocalStorageService;
}());
export { LocalStorageService };
//# sourceMappingURL=local-storage.service.js.map
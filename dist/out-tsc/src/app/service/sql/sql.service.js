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
import { SQLite } from '@ionic-native/sqlite/ngx';
import { Platform } from '@ionic/angular';
var DB_NAME = '__salesmanStorage.db';
var win = window;
var SqlService = /** @class */ (function () {
    function SqlService(platform, sqlite) {
        this.platform = platform;
        this.sqlite = sqlite;
        console.log('SQL', 'sql provider initialized');
        if (this.platform.is('cordova')) {
            console.warn('Will open DB on JIT');
        }
        else {
            console.warn('Storage: SQLite plugin not installed, falling back to WebSQL. Make sure to install sqlite-storage in production!');
            this._db = win.openDatabase(DB_NAME, '1.0', 'database', 5 * 1024 * 1024);
        }
    }
    /**
     * Perform an arbitrary SQL operation on the database. Use this method
     * to have full control over the underlying database through SQL operations
     * like SELECT, INSERT, and UPDATE.
     *
     * @param {string} query the query to run
     * @param {array} params the additional params to use for query placeholders
     * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
     */
    SqlService.prototype.query = function (query, params) {
        var _this = this;
        if (params === void 0) { params = []; }
        if (this.platform.is('cordova')) {
            return new Promise(function (resolve, reject) {
                _this.sqlite.create({
                    name: DB_NAME,
                    location: 'default'
                })
                    .then(function (db) {
                    _this._db = db;
                    console.log('SQL DB Created');
                    _this._db.executeSql(query, params)
                        .then(function (res) {
                        return resolve({ res: res });
                    })
                        .catch(function (err) {
                        return reject({ err: err });
                    });
                })
                    .catch(function (err) {
                    return reject({ err: err });
                });
            });
        }
        else {
            return new Promise(function (resolve, reject) {
                try {
                    _this._db.transaction(function (tx) {
                        tx.executeSql(query, params, function (txn, res) {
                            return resolve({ tx: txn, res: res });
                        }, function (txn, err) {
                            return reject({ tx: txn, err: err });
                        });
                    }, function (err) { return reject({ err: err }); });
                }
                catch (err) {
                    reject({ err: err });
                }
            });
        }
    };
    SqlService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [Platform,
            SQLite])
    ], SqlService);
    return SqlService;
}());
export { SqlService };
//# sourceMappingURL=sql.service.js.map
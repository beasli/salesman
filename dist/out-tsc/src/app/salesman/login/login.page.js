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
import { Router } from '@angular/router';
import { ToastController, Platform } from '@ionic/angular';
import { FakeApiService } from '../../service/fake-api/fake-api.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { LocalStorageService } from '../../service/local-storage.service';
var LoginPage = /** @class */ (function () {
    function LoginPage(router, fakeApi, FA, toastController, platform, formBuilder) {
        this.router = router;
        this.fakeApi = fakeApi;
        this.FA = FA;
        this.toastController = toastController;
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.loginData = { UserName: '', Password: '' };
        this.validation_messages = {
            'UserName': [
                { type: 'required', message: 'UserName is required.' }
            ],
            'Password': [
                { type: 'required', message: 'Password is required.' },
                { type: 'minlength', message: 'Password must be at least 5 characters long' }
            ]
        };
        this.validations_form = this.formBuilder.group({
            UserName: new FormControl('', Validators.compose([
                Validators.required
            ])),
            Password: new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(5)
            ])),
        });
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.onSubmit = function (values) {
        var _this = this;
        this.loginData = {
            UserName: values.UserName,
            Password: values.Password
        };
        console.log(this.loginData);
        this.fakeApi.getUserByUsernameAndPassword(this.loginData).then(function (data) {
            _this.FA.getUserRole(data.AccId).then(function (role) {
                var Role;
                if (_this.platform.is('cordova')) {
                    Role = [];
                    if (role.res.rows.length > 0) {
                        for (var i = 0; i < role.res.rows.length; i++) {
                            Role.push(role.res.rows.item(i));
                        }
                    }
                }
                else {
                    Role = Object.values(role.res.rows);
                }
                role = Role[0];
                console.log('test', role);
                if (role) {
                    if (role.AccID === +data.AccId) {
                        localStorage.setItem('Salesman', JSON.stringify(data));
                        localStorage.setItem('LoginAs', 'Client');
                        _this.router.navigate(['/dashboard']);
                    }
                    else if (role.SupervisorID === +data.AccId) {
                        localStorage.setItem('Salesman', JSON.stringify(data));
                        localStorage.setItem('LoginAs', 'Supervisor');
                        _this.router.navigate(['/dashboard']);
                    }
                    else if (role.EmployeeID === +data.AccId) {
                        localStorage.setItem('Salesman', JSON.stringify(data));
                        localStorage.setItem('LoginAs', 'Employee');
                        _this.router.navigate(['/dashboard']);
                    }
                }
                else {
                    _this.presentToast('Sorry, You are not authorized to login at this moment');
                }
                // console.log('Sorry, You are not authorized to login at this moment');
            }).catch(function (err) {
                _this.presentToast(err.msg);
            });
        }).catch(function (err) {
            _this.presentToast(err.msg);
        });
    };
    LoginPage.prototype.presentToast = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: text,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage = __decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.page.html',
            styleUrls: ['./login.page.scss'],
        }),
        __metadata("design:paramtypes", [Router,
            LocalStorageService,
            FakeApiService,
            ToastController,
            Platform,
            FormBuilder])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.page.js.map
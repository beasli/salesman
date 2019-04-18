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
import { SqlService } from '../sql/sql.service';
import { Platform } from '@ionic/angular';
import { EncryptionService } from '../enceyption/encryption.service';
var FakeApiService = /** @class */ (function () {
    function FakeApiService(sql, platform, enc) {
        this.sql = sql;
        this.platform = platform;
        this.enc = enc;
    }
    FakeApiService.prototype.getTables = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // tslint:disable-next-line:max-line-length
            _this.sql.query('SELECT name FROM sqlite_master WHERE type="table"').then(function (data) {
                resolve(data);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    FakeApiService.prototype.cleanDb = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.sql.query('DROP TABLE IF EXISTS Lookup').then(function (data) {
                resolve(data);
            }).catch(function (err) {
                reject(err);
            });
            _this.sql.query('DROP TABLE IF EXISTS Company').then(function (data) {
                resolve(data);
            }).catch(function (err) {
                reject(err);
            });
            _this.sql.query('DROP TABLE IF EXISTS User').then(function (data) {
                resolve(data);
            }).catch(function (err) {
                reject(err);
            });
            _this.sql.query('DROP TABLE IF EXISTS Role').then(function (data) {
                resolve(data);
            }).catch(function (err) {
                reject(err);
            });
            _this.sql.query('DROP TABLE IF EXISTS Currency').then(function (data) {
                resolve(data);
                console.log('client list deleted');
            }).catch(function (err) {
                reject(err);
            });
            _this.sql.query('DROP TABLE IF EXISTS Inventory').then(function (data) {
                resolve(data);
                console.log('client list deleted');
            }).catch(function (err) {
                reject(err);
            });
            _this.sql.query('DROP TABLE IF EXISTS Sort').then(function (data) {
                resolve(data);
                console.log('ItemHistory list deleted');
            }).catch(function (err) {
                reject(err);
            });
            _this.sql.query('DROP TABLE IF EXISTS SalesOrder').then(function (data) {
                resolve(data);
                console.log('SalesOrder list deleted');
            }).catch(function (err) {
                reject(err);
            });
            _this.sql.query('DROP TABLE IF EXISTS InvoicesList').then(function (data) {
                resolve(data);
                console.log('client list deleted');
            }).catch(function (err) {
                reject(err);
            });
            _this.sql.query('DROP TABLE IF EXISTS InventoryItems').then(function (data) {
                resolve(data);
                console.log('client list deleted');
            }).catch(function (err) {
                reject(err);
            });
            _this.sql.query('DROP TABLE IF EXISTS ClientList').then(function (data) {
                resolve(data);
                console.log('ItemHistory list deleted');
            }).catch(function (err) {
                reject(err);
            });
            _this.sql.query('DROP TABLE IF EXISTS ItemHistory').then(function (data) {
                resolve(data);
                console.log('SalesOrder list deleted');
            }).catch(function (err) {
                reject(err);
            });
            _this.sql.query('DROP TABLE IF EXISTS Collections').then(function (data) {
                resolve(data);
                console.log('SalesOrder list deleted');
            }).catch(function (err) {
                reject(err);
            });
            _this.sql.query('DROP TABLE IF EXISTS ClientSort').then(function (data) {
                resolve(data);
                console.log('ClientSort list deleted');
            }).catch(function (err) {
                reject(err);
            });
            _this.sql.query('DROP TABLE IF EXISTS ClientBalance').then(function (data) {
                resolve(data);
                console.log('ClientBalance list deleted');
            }).catch(function (err) {
                reject(err);
            });
            _this.sql.query('DROP TABLE IF EXISTS Bank').then(function (data) {
                resolve(data);
                console.log('Bank list deleted');
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    FakeApiService.prototype.halfSyncClean = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.sql.query('DROP TABLE IF EXISTS ClientList').then(function (data) {
                resolve(data);
                console.log('ItemHistory list deleted');
            }).catch(function (err) {
                reject(err);
            });
            _this.sql.query('DROP TABLE IF EXISTS ItemHistory').then(function (data) {
                resolve(data);
                console.log('SalesOrder list deleted');
            }).catch(function (err) {
                reject(err);
            });
            _this.sql.query('DROP TABLE IF EXISTS InventoryItems').then(function (data) {
                resolve(data);
                console.log('client list deleted');
            }).catch(function (err) {
                reject(err);
            });
            _this.sql.query('DROP TABLE IF EXISTS SalesOrder').then(function (data) {
                resolve(data);
                console.log('SalesOrder list deleted');
            }).catch(function (err) {
                reject(err);
            });
            _this.sql.query('DROP TABLE IF EXISTS InvoicesList').then(function (data) {
                resolve(data);
                console.log('client list deleted');
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    /**
   * Create Company Table If Not Exist In DB.
   * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
   */
    FakeApiService.prototype.initCompany = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // tslint:disable-next-line:max-line-length
            _this.sql.query('CREATE TABLE IF NOT EXISTS Company (CompanyID int unique, CompanyAr nvarchar, CompanyEn nvarchar, Tel1 varchar, Tel2	varchar, Fax1	varchar, AddressAr	nvarchar, AddressEn	nvarchar, Email	varchar, WebSite	varchar, LicenseIDNo	varchar, ReportHeader	varchar, ReportFooter	varchar, CurrencyID	int, IncomeTaxPercent	int, ActivityID	int, IsActive	boolean, Note	varchar, CompanyLogo	varchar)').then(function (data) {
                resolve(data);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    /**
     * Create Users Table If Not Exist In DB.
     * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
     */
    FakeApiService.prototype.initUsers = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // tslint:disable-next-line:max-line-length
            _this.sql.query('CREATE TABLE IF NOT EXISTS User (Id int unique, CompanyId int, ArName nvarchar, EnName varchar, UserName	varchar, Email	varchar, Phone	varchar, ImagePath	varchar, Password	varchar, RoleId	int)').then(function (data) {
                resolve(data);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    /**
     * Create Role Table If Not Exist In DB.
     * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
     */
    FakeApiService.prototype.initRoles = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.sql.query('CREATE TABLE IF NOT EXISTS Role (Id int unique, ARName nvarchar, EnName nvarchar, IsActive boolean)').then(function (data) {
                resolve(data);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    /**
     * Create Currency Table If Not Exist In DB.
     * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
     */
    FakeApiService.prototype.initCurrency = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // tslint:disable-next-line:max-line-length
            _this.sql.query('CREATE TABLE IF NOT EXISTS Currency (Id int unique, ARName nvarchar, EnName nvarchar, ReadOnly boolean)').then(function (data) {
                resolve(data);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    /**
     * Create Lookup Table If Not Exist In DB.
     * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
     */
    FakeApiService.prototype.initLookup = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // tslint:disable-next-line:max-line-length
            _this.sql.query('CREATE TABLE IF NOT EXISTS Lookup (ID int unique, LKP_ID int, LKP_Type nvarchar, AR_LKP_Type nvarchar, ArName nvarchar, EnName nvarchar, Note nvarchar, Image nvarchar, ItemID int, ReadOnly boolean, IsQuantityCalculated boolean, Tel nvarchar, Mobile nvarchar, Comment nvarchar, AccID int, CarNo nvarchar, CarType nvarchar, DiscountPercentage nvarchar, CompanyID int, IsActive boolean, IsRoot boolean )').then(function (data) {
                resolve(data);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    /**
     * Create Inventory Table If Not Exist In DB.
     * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
     */
    FakeApiService.prototype.initInventory = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // tslint:disable-next-line:max-line-length
            _this.sql.query('CREATE TABLE IF NOT EXISTS Inventory (ItemID int unique, CompanyID int, ItemIDForUser int, ItemArName nvarchar, ItemEnName nvarchar, Barcode nvarchar, SortID int, ItemClassID int, WarehouseID int, LocationID int, CatalogNo nvarchar, PartNo nvarchar, AccFamilyID int, VendorAccID int, UnitID int, Cost int, PriceLevelID int, PriceLevel_Price int, GeneralDiscount nvarchar, CustomizeDiscountID int, MinimumStock nvarchar, ReorderQTY varchar, HaveExpireDate varchar, Filter0 varchar, Filter1 varchar, Filter2 varchar, Filter3 varchar, Filter4 varchar, Filter5 varchar, Filter6 varchar, Filter7 varchar, Note nvarchar, IsActive boolean, Comment nvarchar, PrimaryAttribute nvarchar, SecondaryAttribute nvarchar, IsSubItem boolean, LevelID int,IsParentItem boolean, ParentItemID int, ItemAttribute1ID int, ItemAttribute2ID int, ItemBillMaterialID int, QuantityOnHand int, PrintComponentsOnInvoice boolean, Weight nvarchar, Volume nvarchar, Is_POS_Item boolean, ItemImage nvarchar, IsAutoSerial boolean, FullAutoSerialNo nvarchar, FirstSerialNo nvarchar, NextSerialNo nvarchar, LastSerialNo nvarchar, IsScaleBarcode boolean, MeterInBox nvarchar, IsLength boolean, IsWidth boolean, IsDepth boolean, IsQuantity boolean, ImagePath nvarchar, RecordAddBy nvarchar, RecordUpdateBy nvarchar, RecordNote nvarchar, RecordDeleted nvarchar, RecordDateEntry nvarchar)').then(function (data) {
                resolve(data);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    /**
     * Create InventoryItems Table If Not Exist In DB.
     * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
     */
    FakeApiService.prototype.initInventoryItems = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // tslint:disable-next-line:max-line-length
            _this.sql.query('CREATE TABLE IF NOT EXISTS InventoryItems (ItemID int unique, CompanyID int, ArName nvarchar, EnName nvarchar, Barcode nvarchar, SortID int, Price varchar, Cost varchar, Description varchar, Image varchar, Stock varchar, ActualStock varchar, MinimumStock varchar, History varchar, CatelogNumber varchar, PartNumber varchar, Weight varchar, HaveExpiryDate varchar)').then(function (data) {
                resolve(data);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    /**
    * Create SalesOrder Table If Not Exist In DB.
    * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
    */
    FakeApiService.prototype.initSalesOrder = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // tslint:disable-next-line:max-line-length
            _this.sql.query('CREATE TABLE IF NOT EXISTS SalesOrder (VoucherID int unique, AccID int, InertvalID int, CompanyID int, VoucherType int, ArAccount nvarchar, EnAccount nvarchar, Note nvarchar, Status varchar, EntryBy nvarchar, Amount nvarchar, Date varchar, Item varchar, Header varchar, EnglishStatus nvarchar, SupervisorId int, EmployeeId int, TotalPreDiscount float, UploadStatusID int)').then(function (data) {
                resolve(data);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    /**
     * Create Currency Table If Not Exist In DB.
     * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
     */
    FakeApiService.prototype.initSort = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // tslint:disable-next-line:max-line-length
            _this.sql.query('CREATE TABLE IF NOT EXISTS Sort (SortID int unique, CompanyID int, ArName nvarchar, EnName nvarchar, ReadOnly boolean)').then(function (data) {
                resolve(data);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    /**
     * Create Currency Table If Not Exist In DB.
     * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
     */
    FakeApiService.prototype.initClientList = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // tslint:disable-next-line:max-line-length
            _this.sql.query('CREATE TABLE  ClientList (AccID int unique, EmployeeID int, SupervisorID int, ArName nvarchar, EnName nvarchar, VatNo varchar, VatAccID int, PhoneNumber varchar, Email varchar, CityId int, CityName varchar, Address varchar, FaxNumber varchar, SortID int, Website varchar, TotalBalance varchar, CurrencyID int, CurrencyName varchar, SpecialPrice varchar, Balance varchar, UnPaid varchar, History varchar)').then(function (data) {
                resolve(data);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    /**
     * Create Currency Table If Not Exist In DB.
     * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
     */
    FakeApiService.prototype.initInvoicesList = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // tslint:disable-next-line:max-line-length
            _this.sql.query('CREATE TABLE IF NOT EXISTS InvoicesList (Id int unique, VoucherDate nvarchar, ClientDetail nvarchar, Item varchar, StatusName varchar, StatusID int, Amount varchar, CurrencyName varchar)').then(function (data) {
                resolve(data);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    /**
     * Create Collections Table If Not Exist In DB.
     * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
     */
    FakeApiService.prototype.initCollectionsList = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // tslint:disable-next-line:max-line-length
            _this.sql.query('CREATE TABLE IF NOT EXISTS Collections (RV_ID int unique, EmployeeID int, SupervisorId int, CompanyID int, IntervalID int, RV_Details varchar, CurrencyID int, ClientID int, PaymentOption varchar, VoucherID int, StatusId int, RV_Date varchar, RV_Amount varchar, RV_Equal_Amount varchar, EntryBy varchar, CreatedOn varchar, TheRate int, Note varchar, PostDate varchar, Cash varchar, Cheque varchar, CurrencyName varchar, StatusName varchar)').then(function (data) {
                resolve(data);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    /**
     * Create Collections Table If Not Exist In DB.
     * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
     */
    FakeApiService.prototype.initItemHistory = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // tslint:disable-next-line:max-line-length
            _this.sql.query('CREATE TABLE IF NOT EXISTS ItemHistory (InvoiceID int unique, ItemID int, Date nvarchar, Client varchar, InvoiceTotal varchar, Status varchar, Quantity varchar, Price varchar, CurrencyID int, CurrencyName nvarchar, AccID int)').then(function (data) {
                resolve(data);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    /**
     * Create ClientSort Table If Not Exist In DB.
     * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
     */
    FakeApiService.prototype.initClientSort = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // tslint:disable-next-line:max-line-length
            _this.sql.query('CREATE TABLE IF NOT EXISTS ClientSort (SortID int unique, CompanyID int, ArName nvarchar, EnName varchar, ReadOnly int)').then(function (data) {
                resolve(data);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    /**
    * Create ClientSort Table If Not Exist In DB.
    * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
    */
    FakeApiService.prototype.initBank = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // tslint:disable-next-line:max-line-length
            _this.sql.query('CREATE TABLE IF NOT EXISTS Bank (Branch_Code int, Arabic_Bank nvarchar, English_Bank nvarchar, BranchCode varchar)').then(function (data) {
                resolve(data);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    /**
     * Create ClientSort Table If Not Exist In DB.
     * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
     */
    FakeApiService.prototype.initClientBalance = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // tslint:disable-next-line:max-line-length
            _this.sql.query('CREATE TABLE IF NOT EXISTS ClientBalance (RV_ID int, CompanyID int, IntervalID int, AccID int, StatusID int, RV_Date varchar, RV_Details varchar, Post_Date varchar, Post_Time varchar, Post_User varchar, RecordAddBy varchar, RecordDateEntry varchar, Debit varchar, Credit varchar, VoucherTypeID int, CurrencyID int, Invoice_ID int, InvoiceType_ID int, ArInvoiceType nvarchar, EnInvoiceType varchar, Balance varchar, TheRate varchar, Equal_Debit varchar, Equal_Credit varchar, CurrencyEnName varchar, ArVoucherType nvarchar, DetailsID int, MasterAccID int, DetailsComment varchar, EmployeeID int, Amount varchar)').then(function (data) {
                resolve(data);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    /**
     * Perform an arbitrary SQL Insert Or Replace Opration
     * on Company table
     * @param {array} element the array to use by query for tables columns value
     * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
     */
    FakeApiService.prototype.setCompany = function (element) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // tslint:disable-next-line:max-line-length
            _this.sql.query('insert or replace into Company(CompanyID, CompanyAr, CompanyEn, Tel1, Tel2, Fax1, AddressAr, AddressEn, Email, WebSite, LicenseIDNo, ReportHeader, ReportFooter, CurrencyID, IncomeTaxPercent, ActivityID, IsActive, Note, CompanyLogo) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [element.CompanyID, element.CompanyAr, element.CompanyEn, element.Tel1, element.Tel2, element.Fax1, element.AddressAr, element.AddressEn, element.Email, element.WebSite, element.LicenseIDNo, element.ReportHeader, element.ReportFooter, element.CurrencyID, element.IncomeTaxPercent, element.ActivityID, element.IsActive, element.Note, element.CompanyLogo])
                .then(function (res) {
                resolve(res);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    /**
     * Perform an arbitrary SQL Insert Or Replace Opration
     * on User table
     * @param {array} element the array to use by query for tables columns value
     * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
     */
    FakeApiService.prototype.setUser = function (element) {
        var _this = this;
        if (this.platform.is('cordova')) {
            // this.enc = new EncryptionService();
            this.enc.encrytPassword(element.Password).then(function (data) {
                console.log('pass = ', element.Password);
            }).catch(function (err) {
                console.log(err);
            });
        }
        return new Promise(function (resolve, reject) {
            // tslint:disable-next-line:max-line-length
            _this.sql.query('insert or replace into User(Id, CompanyId, UserName, ArName, EnName, Email, Phone, ImagePath, Password, RoleId) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [element.Id, element.CompanyId, element.UserName, element.ArName, element.EnName, element.Email, element.Phone, element.ImagePath, element.Password, element.RoleId])
                .then(function (res) {
                resolve(res);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    /**
     * Perform an arbitrary SQL Insert Or Replace Opration
     * on User Role
     * @param {array} element the array to use by query for tables columns value
     * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
     */
    FakeApiService.prototype.setRole = function (element) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // tslint:disable-next-line:max-line-length
            _this.sql.query('insert or replace into Role(Id, ARName, EnName, IsActive) values (?, ?, ?, ?)', [element.Id, element.ARName, element.EnName, element.IsActive])
                .then(function (res) {
                resolve(res);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    /**
     * Perform an arbitrary SQL Insert Or Replace Opration
     * on User Currency
     * @param {array} element the array to use by query for tables columns value
     * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
     */
    FakeApiService.prototype.setCurrency = function (element) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // tslint:disable-next-line:max-line-length
            _this.sql.query('insert or replace into Currency(Id, ARName, EnName, ReadOnly) values (?, ?, ?, ?)', [element.Id, element.ARName, element.EnName, element.ReadOnly])
                .then(function (res) {
                resolve(res);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    /**
     * Perform an arbitrary SQL Insert Or Replace Opration
     * on User Lookup
     * @param {array} element the array to use by query for tables columns value
     * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
     */
    FakeApiService.prototype.setLookup = function (element) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // tslint:disable-next-line:max-line-length
            _this.sql.query('insert or replace into Lookup(ID, LKP_ID, LKP_Type, AR_LKP_Type, ArName, EnName, Note, Image, ItemID, ReadOnly, IsQuantityCalculated, Tel, Mobile, Comment, AccID, CarNo, CarType, DiscountPercentage, CompanyID, IsActive, IsRoot) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [element.ID, element.LKP_ID, element.LKP_Type, element.ArName, element.EnName, element.Note, element.Image, element.ItemID, element.ReadOnly, element.IsQuantityCalculated, element.Tel, element.Image, element.Mobile, element.Comment, element.AccID, element.CarNo, element.CarType, element.DiscountPercentage, element.CompanyID, element.IsActive, element.IsRoot])
                .then(function (res) {
                resolve(res);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    /**
     * Perform an arbitrary SQL Insert Or Replace Opration
     * on Inventory
     * @param {array} element the array to use by query for tables columns value
     * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
     */
    FakeApiService.prototype.setInventory = function (element) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // tslint:disable-next-line:max-line-length
            _this.sql.query('insert or replace into Inventory(ItemID, CompanyID, ItemIDForUser, ItemArName, ItemEnName, Barcode, SortID, ItemClassID, WarehouseID, LocationID, CatalogNo, PartNo, AccFamilyID, VendorAccID, UnitID, Cost, PriceLevelID, PriceLevel_Price, GeneralDiscount, CustomizeDiscountID, MinimumStock, ReorderQTY, HaveExpireDate, Filter0, Filter1, Filter2, Filter3, Filter4, Filter5, Filter6, Filter7, Note, IsActive, Comment, PrimaryAttribute, SecondaryAttribute, IsSubItem, LevelID,IsParentItem, ParentItemID, ItemAttribute1ID, ItemAttribute2ID, ItemBillMaterialID, QuantityOnHand, PrintComponentsOnInvoice, Weight, Volume, Is_POS_Item, ItemImage, IsAutoSerial, FullAutoSerialNo, FirstSerialNo, NextSerialNo, LastSerialNo, IsScaleBarcode, MeterInBox, IsLength, IsWidth, IsDepth, IsQuantity, ImagePath, RecordAddBy, RecordUpdateBy, RecordNote, RecordDeleted, RecordDateEntry) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [element.ItemID, element.CompanyID, element.ItemIDForUser, element.ItemArName, element.ItemEnName, element.Barcode, element.SortID, element.ItemClassID, element.WarehouseID, element.LocationID, element.CatalogNo, element.PartNo, element.AccFamilyID, element.VendorAccID, element.UnitID, element.Cost, element.PriceLevelID, element.PriceLevel_Price, element.GeneralDiscount, element.CustomizeDiscountID, element.MinimumStock, element.ReorderQTY, element.HaveExpireDate, element.Filter0, element.Filter1, element.Filter2, element.Filter3, element.Filter4, element.Filter5, element.Filter6, element.Filter7, element.Note, element.IsActive, element.Comment, element.PrimaryAttribute, element.SecondaryAttribute, element.IsSubItem, element.LevelID, element.IsParentItem, element.ParentItemID, element.ItemAttribute1ID, element.ItemAttribute2ID, element.ItemBillMaterialID, element.QuantityOnHand, element.PrintComponentsOnInvoice, element.Weight, element.Volume, element.Is_POS_Item, element.ItemImage, element.IsAutoSerial, element.FullAutoSerialNo, element.FirstSerialNo, element.NextSerialNo, element.LastSerialNo, element.IsScaleBarcode, element.MeterInBox, element.IsLength, element.IsWidth, element.IsDepth, element.IsQuantity, element.ImagePath, element.RecordAddBy, element.RecordUpdateBy, element.RecordNote, element.RecordDeleted, element.RecordDateEntry])
                .then(function (res) {
                resolve(res);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    /**
       * Perform an arbitrary SQL Insert Or Replace Opration
       * on Inventory
       * @param {array} element the array to use by query for tables columns value
       * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
       */
    FakeApiService.prototype.setInventoryItems = function (element) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // tslint:disable-next-line:max-line-length
            _this.sql.query('insert or replace into InventoryItems (ItemID, CompanyID, ArName, EnName, Barcode, SortID, Price, Cost, Description, Image, Stock, ActualStock, MinimumStock, History, CatelogNumber, PartNumber, Weight, HaveExpiryDate) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [element.ItemID, element.CompanyID, element.ArName, element.EnName, element.Barcode, element.SortID, element.Price, element.Cost, element.Description, element.Image, element.Stock.Stock, element.Stock.ActualStock, element.Stock.MinimumStock, JSON.stringify(element.History), element.CatelogNumber, element.PartNumber, element.Weight, element.HaveExpiryDate])
                .then(function (res) {
                resolve(res);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    /**
       * Perform an arbitrary SQL Insert Or Replace Opration
       * on Inventory
       * @param {array} element the array to use by query for tables columns value
       * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
       */
    FakeApiService.prototype.updateInventoryItems = function (element) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // tslint:disable-next-line:max-line-length
            _this.sql.query('UPDATE InventoryItems SET CompanyID = ?, ArName = ?, EnName = ?, Barcode = ?, SortID = ?, Price = ?, Cost = ?, Description = ?, Image = ?, Stock = ?, ActualStock = ?, MinimumStock = ?, History = ?, CatelogNumber = ?, PartNumber = ?, Weight = ?, HaveExpiryDate = ? Where ItemID = ?', [element.CompanyID, element.ArName, element.EnName, element.Barcode, element.SortID, element.Price, element.Cost, element.Description, element.Image, element.Stock.Stock, element.Stock.ActualStock, element.Stock.MinimumStock, JSON.stringify(element.History), element.CatelogNumber, element.PartNumber, element.Weight, element.HaveExpiryDate, element.ItemID])
                .then(function (res) {
                resolve(res);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    /**
     * Perform an arbitrary SQL Insert Or Replace Opration
     * on User Currency
     * @param {array} element the array to use by query for tables columns value
     * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
     */
    FakeApiService.prototype.setSort = function (element) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // tslint:disable-next-line:max-line-length
            _this.sql.query('insert or replace into Sort(SortID, CompanyID, ArName, EnName, ReadOnly) values (?, ?, ?, ?, ?)', [element.SortID, element.CompanyID, element.ArName, element.EnName, element.ReadOnly])
                .then(function (res) {
                resolve(res);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    /**
     * Perform an arbitrary SQL Insert Or Replace Opration
     * on Inventory
     * @param {array} element the array to use by query for tables columns value
     * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
     */
    FakeApiService.prototype.setSalesOrder = function (element) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // tslint:disable-next-line:max-line-length
            _this.sql.query('insert or replace into SalesOrder (VoucherID, AccID, InertvalID, CompanyID, VoucherType, ArAccount, EnAccount, Note, Status, EntryBy, Amount, Date, Item, Header, EnglishStatus, SupervisorId, EmployeeId, TotalPreDiscount, UploadStatusID) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [element.VoucherID, element.AccID, element.InertvalID, element.CompanyID, element.VoucherType, element.ArAccount, element.EnAccount, element.Note, element.Status, element.EntryBy, element.Amount, element.Date, JSON.stringify(element.Item), JSON.stringify(element.Header), element.EnglishStatus, element.SupervisorId, element.EmployeeId, element.TotalPreDiscount, element.UploadStatusID])
                .then(function (res) {
                resolve(res);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    /**
     * Perform an arbitrary SQL Insert Or Replace Opration
     * on Inventory
     * @param {array} element the array to use by query for tables columns value
     * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
     */
    FakeApiService.prototype.updateSalesOrder = function (element) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // tslint:disable-next-line:max-line-length
            _this.sql.query('UPDATE SalesOrder SET AccID = ?, InertvalID = ?, CompanyID = ?, VoucherType = ?, ArAccount = ?, EnAccount = ?, Note = ?, Status = ?, EntryBy = ?, Amount = ?, Date = ?, Item = ?, Header = ?, EnglishStatus = ?, SupervisorId = ?, EmployeeId = ?, TotalPreDiscount = ?, UploadStatusID = ? WHERE VoucherID = ?', [element.AccID, element.InertvalID, element.CompanyID, element.VoucherType, element.ArAccount, element.EnAccount, element.Note, element.Status, element.EntryBy, element.Amount, element.Date, JSON.stringify(element.Item), JSON.stringify(element.Header), element.EnglishStatus, element.SupervisorId, element.EmployeeId, element.TotalPreDiscount, element.UploadStatusID, element.VoucherID])
                .then(function (res) {
                resolve(res);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    /**
     * Perform an arbitrary SQL Insert Or Replace Opration
     * on Inventory
     * @param {array} element the array to use by query for tables columns value
     * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
     */
    FakeApiService.prototype.setClientList = function (element) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // tslint:disable-next-line:max-line-length
            _this.sql.query('insert or replace into ClientList (AccID, EmployeeID, SupervisorID, ArName, EnName, VatNo, VatAccID, PhoneNumber, Email, CityId, CityName, Address, FaxNumber, SortID, Website, TotalBalance, CurrencyID, CurrencyName, SpecialPrice, Balance, UnPaid, History) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [element.AccID, element.EmployeeID, element.SupervisorID, element.ArName, element.EnName, element.VatNo, element.VatAccID, element.PhoneNumber, element.Email, element.CityId, element.CityName, element.Address, element.FaxNumber, element.SortID, element.Website, element.TotalBalance, element.CurrencyID, element.CurrencyName, JSON.stringify(element.SpecialPrice), JSON.stringify(element.Balance), JSON.stringify(element.UnPaid), JSON.stringify(element.History)])
                .then(function (res) {
                resolve(res);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    /**
     * Perform an arbitrary SQL Insert Or Replace Opration
     * on Inventory
     * @param {array} element the array to use by query for tables columns value
     * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
     */
    FakeApiService.prototype.updateClientList = function (element) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // tslint:disable-next-line:max-line-length
            _this.sql.query('Update ClientList SET EmployeeID = ?, SupervisorID = ?, ArName = ?, EnName = ?, VatNo = ?, VatAccID = ?, PhoneNumber = ?, Email = ?, CityId = ?, CityName = ?, Address = ?, FaxNumber = ?, SortID = ?, Website = ?, TotalBalance = ?, CurrencyID = ?, CurrencyName = ?, SpecialPrice = ?, Balance = ?, UnPaid = ?, History = ? WHERE AccID = ?', [element.EmployeeID, element.SupervisorID, element.ArName, element.EnName, element.VatNo, element.VatAccID, element.PhoneNumber, element.Email, element.CityId, element.CityName, element.Address, element.FaxNumber, element.SortID, element.Website, element.TotalBalance, element.CurrencyID, element.CurrencyName, JSON.stringify(element.SpecialPrice), JSON.stringify(element.Balance), JSON.stringify(element.UnPaid), JSON.stringify(element.History), element.AccID])
                .then(function (res) {
                resolve(res);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    /**
     * Perform an arbitrary SQL Insert Or Replace Opration
     * on Inventory
     * @param {array} element the array to use by query for tables columns value
     * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
     */
    FakeApiService.prototype.setInvoicesList = function (element) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // tslint:disable-next-line:max-line-length
            _this.sql.query('insert or replace into InvoicesList (Id, VoucherDate, ClientDetail, Item, StatusName, StatusID, Amount, CurrencyName) values (?, ?, ?, ?, ?, ?, ?, ?)', [element.Id, element.VoucherDate, JSON.stringify(element.ClientDetail), JSON.stringify(element.Item), element.StatusName, element.StatusID, element.Amount, element.CurrencyName])
                .then(function (res) {
                resolve(res);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    /**
     * Perform an arbitrary SQL Update Opration
     * on InvoicesList
     * @param {array} element the array to use by query for tables columns value
     * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
     */
    FakeApiService.prototype.updateInvoicesList = function (element) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // tslint:disable-next-line:max-line-length
            _this.sql.query('UPDATE InvoicesList SET VoucherDate = ?, ClientDetail = ?, Item = ?, StatusName = ?, StatusID = ?, Amount = ?, CurrencyName = ? Where Id = ?', [element.VoucherDate, JSON.stringify(element.ClientDetail), JSON.stringify(element.Item), element.StatusName, element.StatusID, element.Amount, element.CurrencyName, element.Id])
                .then(function (res) {
                resolve(res);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    /**
     * Perform an arbitrary SQL Insert Or Replace Opration
     * on Collections
     * @param {array} element the array to use by query for tables columns value
     * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
     */
    FakeApiService.prototype.setCollectionsList = function (element) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // tslint:disable-next-line:max-line-length
            _this.sql.query('insert or replace into Collections (RV_ID, EmployeeID, SupervisorId, CompanyID, IntervalID, RV_Details, CurrencyID, ClientID, PaymentOption, VoucherID, StatusId, RV_Date, RV_Amount, RV_Equal_Amount, EntryBy, CreatedOn, TheRate, Note, PostDate, Cash, Cheque, CurrencyName, StatusName) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [element.RV_ID, element.EmployeeID, element.SupervisorId, element.CompanyID, element.IntervalID, element.RV_Details, element.CurrencyID, element.ClientID, element.PaymentOption, element.VoucherID, element.StatusId, element.RV_Date, element.RV_Amount, element.RV_Equal_Amount, element.EntryBy, element.CreatedOn, element.TheRate, element.Note, element.PostDate, JSON.stringify(element.Cash), JSON.stringify(element.Cheque), element.CurrencyName, element.StatusName])
                .then(function (res) {
                resolve(res);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    /**
     * Perform an arbitrary SQL Insert Or Replace Opration
     * on Collections
     * @param {array} element the array to use by query for tables columns value
     * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
     */
    FakeApiService.prototype.updateCollectionsList = function (element) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // tslint:disable-next-line:max-line-length
            _this.sql.query('UPDATE Collections SET EmployeeID = ?, SupervisorId = ?, CompanyID = ?, IntervalID = ?, RV_Details = ?, CurrencyID = ?, ClientID = ?, PaymentOption = ?, VoucherID = ?, StatusId = ?, RV_Date = ?, RV_Amount = ?, RV_Equal_Amount = ?, EntryBy = ?, CreatedOn = ?, TheRate = ?, Note = ?, PostDate = ?, Cash = ?, Cheque = ?, CurrencyName = ?, StatusName = ? WHERE RV_ID = ?', [element.EmployeeID, element.SupervisorId, element.CompanyID, element.IntervalID, element.RV_Details, element.CurrencyID, element.ClientID, element.PaymentOption, element.VoucherID, element.StatusId, element.RV_Date, element.RV_Amount, element.RV_Equal_Amount, element.EntryBy, element.CreatedOn, element.TheRate, element.Note, element.PostDate, JSON.stringify(element.Cash), JSON.stringify(element.Cheque), element.CurrencyName, element.StatusName, element.RV_ID])
                .then(function (res) {
                resolve(res);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    /**
     * Perform an arbitrary SQL Insert Or Replace Opration
     * on Inventory
     * @param {array} element the array to use by query for tables columns value
     * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
     */
    FakeApiService.prototype.setItemHistory = function (element) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // tslint:disable-next-line:max-line-length
            _this.sql.query('insert or replace into ItemHistory (InvoiceID, ItemID, Date, Client, InvoiceTotal, Status, Quantity, Price, CurrencyID, CurrencyName, AccId) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [element.InvoiceID, element.ItemID, element.Date, element.Client, element.InvoiceTotal, element.Status, element.Quantity, element.Price, element.CurrencyID, element.CurrencyName, element.AccId])
                .then(function (res) {
                resolve(res);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    /**
     * Perform an arbitrary SQL Insert Or Replace Opration
     * on Inventory
     * @param {array} element the array to use by query for tables columns value
     * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
     */
    FakeApiService.prototype.setClientSort = function (element) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // tslint:disable-next-line:max-line-length
            _this.sql.query('insert or replace into ClientSort (SortID, CompanyID, ArName, EnName, ReadOnly) values (?, ?, ?, ?, ?)', [element.SortID, element.CompanyID, element.ArName, element.EnName, element.ReadOnly])
                .then(function (res) {
                resolve(res);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    /**
     * Perform an arbitrary SQL Insert Or Replace Opration
     * on Inventory
     * @param {array} element the array to use by query for tables columns value
     * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
     */
    FakeApiService.prototype.setClientBalance = function (element) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // tslint:disable-next-line:max-line-length
            _this.sql.query('insert or replace into ClientBalance (RV_ID, CompanyID, IntervalID, AccID, StatusID, RV_Date, RV_Details, Post_Date, Post_Time, Post_User, RecordAddBy, RecordDateEntry, Debit, Credit, VoucherTypeID, CurrencyID, Invoice_ID, InvoiceType_ID, ArInvoiceType, EnInvoiceType, Balance, TheRate, Equal_Debit, Equal_Credit, CurrencyEnName, ArVoucherType, DetailsID, MasterAccID, DetailsComment, EmployeeID, Amount) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [element.RV_ID, element.CompanyID, element.IntervalID, element.AccID, element.StatusID, element.RV_Date, element.RV_Details, element.Post_Date, element.Post_Time, element.Post_User, element.RecordAddBy, element.RecordDateEntry, element.Debit, element.Credit, element.VoucherTypeID, element.CurrencyID, element.Invoice_ID, element.InvoiceType_ID, element.ArInvoiceType, element.EnInvoiceType, element.Balance, element.TheRate, element.Equal_Debit, element.Equal_Credit, element.CurrencyEnName, element.ArVoucherType, element.DetailsID, element.MasterAccID, element.DetailsComment, element.EmployeeID, element.Amount])
                .then(function (res) {
                resolve(res);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    /**
    * Perform an arbitrary SQL Insert Or Replace Opration
    * on Inventory
    * @param {array} element the array to use by query for tables columns value
    * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
    */
    FakeApiService.prototype.setBank = function (element) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // tslint:disable-next-line:max-line-length
            _this.sql.query('insert or replace into Bank (Branch_Code, Arabic_Bank, English_Bank, BranchCode) values (?, ?, ?, ?)', [element.Branch_Code, element.Arabic_Bank, element.English_Bank, element.BranchCode])
                .then(function (res) {
                resolve(res);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    /**
     * Perform an arbitrary SQL Select Opration
     * on User Table
     * @param {array} element the array to use by query for tables columns value
     * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
     */
    FakeApiService.prototype.getUserByUsernameAndPassword = function (element) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // tslint:disable-next-line:max-line-length
            _this.sql.query('select * from User where UserName = ? And Password = ?', [element.UserName, element.Password])
                .then(function (res) {
                resolve(res);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    /**
     * Perform an arbitrary SQL Select Opration
     * on Sort Table
     * @param {array} element the array to use by query for tables columns value
     * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
     */
    FakeApiService.prototype.getSortData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // tslint:disable-next-line:max-line-length
            _this.sql.query('select * from Sort where SortID <> ? And CompanyID = ?', [undefined, 1])
                .then(function (res) {
                resolve(res);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    /**
     * Perform an arbitrary SQL Select Opration
     * on Inventory Table
     * @param {array} element the array to use by query for tables columns value
     * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
     */
    FakeApiService.prototype.getSortDataBySearchKeyword = function (Keyword) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // tslint:disable-next-line:max-line-length
            _this.sql.query('select * from Sort where ArName LIKE ?', [Keyword])
                .then(function (res) {
                resolve(res);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    /**
     * Perform an arbitrary SQL Select Opration
     * on Inventory Table
     * @param {array} element the array to use by query for tables columns value
     * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
     */
    FakeApiService.prototype.getItemsBySortID = function (SortID, offset) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // tslint:disable-next-line:max-line-length
            _this.sql.query('select * from InventoryItems where SortID = ? Limit ?, 10', [SortID, offset])
                .then(function (res) {
                resolve(res);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    /**
     * Perform an arbitrary SQL Select Opration
     * on Inventory Table
     * @param {array} element the array to use by query for tables columns value
     * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
     */
    FakeApiService.prototype.getItemsBySearchKeyword = function (Keyword, offset) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // tslint:disable-next-line:max-line-length
            _this.sql.query('select * from InventoryItems where ArName LIKE ? OR Barcode LIKE ? OR ItemID LIKE ? Limit ?, 10', [Keyword, Keyword, Keyword, offset])
                .then(function (res) {
                resolve(res);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    /**
     * Perform an arbitrary SQL Select Opration
     * on Inventory Table
     * @param {array} element the array to use by query for tables columns value
     * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
     */
    FakeApiService.prototype.getItemsByBarcode = function (Keyword) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // tslint:disable-next-line:max-line-length
            _this.sql.query('select * from InventoryItems where Barcode = ?', [Keyword])
                .then(function (res) {
                resolve(res);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    /**
     * Perform an arbitrary SQL Select Opration
     * on SalesOrder Table
     * @param {array} element the array to use by query for tables columns value
     * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
     */
    FakeApiService.prototype.getSalesOrder = function (offset, condition) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // tslint:disable-next-line:max-line-length
            _this.sql.query('select * from SalesOrder Where ' + condition + ' Limit ?, 10', [offset])
                .then(function (res) {
                resolve(res);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    /**
     * Perform an arbitrary SQL Select Opration
     * on SalesOrder Table
     * @param {array} element the array to use by query for tables columns value
     * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
     */
    FakeApiService.prototype.getClientList = function (offset, condition) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // tslint:disable-next-line:max-line-length
            _this.sql.query('select * from ClientList Where ' + condition + ' ORDER BY AccID DESC Limit ?, 10 ', [offset])
                .then(function (res) {
                resolve(res);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    /**
     * Perform an arbitrary SQL Select Opration
     * on Inventory Table
     * @param {array} element the array to use by query for tables columns value
     * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
     */
    FakeApiService.prototype.getClientListBySearchKeyword = function (Keyword) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // tslint:disable-next-line:max-line-length
            _this.sql.query('select * from ClientList where ArName LIKE ?', [Keyword])
                .then(function (res) {
                resolve(res);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    FakeApiService.prototype.getSalesOrderBySearchKeyword = function (condition) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // tslint:disable-next-line:max-line-length
            _this.sql.query('select * from SalesOrder Where ' + condition)
                .then(function (res) {
                resolve(res);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    /**
     * Perform an arbitrary SQL Select Opration
     * on SalesOrder Table
     * @param {array} element the array to use by query for tables columns value
     * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
     */
    FakeApiService.prototype.getInvoicesList = function (offset, condition) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // tslint:disable-next-line:max-line-length
            _this.sql.query('select * from InvoicesList Where ' + condition + ' Limit ?, 10', [offset])
                .then(function (res) {
                resolve(res);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    /**
    * Perform an arbitrary SQL Select Opration
    * on SalesOrder Table
    * @param {array} element the array to use by query for tables columns value
    * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
    */
    FakeApiService.prototype.getInvoicesById = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // tslint:disable-next-line:max-line-length
            _this.sql.query('select * from InvoicesList Where id = ?', [id])
                .then(function (res) {
                resolve(res);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    /**
     * Perform an arbitrary SQL Select Opration
     * on SalesOrder Table
     * @param {array} element the array to use by query for tables columns value
     * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
     */
    FakeApiService.prototype.getCollectionsList = function (offset, condition) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // tslint:disable-next-line:max-line-length
            _this.sql.query('SELECT *, c.ArName as ClientName FROM Collections LEFT Join ClientList c ON Collections.ClientID = c.AccID Where ' + condition + ' ORDER BY RV_ID DESC Limit ?, 10', [offset])
                .then(function (res) {
                resolve(res);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    /**
     * Perform an arbitrary SQL Select Opration
     * on SalesOrder Table
     * @param {array} element the array to use by query for tables columns value
     * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
     */
    FakeApiService.prototype.getUserRole = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // tslint:disable-next-line:max-line-length
            _this.sql.query('select SupervisorID, EmployeeID, AccID from ClientList where SupervisorID = ' + id + ' or EmployeeID = ' + id + ' or AccID = ' + id, [])
                .then(function (res) {
                resolve(res);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    /**
    * Perform an arbitrary SQL Select Opration
    * on SalesOrder Table
    * @param {array} element the array to use by query for tables columns value
    * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
    */
    FakeApiService.prototype.getItemHistory = function (id, status, offset) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // tslint:disable-next-line:max-line-length
            _this.sql.query('select * from ItemHistory where ItemID = ? AND Status = ? Limit ?, 10', [id, status, offset])
                .then(function (res) {
                resolve(res);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    /**
    * Perform an arbitrary SQL Select Opration
    * on ClientSort Table
    * @param {array} element the array to use by query for tables columns value
    * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
    */
    FakeApiService.prototype.getClientSort = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // tslint:disable-next-line:max-line-length
            _this.sql.query('select * from ClientSort where SortID = ?', [id])
                .then(function (res) {
                resolve(res);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    /**
    * Perform an arbitrary SQL Select Opration
    * on ClientSort Table
    * @param {array} element the array to use by query for tables columns value
    * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
    */
    FakeApiService.prototype.getAllClientSort = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // tslint:disable-next-line:max-line-length
            _this.sql.query('select * from ClientSort ')
                .then(function (res) {
                resolve(res);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    /**
    * Perform an arbitrary SQL Select Opration
    * on ClientSort Table
    * @param {array} element the array to use by query for tables columns value
    * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
    */
    FakeApiService.prototype.getClientBalance = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // tslint:disable-next-line:max-line-length
            _this.sql.query('select * from ClientBalance WHERE AccID = ?', [id])
                .then(function (res) {
                resolve(res);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    /**
     * Perform an arbitrary SQL Select Opration
     * on ClientSort Table
     * @param {array} element the array to use by query for tables columns value
     * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
     */
    FakeApiService.prototype.getBank = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // tslint:disable-next-line:max-line-length
            _this.sql.query('select * from Bank Limit 50')
                .then(function (res) {
                resolve(res);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    FakeApiService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [SqlService,
            Platform,
            EncryptionService])
    ], FakeApiService);
    return FakeApiService;
}());
export { FakeApiService };
//# sourceMappingURL=fake-api.service.js.map
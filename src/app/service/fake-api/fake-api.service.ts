import { Injectable } from '@angular/core';
import { SqlService } from '../sql/sql.service';
import { Platform } from '@ionic/angular';
import { EncryptionService } from '../enceyption/encryption.service';

@Injectable({
  providedIn: 'root'
})
export class FakeApiService {

  constructor(private sql: SqlService,
    private platform: Platform,
    private enc: EncryptionService
  ) { }

  public getTables() {
    return new Promise((resolve, reject) => {
      this.sql.query('SELECT name FROM sqlite_master WHERE type="table"').then(data => {
        resolve(data);
      }).catch(err => {
        reject(err);
      });
    });

  }

  public cleanDb() {
    return new Promise((resolve, reject) => {
      this.sql.query('DROP TABLE IF EXISTS Lookup').then(data => {
        resolve(data);
      }).catch(err => {
        reject(err);
      });

      this.sql.query('DROP TABLE IF EXISTS Company').then(data => {
        resolve(data);
      }).catch(err => {
        reject(err);
      });

      this.sql.query('DROP TABLE IF EXISTS User').then(data => {
        resolve(data);
      }).catch(err => {
        reject(err);
      });

      this.sql.query('DROP TABLE IF EXISTS Role').then(data => {
        resolve(data);
      }).catch(err => {
        reject(err);
      });

      this.sql.query('DROP TABLE IF EXISTS Currency').then(data => {
        resolve(data);
        console.log('client list deleted');
      }).catch(err => {
        reject(err);
      });
      this.sql.query('DROP TABLE IF EXISTS Inventory').then(data => {
        resolve(data);
        console.log('client list deleted');
      }).catch(err => {
        reject(err);
      });
      this.sql.query('DROP TABLE IF EXISTS Sort').then(data => {
        resolve(data);
        console.log('ItemHistory list deleted');
      }).catch(err => {
        reject(err);
      });
      this.sql.query('DROP TABLE IF EXISTS SalesOrder').then(data => {
        resolve(data);
        console.log('SalesOrder list deleted');
      }).catch(err => {
        reject(err);
      });

      this.sql.query('DROP TABLE IF EXISTS InvoicesList').then(data => {
        resolve(data);
        console.log('client list deleted');
      }).catch(err => {
        reject(err);
      });
      this.sql.query('DROP TABLE IF EXISTS InventoryItems').then(data => {
        resolve(data);
        console.log('client list deleted');
      }).catch(err => {
        reject(err);
      });
      this.sql.query('DROP TABLE IF EXISTS ClientList').then(data => {
        resolve(data);
        console.log('ItemHistory list deleted');
      }).catch(err => {
        reject(err);
      });

      this.sql.query('DROP TABLE IF EXISTS ItemHistory').then(data => {
        resolve(data);
        console.log('SalesOrder list deleted');
      }).catch(err => {
        reject(err);
      });


      this.sql.query('DROP TABLE IF EXISTS Collections').then(data => {
        resolve(data);
        console.log('SalesOrder list deleted');
      }).catch(err => {
        reject(err);
      });


      this.sql.query('DROP TABLE IF EXISTS ClientSort').then(data => {
        resolve(data);
        console.log('ClientSort list deleted');
      }).catch(err => {
        reject(err);
      });


      this.sql.query('DROP TABLE IF EXISTS ClientBalance').then(data => {
        resolve(data);
        console.log('ClientBalance list deleted');
      }).catch(err => {
        reject(err);
      });

      this.sql.query('DROP TABLE IF EXISTS Bank').then(data => {
        resolve(data);
        console.log('Bank list deleted');
      }).catch(err => {
        reject(err);
      });
    });
  }

  public halfSyncClean() {
    return new Promise((resolve, reject) => {
      this.sql.query('DROP TABLE IF EXISTS ClientList').then(data => {
        resolve(data);
        console.log('ItemHistory list deleted');
      }).catch(err => {
        reject(err);
      });

      this.sql.query('DROP TABLE IF EXISTS ItemHistory').then(data => {
        resolve(data);
        console.log('SalesOrder list deleted');
      }).catch(err => {
        reject(err);
      });

      this.sql.query('DROP TABLE IF EXISTS InventoryItems').then(data => {
        resolve(data);
        console.log('client list deleted');
      }).catch(err => {
        reject(err);
      });

      this.sql.query('DROP TABLE IF EXISTS SalesOrder').then(data => {
        resolve(data);
        console.log('SalesOrder list deleted');
      }).catch(err => {
        reject(err);
      });

      this.sql.query('DROP TABLE IF EXISTS InvoicesList').then(data => {
        resolve(data);
        console.log('client list deleted');
      }).catch(err => {
        reject(err);
      });

    });
  }

/**
 * Create Company Table If Not Exist In DB.
 * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
 */
  public initCompany() {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.sql.query('CREATE TABLE IF NOT EXISTS Company (CompanyID int unique, CompanyAr nvarchar, CompanyEn nvarchar, Tel1 varchar, Tel2	varchar, Fax1	varchar, AddressAr	nvarchar, AddressEn	nvarchar, Email	varchar, WebSite	varchar, LicenseIDNo	varchar, ReportHeader	varchar, ReportFooter	varchar, CurrencyID	int, IncomeTaxPercent	int, ActivityID	int, IsActive	boolean, Note	varchar, CompanyLogo	varchar)').then(data => {
        resolve(data);
      }).catch(err => {
        reject(err);
      });
    });
  }


  /**
   * Perform an arbitrary SQL Insert Or Replace Opration
   * on Company table
   * @param {array} element the array to use by query for tables columns value
   * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
   */
  public setCompany(element) {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.sql.query('insert or replace into Company(CompanyID, CompanyAr, CompanyEn, Tel1, Tel2, Fax1, AddressAr, AddressEn, Email, WebSite, LicenseIDNo, ReportHeader, ReportFooter, CurrencyID, IncomeTaxPercent, ActivityID, IsActive, Note, CompanyLogo) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [element.CompanyID, element.CompanyAr, element.CompanyEn, element.Tel1, element.Tel2, element.Fax1, element.AddressAr, element.AddressEn, element.Email, element.WebSite, element.LicenseIDNo, element.ReportHeader, element.ReportFooter, element.CurrencyID, element.IncomeTaxPercent, element.ActivityID, element.IsActive, element.Note, element.CompanyLogo])
        .then(res => {
          resolve(res);
        }).catch(err => {
          reject(err);
        });
    });
  }


  /**
   * Create Users Table If Not Exist In DB.
   * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
   */
  public initUsers() {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.sql.query('CREATE TABLE IF NOT EXISTS User (Id int unique, CompanyId int, ArName nvarchar, EnName varchar, UserName	varchar, Email	varchar, Phone	varchar, ImagePath	varchar, Password	varchar, RoleId	int)').then(data => {
        resolve(data);
      }).catch(err => {
        reject(err);
      });
    });
  }


  /**
   * Perform an arbitrary SQL Insert Or Replace Opration
   * on User table
   * @param {array} element the array to use by query for tables columns value
   * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
   */
  public setUser(element) {

    if (this.platform.is('cordova')) {
      // this.enc = new EncryptionService();
      this.enc.encrytPassword(element.Password).then((data) => {
        console.log('pass = ', element.Password);
      }).catch((err) => {
        console.log(err);
      });
    }

    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.sql.query('insert or replace into User(Id, CompanyId, UserName, ArName, EnName, Email, Phone, ImagePath, Password, RoleId) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [element.Id, element.CompanyId, element.UserName, element.ArName, element.EnName, element.Email, element.Phone, element.ImagePath, element.Password, element.RoleId])
        .then(res => {
          resolve(res);
        }).catch(err => {
          reject(err);
        });
    });
  }

  /**
   * Perform an arbitrary SQL Select Opration
   * on User Table
   * @param {array} element the array to use by query for tables columns value
   * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
   */
  public getUserByUsernameAndPassword(element) {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.sql.query('select * from User where UserName = ? And Password = ?', [element.UserName, element.Password])
        .then(res => {
          resolve(res);
        }).catch(err => {
          reject(err);
        });
    });
  }


  /**
   * Create Role Table If Not Exist In DB.
   * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
   */
  public initRoles() {
    return new Promise((resolve, reject) => {
      this.sql.query('CREATE TABLE IF NOT EXISTS Role (Id int unique, ARName nvarchar, EnName nvarchar, IsActive boolean)').then(data => {
        resolve(data);
      }).catch(err => {
        reject(err);
      });
    });
  }

  /**
   * Create Currency Table If Not Exist In DB.
   * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
   */
  public initCurrency() {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.sql.query('CREATE TABLE IF NOT EXISTS Currency (Id int unique, ARName nvarchar, EnName nvarchar, ReadOnly boolean)').then(data => {
        resolve(data);
      }).catch(err => {
        reject(err);
      });
    });
  }

  /**
   * Perform an arbitrary SQL Insert Or Replace Opration
   * on User Currency
   * @param {array} element the array to use by query for tables columns value
   * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
   */
  public setCurrency(element) {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.sql.query('insert or replace into Currency(Id, ARName, EnName, ReadOnly) values (?, ?, ?, ?)', [element.Id, element.ARName, element.EnName, element.ReadOnly])
        .then(res => {
          resolve(res);
        }).catch(err => {
          reject(err);
        });
    });
  }

  /**
   * Perform an arbitrary SQL Insert Or Replace Opration
   * on User Role
   * @param {array} element the array to use by query for tables columns value
   * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
   */
  public setRole(element) {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.sql.query('insert or replace into Role(Id, ARName, EnName, IsActive) values (?, ?, ?, ?)', [element.Id, element.ARName, element.EnName, element.IsActive])
        .then(res => {
          resolve(res);
        }).catch(err => {
          reject(err);
        });
    });
  }


  /**
   * Perform an arbitrary SQL Select Opration
   * on ClientList Table to get userrole
   * @param {array} element the array to use by query for tables columns value
   * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
   */
  public getUserRole(id) {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.sql.query('select SupervisorID, EmployeeID, AccID from ClientList where SupervisorID = ' + id + ' or EmployeeID = ' + id + ' or AccID = ' + id, [])
        .then(res => {
          resolve(res);
        }).catch(err => {
          reject(err);
        });
    });
  }

  /**
   * Create Lookup Table If Not Exist In DB.
   * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
   */
  public initLookup() {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.sql.query('CREATE TABLE IF NOT EXISTS Lookup (ID int unique, LKP_ID int, LKP_Type nvarchar, AR_LKP_Type nvarchar, ArName nvarchar, EnName nvarchar, Note nvarchar, Image nvarchar, ItemID int, ReadOnly boolean, IsQuantityCalculated boolean, Tel nvarchar, Mobile nvarchar, Comment nvarchar, AccID int, CarNo nvarchar, CarType nvarchar, DiscountPercentage nvarchar, CompanyID int, IsActive boolean, IsRoot boolean )').then(data => {
        resolve(data);
      }).catch(err => {
        reject(err);
      });
    });
  }

   /**
   * Perform an arbitrary SQL Insert Or Replace Opration
   * on User Lookup
   * @param {array} element the array to use by query for tables columns value
   * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
   */
  public setLookup(element) {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.sql.query('insert or replace into Lookup(ID, LKP_ID, LKP_Type, AR_LKP_Type, ArName, EnName, Note, Image, ItemID, ReadOnly, IsQuantityCalculated, Tel, Mobile, Comment, AccID, CarNo, CarType, DiscountPercentage, CompanyID, IsActive, IsRoot) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [element.ID, element.LKP_ID, element.LKP_Type, element.ArName, element.EnName, element.Note, element.Image, element.ItemID, element.ReadOnly, element.IsQuantityCalculated, element.Tel, element.Image, element.Mobile, element.Comment, element.AccID, element.CarNo, element.CarType, element.DiscountPercentage, element.CompanyID, element.IsActive, element.IsRoot])
        .then(res => {
          resolve(res);
        }).catch(err => {
          reject(err);
        });

    });
  }

  /**
   * Create Inventory Table If Not Exist In DB.
   * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
   */
  public initInventory() {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.sql.query('CREATE TABLE IF NOT EXISTS Inventory (ItemID int unique, CompanyID int, ItemIDForUser int, ItemArName nvarchar, ItemEnName nvarchar, Barcode nvarchar, SortID int, ItemClassID int, WarehouseID int, LocationID int, CatalogNo nvarchar, PartNo nvarchar, AccFamilyID int, VendorAccID int, UnitID int, Cost int, PriceLevelID int, PriceLevel_Price int, GeneralDiscount nvarchar, CustomizeDiscountID int, MinimumStock nvarchar, ReorderQTY varchar, HaveExpireDate varchar, Filter0 varchar, Filter1 varchar, Filter2 varchar, Filter3 varchar, Filter4 varchar, Filter5 varchar, Filter6 varchar, Filter7 varchar, Note nvarchar, IsActive boolean, Comment nvarchar, PrimaryAttribute nvarchar, SecondaryAttribute nvarchar, IsSubItem boolean, LevelID int,IsParentItem boolean, ParentItemID int, ItemAttribute1ID int, ItemAttribute2ID int, ItemBillMaterialID int, QuantityOnHand int, PrintComponentsOnInvoice boolean, Weight nvarchar, Volume nvarchar, Is_POS_Item boolean, ItemImage nvarchar, IsAutoSerial boolean, FullAutoSerialNo nvarchar, FirstSerialNo nvarchar, NextSerialNo nvarchar, LastSerialNo nvarchar, IsScaleBarcode boolean, MeterInBox nvarchar, IsLength boolean, IsWidth boolean, IsDepth boolean, IsQuantity boolean, ImagePath nvarchar, RecordAddBy nvarchar, RecordUpdateBy nvarchar, RecordNote nvarchar, RecordDeleted nvarchar, RecordDateEntry nvarchar)').then(data => {
        resolve(data);
      }).catch(err => {
        reject(err);
      });
    });
  }

  /**
   * Create InventoryItems Table If Not Exist In DB.
   * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
   */
  public initInventoryItems() {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.sql.query('CREATE TABLE IF NOT EXISTS InventoryItems (ItemID int unique, CompanyID int, ArName nvarchar, EnName nvarchar, Barcode nvarchar, SortID int, Price varchar, Cost varchar, Description varchar, Image varchar, Stock varchar, ActualStock varchar, MinimumStock varchar, History varchar, CatelogNumber varchar, PartNumber varchar, Weight varchar, HaveExpiryDate varchar)').then(data => {
        resolve(data);
      }).catch(err => {
        reject(err);
      });
    });
  }


/**
   * Perform an arbitrary SQL Insert Or Replace Opration
   * on Inventory
   * @param {array} element the array to use by query for tables columns value
   * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
   */
  public setInventoryItems(element) {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.sql.query('insert or replace into InventoryItems (ItemID, CompanyID, ArName, EnName, Barcode, SortID, Price, Cost, Description, Image, Stock, ActualStock, MinimumStock, History, CatelogNumber, PartNumber, Weight, HaveExpiryDate) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [element.ItemID, element.CompanyID, element.ArName, element.EnName, element.Barcode, element.SortID, element.Price, element.Cost, element.Description, element.Image, element.Stock.Stock, element.Stock.ActualStock, element.Stock.MinimumStock, JSON.stringify(element.History), element.CatelogNumber, element.PartNumber, element.Weight, element.HaveExpiryDate])
        .then(res => {
          resolve(res);
        }).catch(err => {
          reject(err);
        });

    });
  }


/**
   * Perform an arbitrary SQL Insert Or Replace Opration
   * on Inventory
   * @param {array} element the array to use by query for tables columns value
   * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
   */
  public updateInventoryItems(element) {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.sql.query('UPDATE InventoryItems SET CompanyID = ?, ArName = ?, EnName = ?, Barcode = ?, SortID = ?, Price = ?, Cost = ?, Description = ?, Image = ?, Stock = ?, ActualStock = ?, MinimumStock = ?, History = ?, CatelogNumber = ?, PartNumber = ?, Weight = ?, HaveExpiryDate = ? Where ItemID = ?', [element.CompanyID, element.ArName, element.EnName, element.Barcode, element.SortID, element.Price, element.Cost, element.Description, element.Image, element.Stock.Stock, element.Stock.ActualStock, element.Stock.MinimumStock, JSON.stringify(element.History), element.CatelogNumber, element.PartNumber, element.Weight, element.HaveExpiryDate, element.ItemID])
        .then(res => {
          resolve(res);
        }).catch(err => {
          reject(err);
        });

    });
  }


  /**
   * Perform an arbitrary SQL Select Opration
   * on InventoryItems Table
   * @param {array} element the array to use by query for tables columns value
   * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
   */
  public getItemsBySortID(SortID, offset) {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.sql.query('select * from InventoryItems where SortID = ? Limit ?, 10', [SortID, offset])
        .then(res => {
          resolve(res);
        }).catch(err => {
          reject(err);
        });
    });
  }


  /**
   * Perform an arbitrary SQL Select Opration
   * on InventoryItems Table
   * @param {array} element the array to use by query for tables columns value
   * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
   */
  public getItemsBySortIDWithSpecialPrice(SortID, userId, offset) {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.sql.query('select inv.*, sp.Amount from InventoryItems Inv left join (Select * From SpecialPrice a Join ClientList c ON c.GeneralPriceListID = a.GeneralPriceListID WHERE c.AccID = ?) sp ON sp.ItemID =  inv.ItemID where inv.SortID = ? Limit ?, 10', [userId, SortID, offset])
        .then(res => {
          resolve(res);
        }).catch(err => {
          reject(err);
        });
    });
  }

  /**
   * Perform an arbitrary SQL Select Opration
   * on Inventory Table
   * @param {array} element the array to use by query for tables columns value
   * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
   */
  public getItemsBySearchKeyword(Keyword, offset) {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.sql.query('select * from InventoryItems where ArName LIKE ? OR Barcode LIKE ? OR ItemID LIKE ? Limit ?, 10', [Keyword, Keyword, Keyword, offset])
        .then(res => {
          resolve(res);
        }).catch(err => {
          reject(err);
        });
    });
  }


  /**
   * Perform an arbitrary SQL Select Opration
   * on Inventory Table
   * @param {array} element the array to use by query for tables columns value
   * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
   */
  public getItemsBySearchKeywordWithSpecialPrice(Keyword, userId, offset) {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.sql.query('select inv.*, sp.Amount from InventoryItems Inv left join (Select * From SpecialPrice a Join ClientList c ON c.GeneralPriceListID = a.GeneralPriceListID WHERE c.AccID = ?) sp ON sp.ItemID =  inv.ItemID where inv.ArName LIKE ? OR inv.Barcode LIKE ? OR inv.ItemID LIKE ? Limit ?, 10', [userId, Keyword, Keyword, Keyword, offset])
        .then(res => {
          resolve(res);
        }).catch(err => {
          reject(err);
        });
    });
  }

  /**
   * Perform an arbitrary SQL Select Opration
   * on Inventory Table
   * @param {array} element the array to use by query for tables columns value
   * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
   */
  public getItemsByBarcode(Keyword) {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.sql.query('select * from InventoryItems where Barcode = ?', [Keyword])
        .then(res => {
          resolve(res);
        }).catch(err => {
          reject(err);
        });
    });
  }


  /**
   * Create Collections Table If Not Exist In DB.
   * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
   */
  public initItemHistory() {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.sql.query('CREATE TABLE IF NOT EXISTS ItemHistory (InvoiceID int unique, ItemID int, Date nvarchar, Client varchar, InvoiceTotal varchar, Status varchar, Quantity varchar, Price varchar, CurrencyID int, CurrencyName nvarchar, AccID int)').then(data => {
        resolve(data);
      }).catch(err => {
        reject(err);
      });
    });
  }


  /**
   * Perform an arbitrary SQL Insert Or Replace Opration
   * on ItemHistory
   * @param {array} element the array to use by query for tables columns value
   * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
   */
  public setItemHistory(element) {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.sql.query('insert or replace into ItemHistory (InvoiceID, ItemID, Date, Client, InvoiceTotal, Status, Quantity, Price, CurrencyID, CurrencyName, AccId) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [element.InvoiceID, element.ItemID, element.Date, element.Client, element.InvoiceTotal, element.Status, element.Quantity, element.Price, element.CurrencyID, element.CurrencyName, element.AccId])
        .then(res => {
          resolve(res);
        }).catch(err => {
          reject(err);
        });

    });
  }

  /**
   * Perform an arbitrary SQL Select Opration
   * on ItemHistory Table
   * @param {array} element the array to use by query for tables columns value
   * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
   */
  public getItemHistory(id, status, offset) {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.sql.query('select * from ItemHistory where ItemID = ? AND Status = ? Limit ?, 10', [id, status, offset])
        .then(res => {
          resolve(res);
        }).catch(err => {
          reject(err);
        });
    });
  }

   /**
   * Create SalesOrder Table If Not Exist In DB.
   * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
   */
  public initSalesOrder() {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.sql.query('CREATE TABLE IF NOT EXISTS SalesOrder (VoucherID int unique, AccID int, InertvalID int, CompanyID int, VoucherType int, ArAccount nvarchar, EnAccount nvarchar, Note nvarchar, Status varchar, EntryBy nvarchar, Amount nvarchar, Date varchar, Item varchar, Header varchar, EnglishStatus nvarchar, SupervisorId int, EmployeeId int, TotalPreDiscount float, UploadStatusID int)').then(data => {
        resolve(data);
      }).catch(err => {
        reject(err);
      });
    });
  }


  /**
   * Perform an arbitrary SQL Insert Or Replace Opration
   * on SalesOrder
   * @param {array} element the array to use by query for tables columns value
   * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
   */
  public setSalesOrder(element) {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.sql.query('insert or replace into SalesOrder (VoucherID, AccID, InertvalID, CompanyID, VoucherType, ArAccount, EnAccount, Note, Status, EntryBy, Amount, Date, Item, Header, EnglishStatus, SupervisorId, EmployeeId, TotalPreDiscount, UploadStatusID) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [element.VoucherID, element.AccID, element.InertvalID, element.CompanyID, element.VoucherType, element.ArAccount, element.EnAccount, element.Note, element.Status, element.EntryBy, element.Amount, element.Date, JSON.stringify(element.Item), JSON.stringify(element.Header), element.EnglishStatus, element.SupervisorId, element.EmployeeId, element.TotalPreDiscount, element.UploadStatusID])
        .then(res => {
          resolve(res);
        }).catch(err => {
          reject(err);
        });

    });
  }

  /**
   * Perform an arbitrary SQL Update Opration
   * on SalesOrder
   * @param {array} element the array to use by query for tables columns value
   * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
   */
  public updateSalesOrder(element) {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.sql.query('UPDATE SalesOrder SET AccID = ?, InertvalID = ?, CompanyID = ?, VoucherType = ?, ArAccount = ?, EnAccount = ?, Note = ?, Status = ?, EntryBy = ?, Amount = ?, Date = ?, Item = ?, Header = ?, EnglishStatus = ?, SupervisorId = ?, EmployeeId = ?, TotalPreDiscount = ?, UploadStatusID = ? WHERE VoucherID = ?', [element.AccID, element.InertvalID, element.CompanyID, element.VoucherType, element.ArAccount, element.EnAccount, element.Note, element.Status, element.EntryBy, element.Amount, element.Date, JSON.stringify(element.Item), JSON.stringify(element.Header), element.EnglishStatus, element.SupervisorId, element.EmployeeId, element.TotalPreDiscount, element.UploadStatusID, element.VoucherID])
        .then(res => {
          resolve(res);
        }).catch(err => {
          reject(err);
        });

    });
  }

  /**
   * Perform an arbitrary SQL Select Opration
   * on SalesOrder Table
   * @param {array} element the array to use by query for tables columns value
   * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
   */
  public getSalesOrder(offset, condition) {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.sql.query('select * from SalesOrder Where ' + condition + 'Order By VoucherID DESC Limit ?, 10', [offset])
        .then(res => {
          resolve(res);
        }).catch(err => {
          reject(err);
        });
    });
  }


  public getSalesOrderBySearchKeyword(condition) {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.sql.query('select * from SalesOrder Where ' + condition)
        .then(res => {
          resolve(res);
        }).catch(err => {
          reject(err);
        });
    });
  }


  /**
   * Create Currency Table If Not Exist In DB.
   * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
   */
  public initClientList() {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.sql.query('CREATE TABLE  ClientList (AccID int unique, EmployeeID int, SupervisorID int, ArName nvarchar, EnName nvarchar, VatNo varchar, VatAccID int, PhoneNumber varchar, Email varchar, CityId int, CityName varchar, Address varchar, FaxNumber varchar, SortID int, Website varchar, TotalBalance int, CurrencyID int, CurrencyName varchar, SpecialPrice varchar, Balance varchar, UnPaid varchar, History varchar, GeneralPriceListID int)').then(data => {
        resolve(data);
      }).catch(err => {
        reject(err);
      });
    });
  }

  /**
   * Create ClientSort Table If Not Exist In DB.
   * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
   */
  public initClientSort() {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.sql.query('CREATE TABLE IF NOT EXISTS ClientSort (SortID int unique, CompanyID int, ArName nvarchar, EnName varchar, ReadOnly int)').then(data => {
        resolve(data);
      }).catch(err => {
        reject(err);
      });
    });
  }

  /**
   * Create ClientSort Table If Not Exist In DB.
   * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
   */
  public initClientBalance() {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.sql.query('CREATE TABLE IF NOT EXISTS ClientBalance (RV_ID int, CompanyID int, IntervalID int, AccID int, StatusID int, RV_Date varchar, RV_Details varchar, Post_Date varchar, Post_Time varchar, Post_User varchar, RecordAddBy varchar, RecordDateEntry varchar, Debit varchar, Credit varchar, VoucherTypeID int, CurrencyID int, Invoice_ID int, InvoiceType_ID int, ArInvoiceType nvarchar, EnInvoiceType varchar, Balance varchar, TheRate varchar, Equal_Debit varchar, Equal_Credit varchar, CurrencyEnName varchar, ArVoucherType nvarchar, DetailsID int, MasterAccID int, DetailsComment varchar, EmployeeID int, Amount varchar)').then(data => {
        resolve(data);
      }).catch(err => {
        reject(err);
      });
    });
  }

  /**
   * Perform an arbitrary SQL Insert Or Replace Opration
   * on ClientList
   * @param {array} element the array to use by query for tables columns value
   * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
   */
  public setClientList(element) {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.sql.query('insert or replace into ClientList (AccID, EmployeeID, SupervisorID, ArName, EnName, VatNo, VatAccID, PhoneNumber, Email, CityId, CityName, Address, FaxNumber, SortID, Website, TotalBalance, CurrencyID, CurrencyName, SpecialPrice, Balance, UnPaid, History, GeneralPriceListID) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [element.AccID, element.EmployeeID, element.SupervisorID, element.ArName, element.EnName, element.VatNo, element.VatAccID, element.PhoneNumber, element.Email, element.CityId, element.CityName, element.Address, element.FaxNumber, element.SortID, element.Website, element.TotalBalance, element.CurrencyID, element.CurrencyName, JSON.stringify(element.SpecialPrice), JSON.stringify(element.Balance), JSON.stringify(element.UnPaid), JSON.stringify(element.History), element.GeneralPriceListID])
        .then(res => {
          resolve(res);
        }).catch(err => {
          reject(err);
        });

    });
  }

  /**
   * Perform an arbitrary SQL Update Opration
   * on ClientList
   * @param {array} element the array to use by query for tables columns value
   * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
   */
  public updateClientList(element) {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.sql.query('Update ClientList SET EmployeeID = ?, SupervisorID = ?, ArName = ?, EnName = ?, VatNo = ?, VatAccID = ?, PhoneNumber = ?, Email = ?, CityId = ?, CityName = ?, Address = ?, FaxNumber = ?, SortID = ?, Website = ?, TotalBalance = ?, CurrencyID = ?, CurrencyName = ?, SpecialPrice = ?, Balance = ?, UnPaid = ?, History = ?, GeneralPriceListID = ? WHERE AccID = ?', [element.EmployeeID, element.SupervisorID, element.ArName, element.EnName, element.VatNo, element.VatAccID, element.PhoneNumber, element.Email, element.CityId, element.CityName, element.Address, element.FaxNumber, element.SortID, element.Website, element.TotalBalance, element.CurrencyID, element.CurrencyName, JSON.stringify(element.SpecialPrice), JSON.stringify(element.Balance), JSON.stringify(element.UnPaid), JSON.stringify(element.History), element.AccID, element.GeneralPriceListID])
        .then(res => {
          resolve(res);
        }).catch(err => {
          reject(err);
        });

    });
  }

  /**
   * Perform an arbitrary SQL Insert Or Replace Opration
   * on ClientSort
   * @param {array} element the array to use by query for tables columns value
   * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
   */
  public setClientSort(element) {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.sql.query('insert or replace into ClientSort (SortID, CompanyID, ArName, EnName, ReadOnly) values (?, ?, ?, ?, ?)', [element.SortID, element.CompanyID, element.ArName, element.EnName, element.ReadOnly])
        .then(res => {
          resolve(res);
        }).catch(err => {
          reject(err);
        });

    });
  }


  /**
   * Perform an arbitrary SQL Insert Or Replace Opration
   * on ClientBalance
   * @param {array} element the array to use by query for tables columns value
   * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
   */
  public setClientBalance(element) {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.sql.query('insert or replace into ClientBalance (RV_ID, CompanyID, IntervalID, AccID, StatusID, RV_Date, RV_Details, Post_Date, Post_Time, Post_User, RecordAddBy, RecordDateEntry, Debit, Credit, VoucherTypeID, CurrencyID, Invoice_ID, InvoiceType_ID, ArInvoiceType, EnInvoiceType, Balance, TheRate, Equal_Debit, Equal_Credit, CurrencyEnName, ArVoucherType, DetailsID, MasterAccID, DetailsComment, EmployeeID, Amount) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [element.RV_ID, element.CompanyID, element.IntervalID, element.AccID, element.StatusID, element.RV_Date, element.RV_Details, element.Post_Date, element.Post_Time, element.Post_User, element.RecordAddBy, element.RecordDateEntry, element.Debit, element.Credit, element.VoucherTypeID, element.CurrencyID, element.Invoice_ID, element.InvoiceType_ID, element.ArInvoiceType, element.EnInvoiceType, element.Balance, element.TheRate, element.Equal_Debit, element.Equal_Credit, element.CurrencyEnName, element.ArVoucherType, element.DetailsID, element.MasterAccID, element.DetailsComment, element.EmployeeID, element.Amount])
        .then(res => {
          resolve(res);
        }).catch(err => {
          reject(err);
        });

    });
  }


  /**
   * Perform an arbitrary SQL Select Opration
   * on SalesOrder Table
   * @param {array} element the array to use by query for tables columns value
   * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
   */
  public getClientList(offset, condition) {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.sql.query('select * from ClientList Where ' + condition + ' ORDER BY AccID DESC Limit ?, 10 ', [offset])
        .then(res => {
          resolve(res);
        }).catch(err => {
          reject(err);
        });
    });
  }


  /**
   * Perform an arbitrary SQL Select Opration
   * on Inventory Table
   * @param {array} element the array to use by query for tables columns value
   * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
   */
  public getClientListBySearchKeyword(Keyword) {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.sql.query('select * from ClientList where ArName LIKE ?', [Keyword])
        .then(res => {
          resolve(res);
        }).catch(err => {
          reject(err);
        });
    });
  }

  /**
   * Perform an arbitrary SQL Select Opration
   * on ClientSort Table
   * @param {array} element the array to use by query for tables columns value
   * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
   */
  public getClientSort(id) {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.sql.query('select * from ClientSort where SortID = ?', [id])
        .then(res => {
          resolve(res);
        }).catch(err => {
          reject(err);
        });
    });
  }


   /**
   * Perform an arbitrary SQL Select Opration
   * on ClientSort Table
   * @param {array} element the array to use by query for tables columns value
   * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
   */
  public getAllClientSort() {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.sql.query('select * from ClientSort ')
        .then(res => {
          resolve(res);
        }).catch(err => {
          reject(err);
        });
    });
  }


   /**
   * Perform an arbitrary SQL Select Opration
   * on ClientBalance Table
   * @param {array} element the array to use by query for tables columns value
   * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
   */
  public getClientBalance(id) {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.sql.query('select * from ClientBalance WHERE AccID = ?', [id])
        .then(res => {
          resolve(res);
        }).catch(err => {
          reject(err);
        });
    });
  }

  /**
   * Create Sort Table If Not Exist In DB.
   * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
   */
  public initSort() {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.sql.query('CREATE TABLE IF NOT EXISTS Sort (SortID int unique, CompanyID int, ArName nvarchar, EnName nvarchar, ReadOnly boolean)').then(data => {
        resolve(data);
      }).catch(err => {
        reject(err);
      });
    });
  }


  /**
   * Perform an arbitrary SQL Insert Or Replace Opration
   * on User Currency
   * @param {array} element the array to use by query for tables columns value
   * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
   */
  public setSort(element) {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.sql.query('insert or replace into Sort(SortID, CompanyID, ArName, EnName, ReadOnly) values (?, ?, ?, ?, ?)', [element.SortID, element.CompanyID, element.ArName, element.EnName, element.ReadOnly])
        .then(res => {
          resolve(res);
        }).catch(err => {
          reject(err);
        });
    });
  }

  /**
   * Perform an arbitrary SQL Select Opration
   * on Sort Table
   * @param {array} element the array to use by query for tables columns value
   * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
   */
  public getSortData() {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.sql.query('select * from Sort where SortID <> ? And CompanyID = ?', [undefined, 1])
        .then(res => {
          resolve(res);
        }).catch(err => {
          reject(err);
        });
    });
  }

  /**
   * Perform an arbitrary SQL Select Opration
   * on Sort Table
   * @param {array} element the array to use by query for tables columns value
   * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
   */
  public getSortDataBySearchKeyword(Keyword) {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.sql.query('select * from Sort where ArName LIKE ?', [Keyword])
        .then(res => {
          resolve(res);
        }).catch(err => {
          reject(err);
        });
    });
  }

  /**
   * Create Currency Table If Not Exist In DB.
   * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
   */
  public initInvoicesList() {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.sql.query('CREATE TABLE IF NOT EXISTS InvoicesList (Id int unique, VoucherDate nvarchar, ClientDetail nvarchar, Item varchar, StatusName varchar, StatusID int, Amount varchar, CurrencyName varchar, SupervisorID int, EmployeeID int)').then(data => {
        resolve(data);
      }).catch(err => {
        reject(err);
      });
    });
  }

  /**
   * Perform an arbitrary SQL Insert Or Replace Opration
   * on InvoicesList
   * @param {array} element the array to use by query for tables columns value
   * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
   */
  public setInvoicesList(element) {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.sql.query('insert or replace into InvoicesList (Id, VoucherDate, ClientDetail, Item, StatusName, StatusID, Amount, CurrencyName, SupervisorID, EmployeeID) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [element.Id, element.VoucherDate, JSON.stringify(element.ClientDetail), JSON.stringify(element.Item), element.StatusName, element.StatusID, element.Amount, element.CurrencyName, element.SupervisorID, element.EmployeeID])
        .then(res => {
          resolve(res);
        }).catch(err => {
          reject(err);
        });

    });
  }

  /**
   * Perform an arbitrary SQL Update Opration
   * on InvoicesList
   * @param {array} element the array to use by query for tables columns value
   * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
   */
  public updateInvoicesList(element) {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.sql.query('UPDATE InvoicesList SET VoucherDate = ?, ClientDetail = ?, Item = ?, StatusName = ?, StatusID = ?, Amount = ?, CurrencyName = ? Where Id = ?', [element.VoucherDate, JSON.stringify(element.ClientDetail), JSON.stringify(element.Item), element.StatusName, element.StatusID, element.Amount, element.CurrencyName, element.Id])
        .then(res => {
          resolve(res);
        }).catch(err => {
          reject(err);
        });

    });
  }

  /**
   * Perform an arbitrary SQL Select Opration
   * on SalesOrder Table
   * @param {array} element the array to use by query for tables columns value
   * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
   */
  public getInvoicesList(offset, condition) {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.sql.query('select * from InvoicesList Where ' + condition + ' Limit ?, 10', [offset])
        .then(res => {
          resolve(res);
        }).catch(err => {
          reject(err);
        });
    });
  }

   /**
   * Perform an arbitrary SQL Select Opration
   * on SalesOrder Table
   * @param {array} element the array to use by query for tables columns value
   * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
   */
  public getInvoicesById(id) {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.sql.query('select * from InvoicesList Where id = ?', [id])
        .then(res => {
          resolve(res);
        }).catch(err => {
          reject(err);
        });
    });
  }

  /**
   * Create Collections Table If Not Exist In DB.
   * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
   */
  public initCollectionsList() {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.sql.query('CREATE TABLE IF NOT EXISTS Collections (RV_ID int unique, EmployeeID int, SupervisorId int, CompanyID int, IntervalID int, RV_Details varchar, CurrencyID int, ClientID int, PaymentOption varchar, VoucherID int, StatusId int, RV_Date varchar, RV_Amount varchar, RV_Equal_Amount varchar, EntryBy varchar, CreatedOn varchar, TheRate int, Note varchar, PostDate varchar, Cash varchar, Cheque varchar, CurrencyName varchar, StatusName varchar)').then(data => {
        resolve(data);
      }).catch(err => {
        reject(err);
      });
    });
  }

  /**
   * Perform an arbitrary SQL Insert Or Replace Opration
   * on Collections
   * @param {array} element the array to use by query for tables columns value
   * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
   */
  public setCollectionsList(element) {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.sql.query('insert or replace into Collections (RV_ID, EmployeeID, SupervisorId, CompanyID, IntervalID, RV_Details, CurrencyID, ClientID, PaymentOption, VoucherID, StatusId, RV_Date, RV_Amount, RV_Equal_Amount, EntryBy, CreatedOn, TheRate, Note, PostDate, Cash, Cheque, CurrencyName, StatusName) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [element.RV_ID, element.EmployeeID, element.SupervisorId, element.CompanyID, element.IntervalID, element.RV_Details, element.CurrencyID, element.ClientID, element.PaymentOption, element.VoucherID, element.StatusId, element.RV_Date, element.RV_Amount, element.RV_Equal_Amount, element.EntryBy, element.CreatedOn, element.TheRate, element.Note, element.PostDate, JSON.stringify(element.Cash), JSON.stringify(element.Cheque), element.CurrencyName, element.StatusName])
        .then(res => {
          resolve(res);
        }).catch(err => {
          reject(err);
        });

    });
  }


  /**
   * Perform an arbitrary SQL Update Opration
   * on Collections
   * @param {array} element the array to use by query for tables columns value
   * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
   */
  public updateCollectionsList(element) {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.sql.query('UPDATE Collections SET EmployeeID = ?, SupervisorId = ?, CompanyID = ?, IntervalID = ?, RV_Details = ?, CurrencyID = ?, ClientID = ?, PaymentOption = ?, VoucherID = ?, StatusId = ?, RV_Date = ?, RV_Amount = ?, RV_Equal_Amount = ?, EntryBy = ?, CreatedOn = ?, TheRate = ?, Note = ?, PostDate = ?, Cash = ?, Cheque = ?, CurrencyName = ?, StatusName = ? WHERE RV_ID = ?', [element.EmployeeID, element.SupervisorId, element.CompanyID, element.IntervalID, element.RV_Details, element.CurrencyID, element.ClientID, element.PaymentOption, element.VoucherID, element.StatusId, element.RV_Date, element.RV_Amount, element.RV_Equal_Amount, element.EntryBy, element.CreatedOn, element.TheRate, element.Note, element.PostDate, JSON.stringify(element.Cash), JSON.stringify(element.Cheque), element.CurrencyName, element.StatusName, element.RV_ID])
        .then(res => {
          resolve(res);
        }).catch(err => {
          reject(err);
        });

    });
  }

  /**
   * Perform an arbitrary SQL Select Opration
   * on SalesOrder Table
   * @param {array} element the array to use by query for tables columns value
   * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
   */
  public getCollectionsList(offset, condition) {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.sql.query('SELECT *, c.ArName as ClientName FROM Collections LEFT Join ClientList c ON Collections.ClientID = c.AccID Where ' + condition + ' ORDER BY RV_ID DESC Limit ?, 10', [offset])
        .then(res => {
          resolve(res);
        }).catch(err => {
          reject(err);
        });
    });
  }

   /**
   * Create ClientSort Table If Not Exist In DB.
   * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
   */
  public initBank() {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.sql.query('CREATE TABLE IF NOT EXISTS Bank (Branch_Code int, Arabic_Bank nvarchar, English_Bank nvarchar, BranchCode varchar)').then(data => {
        resolve(data);
      }).catch(err => {
        reject(err);
      });
    });
  }

  /**
   * Perform an arbitrary SQL Insert Or Replace Opration
   * on Bank
   * @param {array} element the array to use by query for tables columns value
   * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
   */
  public setBank(element) {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.sql.query('insert or replace into Bank (Branch_Code, Arabic_Bank, English_Bank, BranchCode) values (?, ?, ?, ?)', [element.Branch_Code, element.Arabic_Bank, element.English_Bank, element.BranchCode])
        .then(res => {
          resolve(res);
        }).catch(err => {
          reject(err);
        });

    });
  }

  /**
   * Perform an arbitrary SQL Select Opration
   * on Bank Table
   * @param {array} element the array to use by query for tables columns value
   * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
   */
  public getBank(offset) {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.sql.query('select * from Bank Limit ?, 10', [offset])
        .then(res => {
          resolve(res);
        }).catch(err => {
          reject(err);
        });
    });
  }

  /**
   * Perform an arbitrary SQL Select Opration with keyword
   * on Bank Table
   * @param {array} element the array to use by query for tables columns value
   * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
   */
  public getBankListBySearchKeyword(keyword) {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.sql.query('select * from Bank where Arabic_Bank LIKE ? OR English_Bank LIKE ? OR Branch_Code LIKE ?', [keyword, keyword, keyword])
        .then(res => {
          resolve(res);
        }).catch(err => {
          reject(err);
        });
    });
  }


  /**
   * Create SpecialPrice Table If Not Exist In DB.
   * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
   */
  public initSpecialPrice() {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.sql.query('CREATE TABLE IF NOT EXISTS SpecialPrice (GeneralPriceList_DetailsID int, GeneralPriceListID int, GeneralName varchar, CompanyID int, ItemID int, Amount int, Note varchar, ItemArName nvarchar, ItemEnName nvarchar)').then(data => {
        resolve(data);
      }).catch(err => {
        reject(err);
      });
    });
  }

  /**
   * Perform an arbitrary SQL Insert Or Replace Opration
   * on SpecialPrice
   * @param {array} element the array to use by query for tables columns value
   * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
   */
  public setSpecialPrice(element) {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.sql.query('insert or replace into SpecialPrice (GeneralPriceList_DetailsID, GeneralPriceListID, GeneralName, CompanyID, ItemID, Amount, Note, ItemArName, ItemEnName) values (?, ?, ?, ?, ?, ?, ?, ?, ?)', [element.GeneralPriceList_DetailsID, element.GeneralPriceListID, element.GeneralName, element.CompanyID, element.ItemID, element.Amount, element.Note, element.ItemArName, element.ItemEnName])
        .then(res => {
          resolve(res);
        }).catch(err => {
          reject(err);
        });

    });
  }

  /**
   * Perform an arbitrary SQL Select Opration with GeneralPriceListID
   * on SpecialPrice Table
   * @param {array} element the array to use by query for tables columns value
   * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
   */
  public getSpecialPriceByAccID(AccID) {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.sql.query('SELECT ClientList.AccID, ClientList.GeneralPriceListID, SpecialPrice.* FROM ClientList JOIN SpecialPrice ON ClientList.GeneralPriceListID = SpecialPrice.GeneralPriceListID Where ClientList.AccID = ?', [AccID])
        .then(res => {
          resolve(res);
        }).catch(err => {
          reject(err);
        });
    });
  }


  /**
   * Perform an arbitrary SQL Insert Or Replace Opration
   * on Inventory
   * @param {array} element the array to use by query for tables columns value
   * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
   */
  public setInventory(element) {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.sql.query('insert or replace into Inventory(ItemID, CompanyID, ItemIDForUser, ItemArName, ItemEnName, Barcode, SortID, ItemClassID, WarehouseID, LocationID, CatalogNo, PartNo, AccFamilyID, VendorAccID, UnitID, Cost, PriceLevelID, PriceLevel_Price, GeneralDiscount, CustomizeDiscountID, MinimumStock, ReorderQTY, HaveExpireDate, Filter0, Filter1, Filter2, Filter3, Filter4, Filter5, Filter6, Filter7, Note, IsActive, Comment, PrimaryAttribute, SecondaryAttribute, IsSubItem, LevelID,IsParentItem, ParentItemID, ItemAttribute1ID, ItemAttribute2ID, ItemBillMaterialID, QuantityOnHand, PrintComponentsOnInvoice, Weight, Volume, Is_POS_Item, ItemImage, IsAutoSerial, FullAutoSerialNo, FirstSerialNo, NextSerialNo, LastSerialNo, IsScaleBarcode, MeterInBox, IsLength, IsWidth, IsDepth, IsQuantity, ImagePath, RecordAddBy, RecordUpdateBy, RecordNote, RecordDeleted, RecordDateEntry) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [element.ItemID, element.CompanyID, element.ItemIDForUser, element.ItemArName, element.ItemEnName, element.Barcode, element.SortID, element.ItemClassID, element.WarehouseID, element.LocationID, element.CatalogNo, element.PartNo, element.AccFamilyID, element.VendorAccID, element.UnitID, element.Cost, element.PriceLevelID, element.PriceLevel_Price, element.GeneralDiscount, element.CustomizeDiscountID, element.MinimumStock, element.ReorderQTY, element.HaveExpireDate, element.Filter0, element.Filter1, element.Filter2, element.Filter3, element.Filter4, element.Filter5, element.Filter6, element.Filter7, element.Note, element.IsActive, element.Comment, element.PrimaryAttribute, element.SecondaryAttribute, element.IsSubItem, element.LevelID, element.IsParentItem, element.ParentItemID, element.ItemAttribute1ID, element.ItemAttribute2ID, element.ItemBillMaterialID, element.QuantityOnHand, element.PrintComponentsOnInvoice, element.Weight, element.Volume, element.Is_POS_Item, element.ItemImage, element.IsAutoSerial, element.FullAutoSerialNo, element.FirstSerialNo, element.NextSerialNo, element.LastSerialNo, element.IsScaleBarcode, element.MeterInBox, element.IsLength, element.IsWidth, element.IsDepth, element.IsQuantity, element.ImagePath, element.RecordAddBy, element.RecordUpdateBy, element.RecordNote, element.RecordDeleted, element.RecordDateEntry])
        .then(res => {
          resolve(res);
        }).catch(err => {
          reject(err);
        });

    });
  }


  /**
   * Perform an arbitrary SQL Select Opration with keyword
   * on Bank Table
   * @param {array} element the array to use by query for tables columns value
   * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
   */
  public getSalesSummary(condition) {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.sql.query('SELECT COUNT(VoucherID) AS orders, SUM(Amount) AS total FROM SalesOrder Where ' + condition)
        .then(res => {
          resolve(res);
        }).catch(err => {
          reject(err);
        });
    });
  }

   /**
   * Perform an arbitrary SQL Select Opration
   * on SalesOrder Table
   * @param {array} element the array to use by query for tables columns value
   * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
   */
  public getInvoicesSummary(condition) {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.sql.query('SELECT COUNT(Id) AS orders, SUM(Amount) AS total FROM InvoicesList Where ' + condition)
        .then(res => {
          resolve(res);
        }).catch(err => {
          reject(err);
        });
    });
  }


   /**
   * Perform an arbitrary SQL Select Opration
   * on SalesOrder Table
   * @param {array} element the array to use by query for tables columns value
   * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
   */
  public getCollectionsSummary(condition) {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.sql.query('SELECT COUNT(RV_ID) AS orders, SUM(RV_Amount) AS total, SUM(RV_Equal_Amount) AS equal_total FROM Collections Where ' + condition)
        .then(res => {
          resolve(res);
        }).catch(err => {
          reject(err);
        });
    });
  }

  /**
   * Perform an arbitrary SQL Select Opration
   * on SalesOrder Table
   * @param {array} element the array to use by query for tables columns value
   * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
   */
  public getClientListSummary(condition) {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.sql.query('SELECT SUM(TotalBalance) as total, Count(TotalBalance) as orders FROM ClientList Where ' + condition)
        .then(res => {
          resolve(res);
        }).catch(err => {
          reject(err);
        });
    });
  }

}

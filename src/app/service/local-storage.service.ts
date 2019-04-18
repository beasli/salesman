import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  JsonData: any;

  constructor() { }

  /**
   * Create Lookup Storage in local
   */
  public setLookup(lookup) {
    return new Promise((resolve, reject) => {
      localStorage.setItem('Lookup', JSON.stringify(lookup));
       resolve(true);
    });
  }

   /**
   * Create Company Storage in local
   */
  public setCompany(lookup) {
    return new Promise((resolve, reject) => {
      localStorage.setItem('Company', JSON.stringify(lookup));
       resolve(true);
    });
  }


   /**
   * Create Role Storage in local
   */
  public setRole(lookup) {
    return new Promise((resolve, reject) => {
      localStorage.setItem('Role', JSON.stringify(lookup));
       resolve(true);
    });
  }

   /**
   * Create User Storage in local
   */
  public setUser(lookup) {
    return new Promise((resolve, reject) => {
      localStorage.setItem('User', JSON.stringify(lookup));
       resolve(true);
    });
  }

   /**
   * Create Currency Storage in local
   */
  public setCurrency(lookup) {
    return new Promise((resolve, reject) => {
      localStorage.setItem('Currency', JSON.stringify(lookup));
       resolve(true);
    });
  }

   /**
   * Create Inventory Storage in local
   */
  public setInventory(lookup) {
    return new Promise((resolve, reject) => {
      localStorage.setItem('Inventory', JSON.stringify(lookup));
       resolve(true);
    });
  }

   /**
   * Create Sort Storage in local
   */
  public setSort(lookup) {
    return new Promise((resolve, reject) => {
      localStorage.setItem('Sort', JSON.stringify(lookup));
       resolve(true);
    });
  }

  /**
   * Create Warehouse Storage in local
   */
  public setWarehouse(lookup) {
    return new Promise((resolve, reject) => {
      localStorage.setItem('Warehouse', JSON.stringify(lookup));
       resolve(true);
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
     this.JsonData = JSON.parse(localStorage.getItem('User'));
     const res: any = this.JsonData.find(x =>  x.UserName === element.UserName);
    if (res) {
      if (res.Password === element.Password) {
        resolve(res);
      } else {
        reject({msg : 'Password is incorrect.'});
      }
    } else {
      reject({msg : 'Username is incorrect.'});
    }
    });
  }

  /**
   * Perform an arbitrary SQL Select Opration
   * on User Table
   * @param {array} element the array to use by query for tables columns value
   * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
   */
  public addUser(element) {
    return new Promise((resolve, reject) => {
     this.JsonData = JSON.parse(localStorage.getItem('User'));
     const res: any = this.JsonData.findIndex(x =>  x.Id === element.ID);
    if (res) {
        resolve(res);
    } else {
      reject({msg : 'User not found'});
    }
    });
  }

   /**
   * Perform an arbitrary SQL Select Opration
   * on User Table
   * @param {array} element the array to use by query for tables columns value
   * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
   */
  public getSortData() {
    return new Promise((resolve, reject) => {
     this.JsonData = JSON.parse(localStorage.getItem('Sort'));
     const res: any = this.JsonData;
    if (res) {
        resolve(res);
    } else {
      reject({msg : 'Data Not Available'});
    }
    });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { Events } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class DataService {

   // apiUrl = 'http://0b3de5a1.ngrok.io';
   // apiUrl = 'http://erpmain-001-site1.ftempurl.com';
   apiUrl: any;
   networkStatus: any = 'Disconnected';

    constructor(
        public http: HttpClient,
        public events: Events
    ) {
        console.log('Hello Api DataService ');
        this.apiUrl = localStorage.getItem('apiUrl');
        this.events.subscribe('ApiUrl:Updated', (user, time) => {
            // user and time are the same arguments passed in `events.publish(user, time)`
            this.apiUrl = localStorage.getItem('apiUrl');
          });
    }

    public getInventryItem() {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl + '/Api/InventryItem/ItemList')
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    public getLookup() {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl + '/Api/Lookup/GetAll')
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    public getCompany(id) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl + '/Api/Company/GetCompany?id=' + id)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    public getUsers() {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl + '/Api/User/GetAll')
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    public getRoles() {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl + '/Api/Role/GetAll')
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    public getCurrency() {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl + '/Api/Currency/GetAll')
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    public getInventory() {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl + '/Api/InventryItem/ItemList')
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    public getSort(id) {
        return new Promise((resolve, reject) => {
            // this.http.get(this.apiUrl + '/Api/Sort/GetAll?companyId=' + id)
            this.http.get(this.apiUrl + '/Api/InventryItem/CountItem?companyId=1&intervalId=2017&itemClassId=1&pageNumber=1&pageSize=10')
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    InventryItem() {
        return new Promise((resolve, reject) => {
            // tslint:disable-next-line:max-line-length
            this.http.post(this.apiUrl +
                '/Api/InventryItem/catelogList?companyId=1&intervalId=2017&itemClassId=1&pageNumber=1&pageSize=5000',
            { headers: { 'Content-Type': 'application/json' } })
                .subscribe(res => {
                   console.log(res);
                   resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    getData(): Observable<any> {

        const response = [];
        let response1: any;
        let i = 1;
        while ( i < 9) {
             response1 = this.http
            .post(this.apiUrl + '/Api/InventryItem/catelogList?companyId=1&intervalId=2017&itemClassId=1&pageNumber=' + i + '&pageSize=500',
            { headers: { 'Content-Type': 'application/json' }
            });
            response.push(response1);
            console.log(response1);
            i++;
        }

        return forkJoin(response);
      }

    public getSalesOrder() {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl + '/Api/SaleOrder/GetAllByCompany?companyId=1&voucherTypeId=7&statusId=2')
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    public getClientList() {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl + '/Api/ACC_Account/ClientList?CompanyID=1&pageNumber=1&pageSize=100')
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    public getInvoicesList() {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl + '/Api/Invoice/GetList?CompanyId=1&voucherTypeId=9&StatusId=2&pageNumber=1&PageSize=100')
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    public uploadSalesOrder(data) {
        return new Promise((resolve, reject) => {
            this.http.post(this.apiUrl + '/Api/SaleOrder/Create', JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } })
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    public getCollectionsList() {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl + '/Api/Collection/getall?companyId=1&statusId=1')
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }


    public uploadCollections(data) {
        return new Promise((resolve, reject) => {
            this.http.post(
                this.apiUrl + '/Api/Collection/create',
                JSON.stringify(data),
                { headers: { 'Content-Type': 'application/json' } }
            ).subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    public uploadEvent(data) {
        return new Promise((resolve, reject) => {
            this.http.post(this.apiUrl + '/Api/Event/Create', JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } })
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    public getEvents() {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl + '/Api/Event/GetAll')
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }


    public uploadTask(data) {
        return new Promise((resolve, reject) => {
            this.http.post(this.apiUrl + '/Api/Task/create', JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } })
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }


    public updateTask(data) {
        return new Promise((resolve, reject) => {
            this.http.post(this.apiUrl + '/Api/Task/Update', JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } })
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }


    public getTasks() {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl + '/Api/Task/GetAll')
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    public uploadClient(data) {
        return new Promise((resolve, reject) => {
            this.http.post(
                this.apiUrl + '/Api/ACC_Account/Create',
                JSON.stringify(data),
                { headers: { 'Content-Type': 'application/json' } }
            )
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }


    public getItemHistory() {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl + '/Api/InventryItem/ItemHistory?pageSize=1000&page=1')
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }



    public getClientSort() {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl + '/Api/Sort/GetMasterSort?companyId=1')
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }


    public getClientBalance() {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl + '/Api/ACC_Account/GetBalanceDetail?CompanyId=1&IntervalId=2017&pageNumber=1&pageSize=1000')
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    public getBank() {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl + '/api/bank/getall')
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    public getWarehouse() {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl + '/Api/Warehouse/getall?CompanyID=1')
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    public geturl(uri) {
        return new Promise((resolve, reject) => {
            this.http.get(uri)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    public updateDataViaNotification(data) {
        return new Promise((resolve, reject) => {
            this.http.post(
                this.apiUrl + '/Api/UpdateRecord/GetByID',
                JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } }
            )
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    public getSpecialPrice() {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl + '/Api/ACC_Account/GetSpecialPriceList?companyId=1&pageNumber=1&pageSize=1000')
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

}

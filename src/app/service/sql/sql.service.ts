import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Platform } from '@ionic/angular';

const DB_NAME = '__salesmanStorage.db';
const win: any = window;

@Injectable({
  providedIn: 'root'
})
export class SqlService {

  private _db: any;

  constructor(
    public platform: Platform,
    private sqlite: SQLite
  ) {
      console.log('SQL', 'sql provider initialized');

      if (this.platform.is('cordova')) {
        console.warn('Will open DB on JIT');
      } else {
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
  query(query: string, params: any[] = []): Promise<any> {
    if (this.platform.is('cordova')) {
      return new Promise((resolve, reject) => {
            this.sqlite.create({
              name: DB_NAME,
              location: 'default'
            })
            .then((db: SQLiteObject) => {
              this._db = db;
              console.log('SQL DB Created');
              this._db.executeSql(query, params)
              .then((res) => {
                return resolve({ res: res });
              })
              .catch(err => {
                return reject({ err: err });
              });
            })
          .catch(err => {
            return reject({ err: err });
          });
        });

    } else {
      return new Promise((resolve, reject) => {
        try {
            this._db.transaction((tx: any) => {
                    tx.executeSql(query, params,
                        (txn: any, res: any) => {
                          return resolve({ tx: txn, res: res });
                        },
                        (txn: any, err: any) => {
                          return reject({ tx: txn, err: err });
                        });
                },
                (err: any) => reject({ err: err }));
        } catch (err) {
            reject({ err: err });
        }
      });
    }
  }
}

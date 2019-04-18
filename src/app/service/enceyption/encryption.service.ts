import { Injectable } from '@angular/core';
import { AES256 } from '@ionic-native/aes-256/ngx';

@Injectable({
  providedIn: 'root'
})
export class EncryptionService {

  private secureKey: string;
  private secureIV: string;

  constructor(public aes256: AES256) {
    this.generateSecureKeyAndIV(); // To generate the random secureKey and secureIV
  }

  async generateSecureKeyAndIV() {
    this.secureKey = await this.aes256.generateSecureKey('random password 12345'); // Returns a 32 bytes string
    this.secureIV = await this.aes256.generateSecureIV('random password 12345'); // Returns a 16 bytes string
  }

  encrytPassword(toEncrypt) {
    return new Promise((resolve, reject) => {
      this.aes256.encrypt(this.secureKey, this.secureIV, toEncrypt)
      .then(res =>
        resolve(res)
      )
      .catch((error: any) =>
        reject(error)
      );
    });
  }

  decrytPassword(encrypted) {
    return new Promise((resolve, reject) => {
      this.aes256.decrypt(this.secureKey, this.secureIV, encrypted)
        .then(res =>
          resolve(res)
        )
        .catch((error: any) =>
          reject(error)
        );
    });
  }
}

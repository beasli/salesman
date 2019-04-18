import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Platform, Events } from '@ionic/angular';



@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  url = 'false';
  details: any;

  constructor(
              private router: Router,
              private barcodeScanner: BarcodeScanner,
              private platform: Platform,
              private events: Events
  ) { }

  ngOnInit() {

      if (this.platform.is('cordova')) {
      const data = localStorage.getItem('DataInstalled');
      if (data === 'true') {
         if (localStorage.getItem('Salesman')) {
          this.router.navigate(['/dashboard']);
         } else {
          this.router.navigate(['/salesmanlogin']);
         }
      }
    } else {
      const data = localStorage.getItem('DataInstalled');
      if (data === 'true') {
         if (localStorage.getItem('Salesman')) {
          this.router.navigate(['/dashboard']);
         } else {
          this.router.navigate(['/salesmanlogin']);
         }
      } else {
        localStorage.setItem('apiUrl', 'http://erpmain-001-site1.ftempurl.com');
        this.events.publish('ApiUrl:Updated', 1, Date.now());
        this.initDB();
      }
    }

  }

  openFiles() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
        const data = JSON.parse(barcodeData.text);
        console.log(data);
        this.details = data;
        localStorage.setItem('apiUrl', data.BaseUrl);
        this.events.publish('ApiUrl:Updated', 1, Date.now());
        this.url = 'true';
     }).catch(err => {
         console.log('Error', err);
     });
  }

  initDB() {
    this.router.navigate(['/initializing']);
  }

}

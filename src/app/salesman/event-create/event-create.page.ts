import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/api/data.service';
import { LoadingController, Events } from '@ionic/angular';
import { FakeApiService } from '../../service/fake-api/fake-api.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.page.html',
  styleUrls: ['./event-create.page.scss'],
})
export class EventCreatePage implements OnInit {

  event: any;

  constructor(
    private api: DataService,
    private loadingCtrl: LoadingController,
    private fakeApi: FakeApiService,
    private router: Router,
    private datePipe: DatePipe,
    private events: Events
  ) {
    const current_date = new Date();
    this.event = this.initEvent();
  }

  ngOnInit() {
  }

  initEvent() {
    return {
      Subject: '',
      LocationId: '',
      FromDate: this.formatDate(),
      ToDate: this.formatDate(),
      AllDay: false,
      EventType: 1,
      StatusID: 1,
      ClientID: 3,
      CreatedBy: (localStorage.getItem('Salesman')) ? JSON.parse(localStorage.getItem('Salesman')).AccId : 0,
      CreatedOn: this.formatDate()
    };
  }


  async uploadEvent() {

    if (this.event.Subject === '' || this.event.LocationId === '' || this.event.FromDate === '' || this.event.ToDate === '') {
      alert('Please fill all required fields');
      console.log(this.event);
    } else {
      this.event.CreatedOn = this.formatDate();

      console.log(this.event);

      let tempEvents: any;
      if (!localStorage.getItem('tempEvents')) {
        tempEvents = [];
      } else {
        tempEvents = JSON.parse(localStorage.getItem('tempEvents'));
      }
      tempEvents.push(this.event);
      localStorage.setItem('tempEvents', JSON.stringify(tempEvents));
      this.events.publish('tempEvents:updated', 1, Date.now());
      const data = this.event;
      this.event = this.initEvent();

      alert('Event Created');

      if (this.api.networkStatus === 'Connected') {

        this.api.uploadEvent(data).then((res: any) => {
          console.log(res);
          if (res.ReturnCode === 0) {

            let savedEvents: any;

            if (!localStorage.getItem('savedEvents')) {
              savedEvents = [];
            } else {
              savedEvents = JSON.parse(localStorage.getItem('savedEvents'));
            }
            savedEvents.push(res.Data);
            localStorage.setItem('savedEvents', JSON.stringify(savedEvents));

            const a = JSON.parse(localStorage.getItem('tempEvents'));
            a.shift();
            localStorage.setItem('tempEvents', JSON.stringify(a));

            this.events.publish('savedEvents:updated', 1, Date.now());
            this.events.publish('tempEvents:updated', 1, Date.now());
          }

        }, err => {
          console.log(err);
        });
      } else if (this.api.networkStatus === 'Disconnected') {

      }

    }
  }

  formatDate() {
    const d = new Date();
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();

    const hours = d.getHours();
    const mins = d.getMinutes();

    if (month.length < 2) {
      month = '0' + month;
    }

    if (day.length < 2) {
      day = '0' + day;
    }
    return year + '-' + month + '-' + day + 'T' + hours + ':' + mins + ':00';
  }

}

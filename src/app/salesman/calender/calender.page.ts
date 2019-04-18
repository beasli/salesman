import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/api/data.service';
import { AlertController, Events } from '@ionic/angular';
import { DatePipe } from '@angular/common';



@Component({
    selector: 'app-calender',
    templateUrl: './calender.page.html',
    styleUrls: ['./calender.page.scss'],
})
export class CalenderPage implements OnInit {

    selectedDate = new Date();
    placeholder = this.selectedDate.toLocaleString('en-us', { month: 'long' }) +
        ' ' + this.selectedDate.getDate() +
        ', ' + this.selectedDate.getFullYear();
    // calMonth = new Date().toLocaleString('en-us', { month: 'long' });
    // calYear = new Date().getFullYear();

    events = (localStorage.getItem('savedEvents')) ? JSON.parse(localStorage.getItem('savedEvents')) : [];
    tempEvents = (localStorage.getItem('tempEvents')) ? JSON.parse(localStorage.getItem('tempEvents')) : [];

    eventSource;
    viewTitle;

    isToday = true;
    calendar = {
        mode: 'month',
        currentDate: new Date(),
        dateFormatter: {
            formatMonthViewDay: function (date: Date) {
                return date.getDate().toString();
            },
            formatMonthViewDayHeader: function (date: Date) {
                return 'MonMH';
            },
            formatMonthViewTitle: function (date: Date) {
                return 'testMT';
            },
            formatWeekViewDayHeader: function (date: Date) {
                return 'MonWH';
            },
            formatWeekViewTitle: function (date: Date) {
                return 'testWT';
            },
            formatWeekViewHourColumn: function (date: Date) {
                return 'testWH';
            },
            formatDayViewHourColumn: function (date: Date) {
                return 'testDH';
            },
            formatDayViewTitle: function (date: Date) {
                return 'testDT';
            }
        }
    };

    constructor(
        private api: DataService,
        public alertController: AlertController,
        private datePipe: DatePipe,
        private event: Events
    ) {
        this.event.subscribe('savedEvents:updated', (user, time) => {
            console.log('event Subsriced');
            this.events = (localStorage.getItem('savedEvents')) ? JSON.parse(localStorage.getItem('savedEvents')) : [];
            this.tempEvents = (localStorage.getItem('tempEvents')) ? JSON.parse(localStorage.getItem('tempEvents')) : [];
            this.tempEvents.forEach(element => {
                this.events.push(element);
            });
            this.eventSource = this.loadAllEvents();
          });

        this.event.subscribe('tempEvents:updated', (user, time) => {
            console.log('tempEvents Subsriced');
            this.events = (localStorage.getItem('savedEvents')) ? JSON.parse(localStorage.getItem('savedEvents')) : [];
            this.tempEvents = (localStorage.getItem('tempEvents')) ? JSON.parse(localStorage.getItem('tempEvents')) : [];
            this.tempEvents.forEach(element => {
                this.events.push(element);
            });
            this.eventSource = this.loadAllEvents();
            this.tempEvents = [];
          });
    }

    ionViewDidEnter() {
        this.tempEvents.forEach(element => {
            this.events.push(element);
        });
        console.log(this.events);
        this.eventSource = this.loadAllEvents();
        console.log(this.eventSource);
    }


    ngOnInit() {
    }

    loadEvents() {
        // this.eventSource = this.createRandomEvents();
        // this.eventSource = this.loadAllEvents();
        this.api.getEvents().then((data: any) => {
            if (data.ReturnCode === 0) {
                localStorage.setItem('savedEvents', JSON.stringify(data.Data));
                this.event.publish('savedEvents:updated', 1, Date.now());
                // this.events = data.Data;
                // this.eventSource = this.loadAllEvents();
                // console.log(this.eventSource);
            }
        }).catch(ex => {
            console.log('ex', ex);
        });
    }

    onViewTitleChanged(title) {
        this.viewTitle = title;
    }

    async onEventSelected(event) {
        console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
        // alert(event.title);
        const alert = await this.alertController.create({
            header: event.title,
            // subHeader: 'Subtitle',
            // tslint:disable-next-line:max-line-length
            message: 'From: ' + this.datePipe.transform(event.startTime, 'dd-MM-yyyy hh:mm a') + '<br> To: ' + this.datePipe.transform(event.endTime, 'dd-MM-yyyy hh:mm a'),
            buttons: ['OK']
        });
        await alert.present();
    }


    changeMode(mode) {
        this.calendar.mode = mode;
    }

    today() {
        this.calendar.currentDate = new Date();
    }

    onTimeSelected(ev) {
        console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
            (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
    }

    onCurrentDateChanged(event: Date) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        event.setHours(0, 0, 0, 0);
        this.isToday = today.getTime() === event.getTime();
    }

    onRangeChanged(ev) {
        console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
    }

    markDisabled = (date: Date) => {
        const current = new Date();
        current.setHours(0, 0, 0);
        return date < current;
    }

    nextMonth() {
        const dt = new Date(this.selectedDate);
        dt.setMonth(dt.getMonth());
        this.calendar.currentDate = dt;
    }


    createRandomEvents() {
        const events = [];
        for (let i = 0; i < 50; i += 1) {
            const date = new Date();
            const eventType = Math.floor(Math.random() * 2);
            const startDay = Math.floor(Math.random() * 90) - 45;
            let endDay = Math.floor(Math.random() * 2) + startDay;
            let startTime;
            let endTime;
            if (eventType === 0) {
                startTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + startDay));
                if (endDay === startDay) {
                    endDay += 1;
                }
                endTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + endDay));
                events.push({
                    title: 'All Day - ' + i,
                    startTime: startTime,
                    endTime: endTime,
                    allDay: true
                });
            } else {
                const startMinute = Math.floor(Math.random() * 24 * 60);
                const endMinute = Math.floor(Math.random() * 180) + startMinute;
                startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + startDay, 0, date.getMinutes() + startMinute);
                endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + endDay, 0, date.getMinutes() + endMinute);
                events.push({
                    title: 'Event - ' + i,
                    startTime: startTime,
                    endTime: endTime,
                    allDay: false
                });
            }
        }
        return events;
    }


    loadAllEvents() {
        const events = [];
        for (const e of this.events) {
            const FromDate = new Date(e.FromDate);
            const ToDate = new Date(e.ToDate);
            const eventType = e.AllDay;
            const startDay = Math.floor(Math.random() * 90) - 45;
            let endDay = Math.floor(Math.random() * 2) + startDay;
            let startTime;
            let endTime;


            if (eventType) {
                // startTime = new Date(Date.UTC(FromDate.getUTCFullYear(), FromDate.getUTCMonth(), FromDate.getUTCDate() + startDay));
                startTime = FromDate;
                console.log('startTime', startTime);
                if (endDay === startDay) {
                    endDay += 1;
                }
                // endTime = new Date(Date.UTC(ToDate.getUTCFullYear(), ToDate.getUTCMonth(), ToDate.getUTCDate() + endDay));
                endTime = ToDate;
                events.push({
                    title: e.Subject,
                    startTime: startTime,
                    endTime: endTime,
                    allDay: true
                });
            } else {
                const startMinute = Math.floor(Math.random() * 24 * 60);
                const endMinute = Math.floor(Math.random() * 180) + startMinute;
                startTime = new Date(
                    FromDate.getFullYear(),
                    FromDate.getMonth(),
                    FromDate.getDate(),
                    FromDate.getHours(),
                    FromDate.getMinutes()
                );
                endTime = new Date(
                    ToDate.getFullYear(),
                    ToDate.getMonth(),
                    ToDate.getDate(),
                    ToDate.getHours(),
                    ToDate.getMinutes());

                events.push({
                    title: e.Subject,
                    startTime: startTime,
                    endTime: endTime,
                    allDay: false
                });
            }
        }
        return events;
    }

}

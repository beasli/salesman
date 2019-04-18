var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
var CalenderPage = /** @class */ (function () {
    function CalenderPage() {
        this.selectedDate = new Date();
        this.placeholder = this.selectedDate.toLocaleString('en-us', { month: 'long' }) +
            ' ' + this.selectedDate.getDate() +
            ', ' + this.selectedDate.getFullYear();
        // calMonth = new Date().toLocaleString('en-us', { month: 'long' });
        // calYear = new Date().getFullYear();
        this.events = [
            {
                Id: 1,
                Subject: 'sample string 2',
                LocationId: 1,
                FromDate: '2019-03-08T10:17:38.107',
                ToDate: '2019-03-12T10:17:38.107',
                AllDay: true,
                EventType: 1,
                StatusID: 1,
                ClientID: 1,
                CreatedBy: 1,
                CreatedOn: '2019-03-06T10:17:38.107'
            },
            {
                Id: 2,
                Subject: 'sample string 3',
                LocationId: 1,
                FromDate: '2019-03-07T10:17:38.107',
                ToDate: '2019-03-07T23:17:38.107',
                AllDay: false,
                EventType: 1,
                StatusID: 1,
                ClientID: 1,
                CreatedBy: 1,
                CreatedOn: '2019-03-07T10:17:38.107'
            }
        ];
        this.calendar = {
            mode: 'week',
            currentDate: new Date(),
            dateFormatter: {
                formatMonthViewDay: function (date) {
                    return date.getDate().toString();
                },
                formatMonthViewDayHeader: function (date) {
                    return 'MonMH';
                },
                formatMonthViewTitle: function (date) {
                    return 'testMT';
                },
                formatWeekViewDayHeader: function (date) {
                    return 'MonWH';
                },
                formatWeekViewTitle: function (date) {
                    return 'testWT';
                },
                formatWeekViewHourColumn: function (date) {
                    return 'testWH';
                },
                formatDayViewHourColumn: function (date) {
                    return 'testDH';
                },
                formatDayViewTitle: function (date) {
                    return 'testDT';
                }
            }
        };
        this.markDisabled = function (date) {
            var current = new Date();
            current.setHours(0, 0, 0);
            return date < current;
        };
        console.log('err', this.calendar.currentDate);
    }
    CalenderPage.prototype.ngOnInit = function () {
    };
    CalenderPage.prototype.loadEvents = function () {
        // this.eventSource = this.createRandomEvents();
        this.eventSource = this.loadAllEvents();
    };
    CalenderPage.prototype.onViewTitleChanged = function (title) {
        this.viewTitle = title;
    };
    CalenderPage.prototype.onEventSelected = function (event) {
        console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
    };
    CalenderPage.prototype.changeMode = function (mode) {
        this.calendar.mode = mode;
    };
    CalenderPage.prototype.today = function () {
        this.calendar.currentDate = new Date();
    };
    CalenderPage.prototype.onTimeSelected = function (ev) {
        console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
            (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
    };
    CalenderPage.prototype.onCurrentDateChanged = function (event) {
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        event.setHours(0, 0, 0, 0);
        this.isToday = today.getTime() === event.getTime();
    };
    CalenderPage.prototype.onRangeChanged = function (ev) {
        console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
    };
    CalenderPage.prototype.nextMonth = function () {
        var dt = new Date(this.selectedDate);
        dt.setMonth(dt.getMonth());
        this.calendar.currentDate = dt;
    };
    CalenderPage.prototype.createRandomEvents = function () {
        var events = [];
        for (var i = 0; i < 50; i += 1) {
            var date = new Date();
            var eventType = Math.floor(Math.random() * 2);
            var startDay = Math.floor(Math.random() * 90) - 45;
            var endDay = Math.floor(Math.random() * 2) + startDay;
            var startTime = void 0;
            var endTime = void 0;
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
            }
            else {
                var startMinute = Math.floor(Math.random() * 24 * 60);
                var endMinute = Math.floor(Math.random() * 180) + startMinute;
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
    };
    CalenderPage.prototype.loadAllEvents = function () {
        var events = [];
        for (var _i = 0, _a = this.events; _i < _a.length; _i++) {
            var e = _a[_i];
            var FromDate = new Date(e.FromDate);
            var ToDate = new Date(e.ToDate);
            var eventType = e.AllDay;
            var startDay = Math.floor(Math.random() * 90) - 45;
            var endDay = Math.floor(Math.random() * 2) + startDay;
            var startTime = void 0;
            var endTime = void 0;
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
            }
            else {
                var startMinute = Math.floor(Math.random() * 24 * 60);
                var endMinute = Math.floor(Math.random() * 180) + startMinute;
                startTime = new Date(FromDate.getFullYear(), FromDate.getMonth(), FromDate.getDate(), FromDate.getHours(), FromDate.getMinutes());
                endTime = new Date(ToDate.getFullYear(), ToDate.getMonth(), ToDate.getDate(), ToDate.getHours(), ToDate.getMinutes());
                events.push({
                    title: e.Subject,
                    startTime: startTime,
                    endTime: endTime,
                    allDay: false
                });
            }
        }
        return events;
    };
    CalenderPage = __decorate([
        Component({
            selector: 'app-calender',
            templateUrl: './calender.page.html',
            styleUrls: ['./calender.page.scss'],
        }),
        __metadata("design:paramtypes", [])
    ], CalenderPage);
    return CalenderPage;
}());
export { CalenderPage };
//# sourceMappingURL=calender.page.js.map
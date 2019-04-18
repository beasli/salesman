import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-salesorder-header-create',
  templateUrl: './salesorder-header-create.page.html',
  styleUrls: ['./salesorder-header-create.page.scss'],
})
export class SalesorderHeaderCreatePage implements OnInit {

 header: any;
 date: any;
 Currency = JSON.parse(localStorage.getItem('Currency'));
  constructor(private datePipe: DatePipe) {
    const current_date = new Date();
    console.log(this.datePipe.transform(current_date, 'yyyy-MM-dd'));
    this.date = this.datePipe.transform(current_date, 'yyyy-MM-dd');
   }

  ngOnInit() {
    this.header = JSON.parse(localStorage.getItem('CartHeader'));
    this.header.Date = this.date;
    console.log(this.header);
  }

}

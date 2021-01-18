
import { Component } from '@angular/core';
import { GetDateService } from "./service/get-date_service";
import {formatDate } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'roadcastAssignment';
  name = 'Stranger';
  currentDate: Date;
  todayTime='';
  constructor(private CurrentDate: GetDateService) {
    this.CurrentDate.setDate();

  }

  ngOnInit() {
    this.currentDate = this.CurrentDate.getDate();
    
  }
}

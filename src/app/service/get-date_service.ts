import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetDateService {
  private date: Date;
  constructor() { }

  getDate() {
    return this.date;
  }
  
  setDate() {
    this.date = new Date();
  }
}

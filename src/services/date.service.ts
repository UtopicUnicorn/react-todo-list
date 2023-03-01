import { makeAutoObservable } from 'mobx';

class DateHolder {
  month = new Date().getMonth();
  year = new Date().getFullYear();
  day = new Date().getDate();

  constructor() {
    makeAutoObservable(this);
  }

  nextMonth() {
    if (this.month === 11) {
      this.year += 1;
      this.month = 0;
    } else {
      this.month = this.month + 1;
    }
    this.day = 1;
  }

  previousMonth() {
    if (this.month === 0) {
      this.year -= 1;
      this.month = 11;
    } else {
      this.month = this.month - 1;
    }
    this.day = 1;
  }

  selectDay(day: number) {
    this.day = day;
  }

  getDate() {
    return new Date(this.year, this.month, this.day);
  }

  setToday() {
    this.month = new Date().getMonth();
    this.year = new Date().getFullYear();
    this.day = new Date().getDate();
  }
}

export default new DateHolder();

import { FormBuilder, FormGroup, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, OnInit, HostListener, ElementRef, forwardRef, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-custom-datepicker',
  templateUrl: './custom-datepicker.component.html',
  styleUrls: ['./custom-datepicker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomDatepickerComponent),
      multi: true
    }
  ]
})

export class CustomDatepickerComponent implements OnInit, ControlValueAccessor {
  public date = moment();
  public daysArr;
  public dateForm: FormGroup;
  @Input('value') _dateSelected = moment().format('DD/MM/YYYY');
  public calendarIsShown: boolean = false;

  onChange: any = () => { };
  onTouched: any = () => { };

  get dateSelected() {
    return this._dateSelected;
  }
  set dateSelected(date) {
    this._dateSelected = date;
    this.onChange(date);
    this.onTouched();
  }

  constructor(private fb: FormBuilder,
    private elementRef: ElementRef) {
    this.initDateForm();
  }
  // Required to use in a form builder
  writeValue(value: any): void {
    if (value) {
      this._dateSelected = value;
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }



  public initDateForm() {
    return this.dateForm = this.fb.group({
      dateSelected: ['']
    });
  }
  ngOnInit() {
    this.daysArr = this.createCalendar(this.date);
  }
  createCalendar(month) {
    let firstDay = moment(month).startOf('M');
    let days = Array.apply(null, { length: month.daysInMonth() })
      .map(Number.call, Number)
      .map((n) => {
        return moment(firstDay).add(n, 'd');
      });

    for (let n = 0; n < firstDay.weekday(); n++) {
      days.unshift(null);

    }
    return days;
  }

  public todayCheck(day) {
    if (!day) {
      return false;
    }
    return moment().format('L') === day.format('L')
  }
  public isSelected(day) {
    if (!day) {
      return false;
    }
    const dateSelected = moment(this.dateForm.value.dateSelected, 'DD/MM/YYYY'); //03/03/19
    if (this.dateForm.valid) {
      return dateSelected.isSame(day);
    }
  }

  public nextMonth() {
    this.date.add(1, 'M');
    this.daysArr = this.createCalendar(this.date);
  }
  public previousMonth() {
    this.date.subtract(1, 'M');
    this.daysArr = this.createCalendar(this.date);
  }

  public onDaySelection(day) {
    const dayFormatted = day.format('DD/MM/YYYY');
    this._dateSelected = dayFormatted;
    this.dateForm.setValue({ dateSelected: dayFormatted });
    this.toggleCalendarDisplay();
    return;
  }


  public toggleCalendarDisplay() {
    this.calendarIsShown = !this.calendarIsShown;
  }
  //handle toggling of calendar when clicking outside
  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (!this.elementRef.nativeElement.contains(event.target))
      this.calendarIsShown = false;
  }


}

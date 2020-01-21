import { Component, OnInit } from '@angular/core';
import { NgxDrpOptions, PresetItem, Range } from 'ngx-mat-daterange-picker';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {
  API: string = "http://localhost:3000/api/getdata";
  data_send :any;
  range:Range = {fromDate:new Date(), toDate: new Date()};
  options:NgxDrpOptions;
  presets:Array<PresetItem> = [];

  constructor(    
    private http: HttpClient) { }

  ngOnInit() {
    const today = new Date();
    const fromMin = new Date(today.getFullYear(), today.getMonth()-2, 1);
    const fromMax = new Date(today.getFullYear(), today.getMonth()+1, 0);
    const toMin = new Date(today.getFullYear(), today.getMonth()-1, 1);
    const toMax = new Date(today.getFullYear(), today.getMonth()+2, 0);
 
    this.setupPresets();
    this.options = {
                    presets: this.presets,
                    format: 'mediumDate',
                    range: {fromDate:today, toDate: today},
                    applyLabel: "Submit",
                    calendarOverlayConfig: {
                      shouldCloseOnBackdropClick: false,
                      hasBackdrop: false
                    }
                    // cancelLabel: "Cancel",
                    // excludeWeekends:true,
                    // fromMinMax: {fromDate:fromMin, toDate:fromMax},
                    // toMinMax: {fromDate:toMin, toDate:toMax}
                  };
  }
  
  // handler function that receives the updated date range object
  updateRange(range: Range){
    
    this.range = range;
    console.log( this.range.fromDate);
   /*  this.http.post<any>(this.API,{title:'post data'}).subscribe(data =>{
        this.data_send = this.range;
    }) */
  }  
  
  // helper function to create initial presets
  setupPresets() {
 
    const backDate = (numOfDays) => {
      const today = new Date();
      return new Date(today.setDate(today.getDate() - numOfDays));
    }
    
    const today = new Date();
    const yesterday = backDate(1);
    const minus7 = backDate(7)
    const minus30 = backDate(30);
    const currMonthStart = new Date(today.getFullYear(), today.getMonth(), 1);
    const currMonthEnd = new Date(today.getFullYear(), today.getMonth()+1, 0);
    const lastMonthStart = new Date(today.getFullYear(), today.getMonth()-1, 1);
    const lastMonthEnd = new Date(today.getFullYear(), today.getMonth(), 0);
    
    this.presets =  [
      {presetLabel: "Yesterday", range:{ fromDate:yesterday, toDate:today }},
      {presetLabel: "Last 7 Days", range:{ fromDate: minus7, toDate:today }},
      {presetLabel: "Last 30 Days", range:{ fromDate: minus30, toDate:today }},
      {presetLabel: "This Month", range:{ fromDate: currMonthStart, toDate:currMonthEnd }},
      {presetLabel: "Last Month", range:{ fromDate: lastMonthStart, toDate:lastMonthEnd }}
    ]
  }

}

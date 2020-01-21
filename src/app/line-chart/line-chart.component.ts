import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';


@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  dummydata:any;
  dataSend = Array();
  constructor(
    private ApiService: ApiService,

  ) { }

  ngOnInit() {
    var success = Array();
    this.ApiService.getInfo().subscribe((res:any)=>{
         success = res['data'].map(res => res)
         success.forEach(x => {
           if(x.callstatus == 0){
             this.dataSend['success'] = x.count;
           }
           if(x.callstatus == 1){
            this.dataSend['fail'] = x.count;
          }
          if(x.callstatus == 3){
            this.dataSend['notUpdate'] = x.count;
          }
           
         });
        console.log(success);
        console.log(this.dataSend);

        
       },(err:any)=>{
      console.log(err);
    })
  }

  lineChartData: ChartDataSets[] = [
    { data: [36, 72, 28 ,54,67,19,90,23,6,80,45,78],
      label: 'Success Calls'},
    { data: [15, 32, 68 ,12 ,8,26,12,17,19,1,6,33], label: 'Faliure Calls'},
    { data: [19, 2, 18 ,62 ,3,16,32,7,29,11,46,13], label: 'Not Updated'},
  ];
  lineChartLabels: Label[] = ['January', 'February', 'March','April','May','June','July','August','September','Octomber','November','December'];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: '#0B913D',
      backgroundColor: '#A9E3BF',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';


}

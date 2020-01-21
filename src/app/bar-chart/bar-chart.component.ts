import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import {ApiService} from '../api.service';



@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  dummydata:any;
  dataSend:any=[];
 
  
  constructor(
    private ApiService: ApiService,

  ) { }

  ngOnInit() {
    this.getInfo();
  }
  private getInfo(){
    this.ApiService.getInfo().subscribe((res:any)=>{
     // var success = Array();

      this.dummydata = res.data; 
      console.log(this.dummydata);
                                           this.dummydata.forEach(x => {
                                           this.dataSend.push(x.count)
                                            
                                          });
                                         console.log("success");
                                         console.log(this.dataSend);
                                 
    },(err:any)=>{
      console.log(err);
    })
  }
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['Faliur', 'Success', 'NotUpdated'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: this.dataSend, label: 'IMI Mobile' },
    {data:[120,25,78],label:'Knowlarity-Pune'},
    {data:[220,1355,178],label:'Knowlarity-Delhi'}

  ];
  

}

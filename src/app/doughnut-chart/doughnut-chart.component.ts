import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label,Color } from 'ng2-charts';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss']
})
export class DoughnutChartComponent implements OnInit {

  doughnutChartLabels: Label[] = ['Deleted', 'DND', 'ANC','PNC','Unsuccessful','Stage1','Stage2','Stage3','Stage4'];
  doughnutChartData: MultiDataSet = [
    [21948,445264,10310,74123,248218,74194,84,65148,182915]
  ];
  doughnutChartType: ChartType = 'doughnut';
  /* doughnutChartColors: Color[]=[
    {backgroundColor:'#ff3333'},
    {backgroundColor:'#ff4da6'},
    {backgroundColor:'#3385ff'},
    {backgroundColor:'#660033'},
    {backgroundColor:'#999900'},
    {backgroundColor:'#267326'},
    {backgroundColor:'#e65c00'},
    {backgroundColor:'#550080'},
    {backgroundColor:'#00b359'}
  ] */


  constructor() { }

  ngOnInit() {
  }

}

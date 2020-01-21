import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  dummydata:any;
  constructor(
    private ApiService: ApiService,
  ) { }

  ngOnInit() {
    /* this.info = this.ApiService.getInfo();
    console.log(this.info); */
    this.ApiService.getInfo().subscribe((res:any)=>{
      //console.log(res);
      this.dummydata = res.data;
      
    },(err:any)=>{
      console.log(err);
    })

  }

}

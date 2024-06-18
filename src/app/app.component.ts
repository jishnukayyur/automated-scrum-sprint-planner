import { Component } from '@angular/core';
import { DataserviceService } from './service/dataservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'scrum-sprint-planner';
  constructor(private _dataServ:DataserviceService){
    this._dataServ.initArray();
  }
}

import { Component, OnInit, SimpleChanges } from '@angular/core';
import { WorkWithServerService } from '../../work-with-service/work-with-server.service';

@Component({
  selector: 'app-announce',
  templateUrl: './announce.component.html',
  styleUrls: ['./announce.component.css']
})
export class AnnounceComponent implements OnInit {
  datesInMemory : any;
  constructor() { }

  ngOnInit() {
    // console.log(responsedData.returnData());
  }
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.

  }

}

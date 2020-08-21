import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ChargeMapService } from '../charge-map.service';
import * as OCM from "../ocm/ocm.module";


@Component({
  selector: 'app-carger-finder',
  templateUrl: './carger-finder.component.html',
  styleUrls: ['./carger-finder.component.css']
})
export class CargerFinderComponent implements OnInit {

  showNearest : boolean = true;
  showDetails : boolean = false;

  @Output() selectDetails = new EventEmitter<OCM.OcmResponse>();
  selectedNodeDetail : OCM.OcmResponse;
  
  constructor() { }

  ngOnInit(): void {    

  }

  hideNearest(){
    if(this.showNearest){
      this.showNearest = false;
    }else{
      this.showNearest = true;
    }
  }

  
  hideDetails(){
    if(this.showDetails){
      this.showDetails = false;
    }else{
      this.showDetails = true;
    }
  }

  public nodeCallback(node : OCM.OcmResponse){
    this.showDetails = true;
    this.selectedNodeDetail = node;
  }

}

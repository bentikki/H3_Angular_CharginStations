import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OcmResponse } from '../ocm/ocm.module';
import * as OCM from "../ocm/ocm.module";
import {ChargerDetailsComponent} from '../charger-details/charger-details.component'

@Component({
  selector: 'app-child-node',
  templateUrl: './child-node.component.html',
  styleUrls: ['./child-node.component.css']
})
export class ChildNodeComponent implements OnInit {

  @Input() node: OCM.OcmResponse;
  @Output() selectDetails = new EventEmitter<OCM.OcmResponse>();
  
  constructor() { }

  ngOnInit(): void {
  }

  public showDetails(node : OCM.OcmResponse){
    this.selectDetails.emit(node);
  }

}

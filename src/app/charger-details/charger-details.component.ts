import { Component, OnInit, Input } from '@angular/core';
import { OcmResponse } from '../ocm/ocm.module';
import * as OCM from "../ocm/ocm.module";
import { ChargeMapService } from '../charge-map.service';

@Component({
  selector: 'app-charger-details',
  templateUrl: './charger-details.component.html',
  styleUrls: ['./charger-details.component.css']
})
export class ChargerDetailsComponent implements OnInit {

  public show : boolean = false;
  @Input() node: OCM.OcmResponse;

  constructor(private chargerService : ChargeMapService) { }

  ngOnInit(): void { 
  }


}

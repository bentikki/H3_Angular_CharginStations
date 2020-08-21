import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { OcmResponse } from '../ocm/ocm.module';
import { ChargeMapService } from '../charge-map.service';
import { LocationService } from '../location.service';
import * as OCM from "../ocm/ocm.module";

@Component({
  selector: 'app-charger-list',
  templateUrl: './charger-list.component.html',
  styleUrls: ['./charger-list.component.css']
})
export class ChargerListComponent implements OnInit {

  public loading = false;
  public nodes: OcmResponse[];
  @Output() selectDetails = new EventEmitter<OCM.OcmResponse>();
  public selectedNodeDetail : OCM.OcmResponse;

  constructor(private chargerService : ChargeMapService, private locationService : LocationService) { }

  ngOnInit(): void {    

    // this.getNearestNodes();
    this.chargerService.currentData.subscribe(currentData => this.getNearestNodes());
    //this.getAllNodes();
  }

  private getAllNodes(){
    this.loading = true;
    this.chargerService.getAllNodes(4).subscribe(data => {
      this.nodes = data;
      console.log(this.nodes);
      this.loading = false;
    });

  }

  private getNearestNodes(){
    this.nodes = [];
    this.loading = true;

    if(this.chargerService.customPosition){
      
      this.chargerService.getNearestNodes(this.chargerService.customPosition.Longitude, this.chargerService.customPosition.Latitude, 4)
        .subscribe(data => {
          this.nodes = data;
          this.loading = false;
        }
      );
    
    }
    else
    {
      this.locationService.getPosition().then(pos=> {

        console.log(`Positon: ${pos.lng} ${pos.lat}`);
  
        this.chargerService.getNearestNodes(pos.lng, pos.lat, 4).subscribe(data => {
          this.nodes = data;
          this.loading = false;
        });
  
      });
    }

  }


  public nodeCallback(node : OCM.OcmResponse){
    this.selectDetails.emit(node);
  }

}

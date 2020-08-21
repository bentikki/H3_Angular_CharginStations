import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, NgZone } from '@angular/core';
/// <reference types="@types/googlemaps" />
import { AgmCoreModule } from '@agm/core';
import { LocationService } from '../location.service';
import { AgmPosition } from '../agm-position';
import { ChargeMapService } from '../charge-map.service';
import * as OCM from "../ocm/ocm.module";
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-charger-search',
  templateUrl: './charger-search.component.html',
  styleUrls: ['./charger-search.component.css']
})
export class ChargerSearchComponent implements OnInit {

  @Output() selectDetails = new EventEmitter<OCM.OcmResponse>();
  @ViewChild('search') public searchElementRef: ElementRef;

  private geoCoder;
  public positions = Array<AgmPosition>();

  public loading : boolean = false;
  lat: number = -23.8779431;
  lng: number = -49.8046873;
  zoom: number = 10;

  constructor(
    private locationService : LocationService, 
    private chargerService : ChargeMapService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) { }

  ngOnInit(): void {

    this.locationService.getPosition().then(pos=> {
      this.lat = pos.lat;
      this.lng = pos.lng;

      this.getNearestNodes();    
    });


    this.mapsAPILoader.load().then(() => {
      this.geoCoder = new google.maps.Geocoder;

      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
 
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {

          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          this.lat = place.geometry.location.lat();
          this.lng = place.geometry.location.lng();
          this.zoom = 12;

          this.chargerService.updateNearest(new AgmPosition(null, this.lat, this.lng));
          this.getNearestNodes();    
        });
      });
    });

  }

  selectNode(position : AgmPosition){
    console.log("test");
    this.selectDetails.emit(position.Node);
  }

  private getNearestNodes(){
    this.loading = true;
    this.positions = [];
    console.log(this.positions);

    this.chargerService.getNearestNodes(this.lng, this.lat, 4)
      .subscribe(data => data.forEach(node => {
        this.positions.push(new AgmPosition(node));
        this.loading = false;
      })
    );

  }
  

}

import * as OCM from "./ocm/ocm.module";
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Charger } from './charger';
import { from, Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { _ParseAST } from '@angular/compiler';
import { AgmPosition } from './agm-position';



@Injectable({
  providedIn: 'root'
})
export class ChargeMapService {

  nodes = [];
  private data = new BehaviorSubject('');
  currentData = this.data.asObservable()
  customPosition : AgmPosition;
    
  responseForm : OCM.OcmResponse;
  private apiUrlRoot = 'https://api.openchargemap.io/v3/poi/?output=json&verbose=false&opendata=true'; 
  private apiUrl = this.apiUrlRoot; 

  constructor(private http? : HttpClient) { }


  getResponse() {
    
    return this.http.get(this.apiUrl)
      .pipe(
        map(resp=>resp as OCM.OcmResponse[])
      );
      
  }

  public getAllNodes(max : number = 5 ){
    this.apiUrl = this.apiUrlRoot;
    this.apiUrl +=  '&countrycode=DK';
    this.apiUrl +=  '&maxresults=' + max;

    //Test start
    this.apiUrl +=  '&distance=true&distanceunit=KM';
    this.apiUrl +=  '&longitude='+ 11.763712 +'&latitude=' + 55.220633600000006;
    //11.763712 55.220633600000006
    //Test end

    return this.getResponse();  
  }

  public getNearestNodes(lon : number, lat : number, max : number = 5 ){
    
    this.apiUrl = this.apiUrlRoot;
    this.apiUrl +=  '&maxresults=' + max;
    this.apiUrl +=  '&distance=true&distanceunit=KM';
    this.apiUrl +=  '&longitude='+ lon +'&latitude=' + lat;

    console.log(this.apiUrl);
    return this.getResponse();  
  }


  updateNearest(position : AgmPosition) {
    this.customPosition = position;
    this.data.next("update");
  }

  public getNodeFromCoordinates(lon : number, lat : number){
    
    this.apiUrl = this.apiUrlRoot;
    this.apiUrl +=  '&maxresults=1';
    this.apiUrl +=  '&distance=true&distanceunit=KM';
    this.apiUrl +=  '&longitude='+ lon +'&latitude=' + lat;

    return this.getResponse();  
  }


}

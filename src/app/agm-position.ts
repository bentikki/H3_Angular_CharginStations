import * as OCM from "./ocm/ocm.module";

export class AgmPosition {
    private _latitude: number;
    private _longitude: number;
    private _node: OCM.OcmResponse;

    public get Node(): OCM.OcmResponse {
        return this._node;
    }
    public get Latitude(): number {
        return this._latitude;
    }
    public get Longitude(): number {
        return this._longitude;
    }


    constructor(node? : OCM.OcmResponse, lat? : number, lon? : number) {
        if(node){
            this._node = node;
            this._latitude = node.AddressInfo.Latitude;
            this._longitude = node.AddressInfo.Longitude;
        }
        else
        {
            this._latitude = lat;
            this._longitude = lon;
        }
        
    }
}

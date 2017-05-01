import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
// import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { ThingType } from 'model/index';

@Injectable()
export class ThingTypeService {
  baseUrl = '/api/thingTypes';

  constructor(
    private _http: Http,
  ) { }

  getAllThingTypes() {
    return this._http.get(this.baseUrl)
      .map((response: Response) => <ThingType[]>response.json().data);
  }
}

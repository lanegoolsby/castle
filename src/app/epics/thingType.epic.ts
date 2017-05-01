import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import { ActionsObservable } from 'redux-observable';
import { ThingTypeConstants } from '../lib/constants';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ThingTypeEpics {
    baseUrl = '/api/thingTypes';

    constructor(private http: Http) { }

    load = (action$) => {
        return action$.ofType(ThingTypeConstants.LOAD)
            .mergeMap(() => {
                console.log('Calling GET thing types');
                return this.http.get(this.baseUrl)
                    .map(result => ({
                        type: ThingTypeConstants.LOAD_SUCCESS,
                        payload: result.json().data
                    }))
                    .catch(error => Observable.of({
                        type: ThingTypeConstants.LOAD_ERROR,
                        payload: error
                    }));
            });
    }

    add = (action$) => {
        return action$.ofType(ThingTypeConstants.CREATE)
            .mergeMap(({ payload }) => {
                console.log('Calling POST with thing type');
                return this.http.post(this.baseUrl, payload)
                    .map(result => ({
                        type: ThingTypeConstants.CREATE_SUCCESS,
                        payload: result.json().meta
                    }))
                    .catch(error => Observable.of({
                        type: ThingTypeConstants.CREATE_ERROR,
                        payload: error
                    }));
            });
    }
}

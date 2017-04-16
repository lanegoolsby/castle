import { Injectable } from '@angular/core';
import { Action } from 'redux';

@Injectable()
export class ThingActions {
    static ADD = 'ADD_THING';
    static INCREMENT = 'INCREMENT';
    static DECREMENT = 'DECREMENT';

    add(): Action {
        return {
            type: ThingActions.ADD
        };
    }

    increment(): Action {
        return {
            type: ThingActions.INCREMENT
        };
    }

    decrement(): Action {
        return {
            type: ThingActions.DECREMENT
        };
    }
}

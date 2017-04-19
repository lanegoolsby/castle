import { Injectable } from '@angular/core';
import { IThing } from '../reducers/thing.reducer';

@Injectable()
export class ThingActions {
    static ADD = 'ADD';
    static REMOVE = 'REMOVE';

    add(thing: IThing) {
        return {
            type: ThingActions.ADD,
            thing
        };
    }

    remove(thing: IThing) {
        return {
            type: ThingActions.REMOVE,
            thing
        };
    }
}

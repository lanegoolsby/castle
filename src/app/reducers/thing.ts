// import { Action } from 'redux';
import { ThingConstants } from '../lib/constants';

export enum THING_TYPES {
    LIGHT,
    TEMP,
    WINDOW,
    LOCK,
    HALL
}

export class Thing {
    type: THING_TYPES;
    name: string;
    loading: boolean;
}

let InitalState: Thing[] = [{
    type: THING_TYPES.LIGHT,
    name: 'Wall Light',
    loading: false
}, {
    type: THING_TYPES.LIGHT,
    name: 'Presence Sensor',
    loading: false
}];

export function ThingReducer(state = InitalState, action) {
    switch (action.type) {
        case ThingConstants.CREATE:
            // state.push(action.payload);
            console.log('Added thing');
            return [...state, action.payload];
        // case ThingActions.DECREMENT: return { count: lastState.count - 1 };
        // break;
        case ThingConstants.DELETE:
            console.log('Removing thing');
            break;
    }

    return state;
}

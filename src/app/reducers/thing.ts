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

export function ThingReducer(state = [], action) {
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

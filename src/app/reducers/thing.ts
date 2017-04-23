// import { Action } from 'redux';
import { ThingConstants } from '../lib/constants';

export enum THING_TYPES {
    LIGHT,
    TEMP,
    WINDOW,
    LOCK,
    PIR
}

export class Thing {
    id: number;
    roomId: number;
    type: THING_TYPES;
    name: string;
    loading: boolean;
}

let InitalState: Thing[] = [{
    id: 1,
    roomId: 1,
    type: THING_TYPES.LIGHT,
    name: 'Main Light',
    loading: false
}, {
    id: 2,
    roomId: 1,
    type: THING_TYPES.PIR,
    name: 'Presence Sensor',
    loading: false
}, {
    id: 3,
    roomId: 5,
    type: THING_TYPES.WINDOW,
    name: 'Sneak out portal',
    loading: false
}];

export function ThingReducer(state = InitalState, action) {
    switch (action.type) {
        case ThingConstants.CREATE:
            console.log('Added thing');
            return [...state, action.payload];
        case ThingConstants.DELETE:
            console.log('Removing thing');
            let idx = state.indexOf(action.payload);
            return [
                ...state.slice(0, idx),
                ...state.slice(idx + 1)];
        default:
            return state;
    }
}

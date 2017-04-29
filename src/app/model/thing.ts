import { ThingConstants } from '../lib/constants';

export class Thing {
    id: number;
    roomId: number;
    thingTypeId: number;
    name: string;
    loading: boolean;
}

let InitalState: Thing[] = [{
    id: 1,
    roomId: 1,
    thingTypeId: 1,
    name: 'Main Light',
    loading: false
}, {
    id: 2,
    roomId: 1,
    thingTypeId: 5,
    name: 'Presence Sensor',
    loading: false
}, {
    id: 3,
    roomId: 5,
    thingTypeId: 3,
    name: 'Sneak out portal',
    loading: false
}];

// TODO: This really needs to be extracted into an interface
export function ThingReducer(state = InitalState, action) {
    switch (action.type) {
        case ThingConstants.CREATE:
            console.log('Added thing');
            action.payload.id = Math.random();
            return [...state, action.payload];
        case ThingConstants.DELETE:
            console.log('Removing thing');
            let a = state.filter(i => i.id !== action.payload.id);
            return [...a];
        case ThingConstants.EDIT:
            for (let x = 0; x < state.length; x++) {
                if (state[x].id === action.payload.id) {
                    state[x] = action.payload;
                    break;
                }
            }
            return [...state];
        default:
            return state;
    }
}

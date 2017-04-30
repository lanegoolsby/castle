import { ThingTypeConstants } from '../lib/constants';
import { ThingType } from 'model/index';

let InitalState: ThingType[] = [{
    id: 1,
    name: 'Light',
    loading: false
}, {
    id: 2,
    name: 'Temperature',
    loading: false
}, {
    id: 3,
    name: 'Window',
    loading: false
}, {
    id: 4,
    name: 'Lock',
    loading: false
}, {
    id: 5,
    name: 'PIR',
    loading: false
}, {
    id: 6,
    name: 'Hall',
    loading: false
}];

// TODO: This really needs to be extracted into an interface
export function ThingTypeReducer(state = InitalState, action) {
    switch (action.type) {
        case ThingTypeConstants.CREATE:
            console.log('Added thing type');
            action.payload.id = Math.random();
            return [...state, action.payload];
        case ThingTypeConstants.DELETE:
            console.log('Removing thing type');
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

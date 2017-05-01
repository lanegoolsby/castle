import { ThingTypeConstants } from '../lib/constants';
import { ThingType } from 'model/index';

let InitalState: ThingType[] = [];

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
        case ThingTypeConstants.LOAD:
            console.log('Loading thing types');
            return [];
        case ThingTypeConstants.LOAD_SUCCESS:
            console.log('Thing types loaded successfully');
            return Array.from(action.payload);
        case ThingTypeConstants.FILTER:
            console.log('Filtering thing types by type ID');
            return Array.from(state.filter(f => f.id === action.typeId));
        default:
            return state;
    }
}

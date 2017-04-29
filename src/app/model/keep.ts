import { KeepConstants } from '../lib/constants';

// Move this to its own class file
export class Keep {
    name: string;
    id: number;
    loading: boolean;
}

let InitalState: Keep[] = [{
    name: 'House',
    id: 1,
    loading: false
}, {
    name: 'Mailbox',
    id: 2,
    loading: false
}, {
    name: 'Mother-in-law-suite',
    id: 3,
    loading: false
}];

// TODO: This really needs to be extracted into an interface
export function KeepReducer(state = InitalState, action) {
    switch (action.type) {
        case KeepConstants.CREATE:
            console.log('Adding keep');
            action.payload.id = Math.random();
            return [...state, action.payload];
        case KeepConstants.DELETE:
            console.log('Removing keep');
            let idx = state.indexOf(action.payload);
            return [
                ...state.slice(0, idx),
                ...state.slice(idx + 1)];
        case KeepConstants.EDIT:
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

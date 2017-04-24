import { KeepConstants } from '../lib/constants';

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

export function KeepReducer(state = InitalState, action) {
    switch (action.type) {
        case KeepConstants.CREATE:
            console.log('Adding keep');
            return [...state, action.payload];
        case KeepConstants.DELETE:
            console.log('Removing keep');
            let idx = state.indexOf(action.payload);
            return [
                ...state.slice(0, idx),
                ...state.slice(idx + 1)];
    }

    return state;
}

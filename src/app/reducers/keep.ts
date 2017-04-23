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
        case KeepConstants.SELECT:
            console.log('Selected Room');
            return state.filter(k => k.id === action.payload.id);
        /*case KeepConstants.ADD_ROOM:
            console.log('Adding room');
            break;
        case KeepConstants.REMOVE_ROOM:
            console.log('Removing room');
            break;*/
    }

    return state;
}

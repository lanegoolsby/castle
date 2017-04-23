import { Action } from 'redux';
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
    name:'Mailbox',
    id:2,
    loading:false
}];

export function KeepReducer(state = InitalState, action: Action) {
    switch (action.type) {
        case KeepConstants.ADD_ROOM:
            console.log('Adding room');
            break;
        case KeepConstants.REMOVE_ROOM:
            console.log('Removing room');
            break;
    }

    return state;
}

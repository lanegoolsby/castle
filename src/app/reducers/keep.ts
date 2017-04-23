import { Action } from 'redux';
import { KeepConstants } from '../lib/constants';
import { Room } from './room';

export class Keep {
    rooms: Room[];
    loading: boolean;
}

export function KeepReducer(state = [], action: Action) {
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

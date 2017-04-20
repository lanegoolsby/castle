import { Action } from 'redux';
import { HouseConstants } from '../lib/constants';
import { IRoom } from './room';

export class IHouse {
    rooms: IRoom[];
    loading: boolean;
}

export function HouseReducer(state = [], action: Action) {
    switch (action.type) {
        case HouseConstants.ADD_ROOM:
            console.log('Adding room');
            break;
        case HouseConstants.REMOVE_ROOM:
            console.log('Removing room');
            break;
    }

    return state;
}

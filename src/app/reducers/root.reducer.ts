import { Action } from 'redux';
import { ThingActions } from '../actions/thing.actions';
import { IHouse } from './house.reducer';
import { IRoom } from './room.reducer';
import { IThing } from './thing.reducer';

export interface IAppState {
    count: number;
    house: IHouse[];
    rooms: IRoom[];
    things: IThing[];
}

export const INITIAL_STATE: IAppState = {
    count: 0,
    house: IHouse[0],
    rooms: IRoom[0],
    things: IThing[0]

};

export function rootReducer(lastState: IAppState = INITIAL_STATE, action: Action): IAppState {
    switch (action.type) {
        case ThingActions.ADD: // return { count: lastState.count + 1 };
        // case ThingActions.DECREMENT: return { count: lastState.count - 1 };
    }

    return lastState;
}

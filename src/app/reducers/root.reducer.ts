import { combineReducers } from 'redux';
import { Keep, KeepReducer } from './Keep';
import { Room, RoomReducer } from './room';
import { Thing, ThingReducer } from './thing';

export interface IAppState {
    // count: number;
    house: Keep[];
    rooms: Room[];
    things: Thing[];
}

export const INITIAL_STATE: IAppState = {
    // count: 0,
    house: Keep[0],
    rooms: Room[0],
    things: Thing[0]

};

export const rootReducer = combineReducers<IAppState>({
    rooms: RoomReducer,
    things: ThingReducer,
    house : KeepReducer
});

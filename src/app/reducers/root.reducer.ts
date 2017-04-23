import { combineReducers } from 'redux';
import { House, HouseReducer } from './house';
import { Room, RoomReducer } from './room';
import { Thing, ThingReducer } from './thing';

export interface IAppState {
    // count: number;
    house: House[];
    rooms: Room[];
    things: Thing[];
}

export const INITIAL_STATE: IAppState = {
    // count: 0,
    house: House[0],
    rooms: Room[0],
    things: Thing[0]

};

export const rootReducer = combineReducers<IAppState>({
    rooms: RoomReducer,
    things: ThingReducer,
    house : HouseReducer
});

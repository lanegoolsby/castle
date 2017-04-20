import { combineReducers } from 'redux';
import { IHouse, HouseReducer } from './house';
import { IRoom, RoomReducer } from './room';
import { IThing, ThingReducer } from './thing';

export interface IAppState {
    // count: number;
    house: IHouse[];
    rooms: IRoom[];
    things: IThing[];
}

export const INITIAL_STATE: IAppState = {
    // count: 0,
    house: IHouse[0],
    rooms: IRoom[0],
    things: IThing[0]

};

export const rootReducer = combineReducers<IAppState>({
    rooms: RoomReducer,
    things: ThingReducer,
    house : HouseReducer
});

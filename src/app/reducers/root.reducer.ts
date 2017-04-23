import { combineReducers } from 'redux';
import { Keep, KeepReducer } from './keep';
import { Room, RoomReducer } from './room';
import { Thing, ThingReducer } from './thing';

export interface IAppState {
    // count: number;
    keeps: Keep[];
    rooms: Room[];
    things: Thing[];
}

export const INITIAL_STATE: IAppState = {
    // count: 0,
    keeps: Keep[0],
    rooms: Room[0],
    things: Thing[0]

};

export const rootReducer = combineReducers<IAppState>({
    keeps : KeepReducer,
    rooms: RoomReducer,
    things: ThingReducer
});

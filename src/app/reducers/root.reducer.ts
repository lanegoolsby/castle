import { combineReducers } from 'redux';
import * as types from 'model/index';
import { KeepReducer } from './keep';
import { RoomReducer } from './room';
import { ThingReducer } from './thing';
import { ThingTypeReducer } from './thingType';

export interface IAppState {
    keeps: types.Keep[];
    rooms: types.Room[];
    things: types.Thing[];
    thingTypes: types.ThingType[];
}

export const INITIAL_STATE: IAppState = {
    keeps: types.Keep[0],
    rooms: types.Room[0],
    things: types.Thing[0],
    thingTypes: types.ThingType[0]
};

export const rootReducer = combineReducers<IAppState>({
    keeps: KeepReducer,
    rooms: RoomReducer,
    things: ThingReducer,
    thingTypes: ThingTypeReducer
});

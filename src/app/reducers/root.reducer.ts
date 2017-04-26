import { combineReducers } from 'redux';
import { Keep, KeepReducer } from './keep';
import { Room, RoomReducer } from './room';
import { Thing, ThingReducer } from './thing';
import { ThingType, ThingTypeReducer } from './thingType';

export interface IAppState {
    keeps: Keep[];
    rooms: Room[];
    things: Thing[];
    thingTypes: ThingType[];
}

export const INITIAL_STATE: IAppState = {
    keeps: Keep[0],
    rooms: Room[0],
    things: Thing[0],
    thingTypes: ThingType[0]

};

export const rootReducer = combineReducers<IAppState>({
    keeps : KeepReducer,
    rooms: RoomReducer,
    things: ThingReducer,
    thingTypes: ThingTypeReducer
});

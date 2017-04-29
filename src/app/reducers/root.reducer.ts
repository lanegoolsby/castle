import { combineReducers } from 'redux';
import { Keep, KeepReducer, Room, RoomReducer, Thing, ThingReducer, ThingType, ThingTypeReducer } from 'model/index';

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
    keeps: KeepReducer,
    rooms: RoomReducer,
    things: ThingReducer,
    thingTypes: ThingTypeReducer
});

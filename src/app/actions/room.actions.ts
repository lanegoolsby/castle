import { Injectable } from '@angular/core';
import { IRoom } from '../reducers/room.reducer';
import { IThing } from '../reducers/thing.reducer';

@Injectable()
export class RoomActions {
    static ADD_ROOM = 'ADD_ROOM';
    static DELETE_ROOM = 'DELETE_ROOM';
    static ADD_THING = 'ADD_THING';

    add(room: IRoom) {
        return {
            type: RoomActions.ADD_ROOM,
            room
        };
    }

    delete() {
        return {
            type: RoomActions.DELETE_ROOM
        };
    }

    addThing(thing: IThing) {
        return {
            type: RoomActions.ADD_THING,
            thing
        };
    }
}

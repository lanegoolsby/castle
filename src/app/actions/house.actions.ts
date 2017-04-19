import { Injectable } from '@angular/core';
import { IRoom } from '../reducers/room.reducer';

@Injectable()
export class HouseActions {
    static ADD_ROOM = 'ADD_ROOM';

    addRoom(room: IRoom) {
        return {
            type: HouseActions.ADD_ROOM,
            room
        };
    }
}

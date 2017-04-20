import { Injectable } from '@angular/core';
import { IThing } from '../reducers/thing';
import { IRoom } from '../reducers/room';
import { IHouse } from '../reducers/house';
import { HouseConstants, RoomConstants, ThingConstants } from '../lib/constants';

@Injectable()
export class HouseActions {
    edit(house: IHouse) {
        return {
            type: HouseConstants.EDIT,
            payload: house
        };
    }

    addRoom(room: IRoom) {
        return {
            type: HouseConstants.ADD_ROOM,
            payload: room
        };
    }

    removeRoom(room: IRoom) {
        return {
            type: HouseConstants.REMOVE_ROOM,
            payload: room
        };
    }
}

@Injectable()
export class RoomActions {
    add(room: IRoom) {
        return {
            type: RoomConstants.CREATE,
            payload: room
        };
    }

    edit(room: IRoom) {
        return {
            type: RoomConstants.EDIT,
            payload: room
        };
    }

    delete(room: IRoom) {
        return {
            type: RoomConstants.DELETE,
            payload: room
        };
    }

    addThing(thing: IThing) {
        return {
            type: RoomConstants.ADD_THING,
            payload: thing
        };
    }
}

@Injectable()
export class ThingActions {
    add(thing: IThing) {
        return {
            type: ThingConstants.CREATE,
            payload: thing
        };
    }

    edit(thing: IThing) {
        return {
            type: ThingConstants.EDIT,
            payload: thing
        };
    }

    remove(thing: IThing) {
        return {
            type: ThingConstants.DELETE,
            payload: thing
        };
    }
}

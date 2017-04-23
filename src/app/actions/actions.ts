import { Injectable } from '@angular/core';
import { Thing } from '../reducers/thing';
import { Room } from '../reducers/room';
import { House } from '../reducers/house';
import { HouseConstants, RoomConstants, ThingConstants } from '../lib/constants';

@Injectable()
export class HouseActions {
    edit(house: House) {
        return {
            type: HouseConstants.EDIT,
            payload: house
        };
    }

    addRoom(room: Room) {
        return {
            type: HouseConstants.ADD_ROOM,
            payload: room
        };
    }

    removeRoom(room: Room) {
        return {
            type: HouseConstants.REMOVE_ROOM,
            payload: room
        };
    }
}

@Injectable()
export class RoomActions {
    add(room: Room) {
        return {
            type: RoomConstants.CREATE,
            payload: room
        };
    }

    edit(room: Room) {
        return {
            type: RoomConstants.EDIT,
            payload: room
        };
    }

    delete(room: Room) {
        return {
            type: RoomConstants.DELETE,
            payload: room
        };
    }

    addThing(thing: Thing) {
        return {
            type: RoomConstants.ADD_THING,
            payload: thing
        };
    }
}

@Injectable()
export class ThingActions {
    add(thing: Thing) {
        return {
            type: ThingConstants.CREATE,
            payload: thing
        };
    }

    edit(thing: Thing) {
        return {
            type: ThingConstants.EDIT,
            payload: thing
        };
    }

    remove(thing: Thing) {
        return {
            type: ThingConstants.DELETE,
            payload: thing
        };
    }
}

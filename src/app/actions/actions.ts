import { Injectable } from '@angular/core';
import { Thing } from '../reducers/thing';
import { Room } from '../reducers/room';
import { Keep } from '../reducers/keep';
import { KeepConstants, RoomConstants, ThingConstants } from '../lib/constants';

@Injectable()
export class KeepActions {
    edit(keep: Keep) {
        return {
            type: KeepConstants.EDIT,
            payload: keep
        };
    }

    addRoom(room: Room) {
        return {
            type: KeepConstants.ADD_ROOM,
            payload: room
        };
    }

    removeRoom(room: Room) {
        return {
            type: KeepConstants.REMOVE_ROOM,
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

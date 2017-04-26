import { Injectable } from '@angular/core';
import { Thing } from '../reducers/thing';
import { Room } from '../reducers/room';
import { Keep } from '../reducers/keep';
import { ThingType } from '../reducers/thingtype';
import { KeepConstants, RoomConstants, ThingConstants, ThingTypeConstants } from '../lib/constants';

@Injectable()
export class KeepActions {
    add(keep: Keep) {
        return {
            type: KeepConstants.CREATE,
            payload: keep
        };
    }
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

@Injectable()
export class ThingTypeActions {
    add(thingType: ThingType) {
        return {
            type: ThingTypeConstants.CREATE,
            payload: thingType
        };
    }

    remove(thingType: ThingType) {
        return {
            type: ThingTypeConstants.DELETE,
            payload: thingType
        };
    }
}
// TODO: add the thing type actions...

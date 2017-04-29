import { Thing, Room, Keep, ThingType } from '../model';
import { KeepConstants, RoomConstants, ThingConstants, ThingTypeConstants } from '../lib/constants';

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

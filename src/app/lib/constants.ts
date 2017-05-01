// TODO: Condense the CREATE, EDIT, and DELETE actions into an interface?
export const KeepConstants = {
    CREATE: 'ADD_KEEP',
    EDIT: 'EDIT_KEEP',
    DELETE: 'REMOVE_KEEP',
    ADD_ROOM: 'ADD_ROOM_TO_KEEP'
};

export const RoomConstants = {
    CREATE: 'CREATE_ROOM',
    EDIT: 'EDIT_ROOM',
    DELETE: 'DELETE_ROOM',
    ADD_THING: 'ADD_THING'
};

export const ThingConstants = {
    CREATE: 'CREATE_THING',
    EDIT: 'EDIT_THING',
    DELETE: 'DELETE_THING'
};

// TODO: Simply this into a generic class
export const ThingTypeConstants = {
    CREATE: 'CREATE_THING_TYPE',
    CREATE_SUCCESS: 'CREATE_THING_TYPE_SUCCESS',
    CREATE_ERROR: 'CREATE_THING_TYPE_ERROR',
    DELETE: 'DELETE_THING_TYPE',
    LOAD: 'LOAD_THING_TYPES',
    LOAD_SUCCESS: 'LOAD_THINGTYPE_SUCCESS',
    LOAD_ERROR: 'LOAD_THINGTYPE_ERROR',
    FILTER: 'FILTER_THING_TYPES'
};

export const ModalTypes = {
    KEEP: 'keep',
    ROOM: 'room',
    THING: 'thing',
    DELETE: 'delete'
};

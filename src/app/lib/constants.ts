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

export const ModalTypes = {
    KEEP: 'keep',
    ROOM: 'room',
    THING: 'thing',
    DELETE: 'delete'
};

export enum THING_TYPES {
    LIGHT,
    TEMP,
    WINDOW,
    LOCK,
    HALL
}

export interface IThing {
    type: THING_TYPES;
    name: string;
    loading: boolean;
}

export class IRoom {
    things: IThing[];
    name: string;
    loading: boolean;
}

export class IHouse {
    rooms: IRoom[];
    loading: boolean;
}
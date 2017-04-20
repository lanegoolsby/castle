import { IRoom } from '../reducers/room';

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


export class IHouse {
    rooms: IRoom[];
    loading: boolean;
}

export interface IAppState {
    count: number;
    house: IHouse[];
}

export interface ITemp {
    count: number;
}

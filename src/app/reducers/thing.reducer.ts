export enum THING_TYPES {
    LIGHT,
    TEMP,
    WINDOW,
    LOCK,
    HALL
}

export class IThing {
    type: THING_TYPES;
    name: string;
    loading: boolean;
}

export interface Things extends Array<IThing> { };

// const INITIAL_STATE = []

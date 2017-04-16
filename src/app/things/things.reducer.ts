import { Action } from 'redux';
import { ThingActions } from './things.actions';
import { IAppState } from '../store/root.types';

export const INITIAL_STATE: IAppState = {
    count: 0
};

export function roomReducer(lastState: IAppState = INITIAL_STATE, action: Action): IAppState {
    switch (action.type) {
        case ThingActions.INCREMENT: return { count: lastState.count + 1 };
        case ThingActions.DECREMENT: return { count: lastState.count - 1 };
    }

    return lastState;
}

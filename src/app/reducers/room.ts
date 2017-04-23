import { Action } from 'redux';
import { Thing } from '../reducers/thing';
import { RoomConstants } from '../lib/constants';

export class Room {
  things: Thing[];
  name: string;
  loading: boolean;
}

export function RoomReducer(state = [], action: Action) {
  switch (action.type) {
    case RoomConstants.CREATE:
      console.log('Adding room');
      break;
    case RoomConstants.EDIT:
      console.log('Editing room');
      break;
    case RoomConstants.DELETE:
      console.log('Deleting room');
      break;
    case RoomConstants.ADD_THING:
      console.log('Adding thing to room');
      break;
  }
  return state;
}

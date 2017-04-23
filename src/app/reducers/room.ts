import { RoomConstants } from '../lib/constants';

export class Room {
  id: number;
  keepId: number;
  name: string;
  loading: boolean;
}

let InitialState = [{
  id: 1,
  keepId: 1,
  name: 'Living Room',
  loading: false
}];

export function RoomReducer(state = InitialState, action) {
  switch (action.type) {
    case RoomConstants.GET_KEEP_ROOMS:
      return state.filter(r => r.keepId === action.payload.id);
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

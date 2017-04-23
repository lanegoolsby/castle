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
}, {
  id: 4,
  keepId: 1,
  name: 'Kitchen',
  loading: false
}, {
  id: 2,
  keepId: 2,
  name: 'Bedroom',
  loading: false
}, {
  id: 3,
  keepId: 3,
  name: 'Mailbox',
  loading: false
}, {
  name: 'Johnny\'s room',
  keepId: 1,
  id: 5,
  loading: false
}];

export function RoomReducer(state = InitialState, action) {
  switch (action.type) {
    case RoomConstants.CREATE:
      console.log('Adding room');
      break;
    case RoomConstants.EDIT:
      console.log('Editing room');
      break;
    case RoomConstants.DELETE:
      console.log('Deleting room');
      let idx = state.indexOf(action.payload);
      return [
        ...state.slice(0, idx),
        ...state.slice(idx + 1)];
    case RoomConstants.ADD_THING:
      console.log('Adding thing to room');
      break;
  }
  return state;
}

import { RoomConstants } from '../lib/constants';
import { Room } from 'model/index';

let InitialState: Room[] = [{
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
  keepId: 3,
  name: 'Bedroom',
  loading: false
}, {
  id: 3,
  keepId: 2,
  name: 'Mailbox',
  loading: false
}, {
  name: 'Johnny\'s room',
  keepId: 1,
  id: 5,
  loading: false
}];

// TODO: This really needs to be extracted into an interface
export function RoomReducer(state = InitialState, action) {
  switch (action.type) {
    case RoomConstants.CREATE:
      console.log('Adding room');
      // TODO: make this use real ID's and not randoms
      action.payload.id = Math.random();
      return [...state, action.payload];
    case RoomConstants.EDIT:
      console.log('Editing room');
      for (let x = 0; x < state.length; x++) {
        if (state[x].id === action.payload.id) {
          state[x] = action.payload;
          break;
        }
      }
      return [...state];
    case RoomConstants.DELETE:
      console.log('Deleting room');
      let a = state.filter(i => i.id !== action.payload.id);
      return [...a];
    case RoomConstants.ADD_THING:
      console.log('Adding thing to room');
      break;
    default:
      return state;
  }
}

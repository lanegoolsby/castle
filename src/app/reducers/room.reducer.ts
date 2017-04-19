import { IThing } from '../reducers/thing.reducer';
import { RoomActions } from '../actions/room.actions';

export class IRoom {
  things: IThing[];
  name: string;
  loading: boolean;
}

export interface RoomState extends Array<IRoom> { };

const INITIAL_STATE = [];

/*const getNextId = (todos) => {
  todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1
}*/

export default function RoomReducer(state = INITIAL_STATE, action): RoomState {
  switch (action.type) {
    case RoomActions.ADD_ROOM:
      const operation: IRoom = action.payload;
      return [...state, operation];

    case RoomActions.DELETE_ROOM:
      return state.filter(todo =>
        todo.id !== action.id
      );

    default:
      return state;
  }
}

import {
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_BEGIN,
  SEND_MESSAGE_FAILED
} from '../actions';
import initialState from './initialState';

export default function messageReducer(state = initialState.messages, action) {
  switch(action.type) {
    case SEND_MESSAGE_BEGIN:
      return state;

      case SEND_MESSAGE_SUCCESS:
      return [...state, action.payload];

    case SEND_MESSAGE_FAILED:
      return {
        ...state,
        error: action.payload.error
      };

    default:
      return state;
  }
}

import {
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_BEGIN,
  SEND_MESSAGE_FAILED
} from '../actions';

const initialState = {
  messages: [],
  error: null
};

export default function messageReducer(state = initialState, action) {
  switch(action.type) {
    case SEND_MESSAGE_BEGIN:
      return {
        ...state,
        error: null
      };

    case SEND_MESSAGE_SUCCESS:
      return {
        ...state,
        messages: action.payload.messages
      };

    case SEND_MESSAGE_FAILED:
      return {
        ...state,
        error: action.payload.error
      };

    default:
      return state;
  }
}

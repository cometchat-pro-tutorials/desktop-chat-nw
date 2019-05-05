import { SEND_MESSAGE } from '../actions'

const initialState = {
  messages: []
};

function messageReducer(state, action) {
  if (typeof state === 'undefined') {
    return initialState;
  }

  if (action.type === SEND_MESSAGE) {
    return Object.assign({}, state, {
      message: action.message
    });
  }
  return state;
}

export default messageReducer;

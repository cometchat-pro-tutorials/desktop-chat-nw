import {
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGIN_BEGIN
} from '../actions';
import initialState from './initialState';

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_BEGIN:
      return {
        ...state,
        error: null
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        connected: true
      };

    case LOGIN_FAILED:
      return {
        ...state,
        connected: false,
        error: action.payload.error
      };

    default:
      return state;
  }
}

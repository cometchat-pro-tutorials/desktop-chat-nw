import {
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGIN_BEGIN
} from '../actions';
import initialState from './initialState';

export default function loginReducer(state = initialState.connected, action) {
  switch (action.type) {
    case LOGIN_BEGIN:
      return state;

    case LOGIN_SUCCESS:
      return true;

    case LOGIN_FAILED:
      return false;

    default:
      return state;
  }
}

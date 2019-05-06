import {
  INIT_FAILED,
  INIT_SUCCESS,
  INIT_BEGIN
} from '../actions';
import initialState from './initialState';

export default function initReducer(state = initialState, action) {
  switch (action.type) {
    case INIT_BEGIN:
      return {
        ...state,
        error: null
      };

    case INIT_SUCCESS:
      return {
        ...state,
        initialized: true
      };

    case INIT_FAILED:
      return {
        ...state,
        initialized: false,
        error: action.payload.error
      };

    default:
      return state;
  }
}

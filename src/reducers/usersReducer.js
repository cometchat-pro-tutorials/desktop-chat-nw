import {
    GET_USER_LIST_SUCCESS,
    GET_USER_LIST_BEGIN,
    GET_USER_LIST_FAILED
} from '../actions';
import initialState from './initialState';

export default function messageReducer(state = initialState.users, action) {
    switch(action.type) {
        case GET_USER_LIST_BEGIN:
            return state;

        case GET_USER_LIST_SUCCESS:
            return [...state, action.payload];

        case GET_USER_LIST_FAILED:
            return {
                ...state,
                error: action.payload.error
            };

        default:
            return state;
    }
}

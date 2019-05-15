import {
    SEND_MESSAGE_SUCCESS,
    SEND_MESSAGE_BEGIN,
    SEND_MESSAGE_FAILED, MESSAGE_RECEIVED, FETCH_GROUP_CONVERSATIONS_SUCCESS
} from '../actions';
import initialState from './initialState';

export default function messageReducer(state = initialState.messages, action) {
    switch (action.type) {
        case SEND_MESSAGE_BEGIN:
            return state;

        case SEND_MESSAGE_SUCCESS:
            return [...state, action.payload];

        case SEND_MESSAGE_FAILED:
            return {
                ...state,
                error: action.payload.error
            };

        case FETCH_GROUP_CONVERSATIONS_SUCCESS:
            return [...state, ...action.payload.conversations];

        case
        MESSAGE_RECEIVED:
            return [...state, action.payload];

        default:
            return state;
    }
}

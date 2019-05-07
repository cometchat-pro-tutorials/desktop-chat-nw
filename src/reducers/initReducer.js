import {
    INIT_FAILED,
    INIT_SUCCESS,
    INIT_BEGIN
} from '../actions';
import initialState from './initialState';

export default function initReducer(state = initialState.initialized, action) {
    switch (action.type) {
        case INIT_BEGIN:
            return state;

        case INIT_SUCCESS:
            return true;

        case INIT_FAILED:
            return false;

        default:
            return state;
    }
}

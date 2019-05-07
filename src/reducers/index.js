import { combineReducers } from 'redux'
import init from './initReducer'
import login from './loginReducer'
import messages from './messageReducer'

const rootReducer = combineReducers({
    initialized: init,
    connected: login,
    messages
});

export default rootReducer

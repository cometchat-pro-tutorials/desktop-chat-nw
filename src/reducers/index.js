import { combineReducers } from 'redux'
import init from './initReducer'
import login from './loginReducer'
import messages from './messageReducer'
import users from './usersReducer'

const rootReducer = combineReducers({
    initialized: init,
    connected: login,
    messages,
    users
});

export default rootReducer

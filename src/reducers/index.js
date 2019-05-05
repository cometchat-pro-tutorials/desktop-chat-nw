import { combineReducers } from 'redux'
import messages from './messageReducer'

const rootReducer = combineReducers({
  messages
});

export default rootReducer

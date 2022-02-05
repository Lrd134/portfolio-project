import { combineReducers } from 'redux';
import UserReducer from '../../users/UserReducer';
const RootReducer = combineReducers({
  users: UserReducer
})

export default RootReducer

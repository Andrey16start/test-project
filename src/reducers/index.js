import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import userReducer from '../ducks/user';


export default combineReducers({
  form: formReducer,
  user: userReducer,
});
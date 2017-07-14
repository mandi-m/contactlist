// Required libraries
import { combineReducers } from 'redux';

// Required files
import contactsReducer from './contacts';

export default combineReducers({
  contacts: contactsReducer
});


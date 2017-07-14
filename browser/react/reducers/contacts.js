// Required libraries
import axios from 'axios';

// ----------- Actions
const FETCH_CONTACTS = 'FETCH_CONTACTS';

// ----------- Action Creators
export const receiveContacts = (contacts) => {
  return {
    type: FETCH_CONTACTS,
    contacts
  };
};

// ----------- Reducer
const initialState = {
  allContacts: []
};

export default function reducer (prevState = initialState, action) {
  const nextState = Object.assign({}, prevState);

  switch (action.type) {
    case FETCH_CONTACTS: {
      nextState.allContacts = action.contacts;
      break;
    }
  }

  return nextState;
}

// ----------- Dispatchers
export const fetchContacts = () => {
  return (dispatch) => {
    axios.get('api/contacts/')
      .then(response => {
        dispatch(receiveContacts(response.data));
      })
      .catch(console.error);
  };
};

export const addContact = (contactData) => (dispatch) => {
    axios.post('api/contacts/', contactData)
      .then( () => {
        dispatch(fetchContacts());
      })
      .catch(console.error);
}

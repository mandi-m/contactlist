// Required libraries
import axios from 'axios';

// ----------- Actions
const FETCH_CONTACTS = 'FETCH_CONTACTS';
const DELETE_CONTACTS = 'DELETE_CONTACTS';

// ----------- Actions for redux-api-request
export const FETCH_REQUEST = 'FETCH_REQUEST'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAILURE = 'FETCH_FAILURE'

// ----------- Action Creators
export const receiveContacts = (contacts) => {
  return {
    type: FETCH_CONTACTS,
    contacts
  };
};


// ----------- Action Creator from redux-api-request
import { API_REQUEST } from 'redux-api-request'

export const getContacts = () => ({
  type: API_REQUEST,
  method: 'GET',
  endpoint: '/contacts',
  // body: {  },
  request: FETCH_REQUEST,
  success: FETCH_CONTACTS,
  failure: FETCH_FAILURE
})


// ----------- Reducer
const initialState = {
  allContacts: [],
  status: 'pending',
  result: null
};

export default function reducer (prevState = initialState, action) {
  const nextState = Object.assign({}, prevState);

  switch (action.type) {
    case FETCH_CONTACTS: {
      nextState.allContacts = action.contacts;
      break;
    }
    case FETCH_SUCCESS: {
      nextState.status = 'success',
      nextState.result = action.result
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

export const deleteContacts = (contactToDelete) => (dispatch) => {
    axios.delete(`api/contacts/${contactToDelete}`)
      .then( () => {
        dispatch(fetchContacts());
      })
      .catch(console.error);
}

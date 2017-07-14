// Required libraries
import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { connect } from 'react-redux';

// Required files
import store from './store';
import ContactsTable from './components/ContactsTable.jsx';
import Home from './components/Home.jsx';

// ------------ Component
const Root = (props) => {
  return (
    <Router history={ browserHistory }>
      <Route path="/" component={ Home }>
        <Route path="/contacts" component={ ContactsTable } onEnter={ props.fetchContacts }/>
      </Route>
    </Router>
  );
};

// ------------ Container Component

// Required files
import { fetchContacts } from './reducers/contacts';

const mapStateToProps = (state) => {
  return {

  };
};

const mapDisptachToProps = (dispatch) => {
  return {
    fetchContacts: () => {
      dispatch(fetchContacts());
    }
  };
};

export default connect(mapStateToProps, mapDisptachToProps)(Root);

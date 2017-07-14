// Required libraries
import React from 'react';
import { connect } from 'react-redux';

// ------------- Component
const ContactsTable = (props) => {
  return (
    <div>
      <h1>Contact List</h1>
      <ul>
        { props.contacts.map(contact => (
        <li key={ contact.id }>
          <div>
            <h4>{ contact.first_name }</h4>
          </div>
        </li>
        )) }
      </ul>
    </div>
  );
};

// ------------- Container
const mapStateToProps = (state) => {
  return {
    contacts: state.contacts.allContacts
  };
};

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(ContactsTable);

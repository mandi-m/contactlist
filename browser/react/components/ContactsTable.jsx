// Required libraries
import React from 'react';
import { connect } from 'react-redux';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import { Form, FormGroup, Button, Panel } from 'react-bootstrap'

// ------------- Component
const ContactsTable = (props) => {
  const options = {
  // afterInsertRow: onAfterInsertRow   // A hook for after insert rows
};
  return (
    <div>
      <Panel header={'Contact List'}>
        <h1>Contact List</h1>
        {/* <ul>
        {props.contacts.map(contact => (
          <li key={contact.id}>
            <div>
              <h4>{contact.first_name} {contact.last_name}, {contact.email} </h4>
            </div>
          </li>
        ))}
      </ul> */}
        {
          props.contacts && <BootstrapTable data={props.contacts} insertRow={ true } striped={true} hover={true} options={ options }>
            <TableHeaderColumn dataField="id" hidden={true} isKey={true} dataAlign="center" dataSort={true} >ID</TableHeaderColumn>
            <TableHeaderColumn dataField="first_name" dataSort={true} filter={{ type: 'TextFilter', delay: 100 }}>First Name</TableHeaderColumn>
            <TableHeaderColumn dataField="last_name" dataSort={true} filter={{ type: 'TextFilter', delay: 100 }}>Last Name</TableHeaderColumn>
            <TableHeaderColumn dataField="email" dataSort={true} filter={{ type: 'TextFilter', delay: 100 }}>E-Mail</TableHeaderColumn>
          </BootstrapTable>
        }
      </Panel>
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

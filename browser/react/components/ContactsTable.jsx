// Required libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import { Form, FormGroup, Button, Panel } from 'react-bootstrap'

// ------------- Component
class ContactsTable extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const addContact = this.props.addContact;
    const deleteContacts = this.props.deleteContacts;

    function onAfterInsertRow(row) {
      console.log(row)
      addContact({
        first_name: row.first_name,
        last_name: row.last_name,
        email: row.email
      })
    }

    const options = {
      afterInsertRow: onAfterInsertRow,   // A hook for after insert rows
      handleConfirmDeleteRow: customConfirm
    }

    function customConfirm(next, dropRowKeys) {
      if (confirm(`Are you sure you want to delete the contact(s) with the ID(s) ${dropRowKeys}?`)) {
        deleteContacts(''+dropRowKeys)
        next();
      }
    }

    const selectRowProp = {
      mode: 'checkbox'
    };

    return (
      <div>
        <Panel header={'Contact List'}>
          <h1>Contact List</h1>
          {
            this.props.contacts && <BootstrapTable data={this.props.contacts} insertRow={true} striped={true} hover={true} options={options} exportCSV={ true } deleteRow={ true } selectRow={ selectRowProp } >
              <TableHeaderColumn dataField="id" hidden={true} isKey={true} dataAlign="center" dataSort={true} >ID</TableHeaderColumn>
              <TableHeaderColumn dataField="first_name" dataSort={true} filter={{ type: 'TextFilter', delay: 100 }}>First Name</TableHeaderColumn>
              <TableHeaderColumn dataField="last_name" dataSort={true} filter={{ type: 'TextFilter', delay: 100 }}>Last Name</TableHeaderColumn>
              <TableHeaderColumn dataField="email" dataSort={true} filter={{ type: 'TextFilter', delay: 100 }}>E-Mail</TableHeaderColumn>
            </BootstrapTable>
          }
        </Panel>
      </div>
    )
  }
};

// ------------- Container
import {addContact, deleteContacts} from '../reducers/contacts'

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts.allContacts
  };
};

const mapDispatchToProps = (dispatch) => ({
    addContact: data => dispatch(addContact(data)),
    deleteContacts: data => dispatch(deleteContacts(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactsTable);

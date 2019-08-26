import React, { useReducer } from 'react';
import uuid from 'uuid';

import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types';

const ContactState = props => {
  const initalState = {
    contacts: [
      {
        id: 1,
        name: 'Jim Powell',
        email: 'jim@gmail.com',
        phone: '018-4869236',
        type: 'personal'
      },
      {
        id: 2,
        name: 'Sarah Swanson',
        email: 'sarah@gmail.com',
        phone: '011-8975369',
        type: 'personal'
      },
      {
        id: 3,
        name: 'Cameron Hudson',
        email: 'cameron@gmail.com',
        phone: '019-4641203',
        type: 'professional'
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initalState);

  // Add Contact

  // Delete Contact

  // Set Current Contact

  // Clear Current Contact

  // Update Contact

  // Filter Contacts

  // Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;

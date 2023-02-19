import styles from './Filter.module.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/contacts/contactsSlice';

const Filter = () => {
  const { filterField, filterText, filterInput } = styles;

  const dispatch = useDispatch();

  const filterValue = e => {
    const value = e.target.value.toLowerCase();
    dispatch(filterContacts(value));
  };

  return (
    <div className={filterField}>
      <p className={filterText}>Find contact by name</p>
      <input className={filterInput} type="text" onChange={filterValue} placeholder="Put contact name..." />
    </div>
  );
};

export default Filter;

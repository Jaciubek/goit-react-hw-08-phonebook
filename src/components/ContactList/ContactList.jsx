import styles from './ContactList.module.css';
import { Notification } from 'components/Notification/Notification';
import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { FiDelete } from 'react-icons/fi';
import {
  selectContacts,
  selectFilter,
  selectIsLoading,
} from 'redux/contacts/contactsSelectors';
import { deleteContact } from 'redux/contacts/contactsOperations';
import Loader from 'components/Loader/Loader';

const ContactList = () => {
  const { contactList__wrapper, contactList__text, contactList__button } = styles;

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const filter = useSelector(selectFilter);

  const filteredContacts = useMemo(() => {
    return contacts.filter(c => c.name.toLowerCase().includes(filter));
  }, [contacts, filter]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : filteredContacts.length !== 0 ? (
        <ul className={contactList__wrapper}>
          {filteredContacts.map(contact => {
            return (
              <li className={contactList__text} key={nanoid()}>
                <span>
                  {`${contact.name}:
               ${contact.number}`}
                </span>
                <button
                  type="button"
                  className={contactList__button}
                  onClick={() => dispatch(deleteContact(contact.id))}
                >
                  <FiDelete />
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <Notification message="Your phonebook is empty" />
      )}
    </>
  );
};

export default ContactList;
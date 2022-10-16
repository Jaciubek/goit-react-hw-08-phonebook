import styles from './ContactList.module.css';
import { Notification } from 'components/Notification/Notification';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import Loader from 'components/Loader/Loader';
import { useGetContactsQuery, useDeleteContactMutation } from 'services/contactsApi';

const ContactList = () => {
  const { contactList__wrapper, contactList__text, contactList__button } = styles;

  const {
    data: contacts = [],
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetContactsQuery();

  const filter = useSelector(state => state.filter);
  const [deleteItemContact] = useDeleteContactMutation();

  const filteredContacts = useMemo(() => {
    return contacts.filter(c => c.name.toLowerCase().includes(filter));
  }, [contacts, filter]);

  let content;

  if (isLoading) {
    content = <Loader />;
  } else if (isSuccess) {
    filteredContacts.length !== 0
      ? (content = (
          <ul className={contactList__wrapper}>
            {filteredContacts.map(contact => {
              return (
                <li className={contactList__text} key={nanoid()}>
                  <span>
                    {`${contact.name}:
               ${contact.phone}`}
                  </span>
                  <button
                    type="button"
                    className={contactList__button}
                    onClick={() => deleteItemContact({ id: contact.id })}
                  >
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        ))
      : (content = <Notification message="Your phonebook is empty" />);
  } else if (isError) {
    content = <Notification message={error} />;
  }

  return <>{content}</>;
};

export default ContactList;

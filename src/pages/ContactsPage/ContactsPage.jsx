import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Section from '../../components/Section/Section';
import ContactForm from '../../components/ContactForm/ContactForm';
import React from 'react';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import { selectIsLoading } from 'redux/contacts/contactsSelectors';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import Loader from 'components/Loader/Loader';
import { useAuth } from 'hooks';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const { user } = useAuth();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Section title={`Welcome ${user.name} in your phonebook`}>
        <ContactForm />
      </Section>
      <Section title="Your contacts">
        <>
          <Filter />
          {isLoading ? <Loader /> : <ContactList />}
        </>
      </Section>
    </>
  );
};

export default ContactsPage;

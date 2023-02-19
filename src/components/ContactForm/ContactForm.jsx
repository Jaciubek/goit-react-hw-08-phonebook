import styles from './ContactForm.module.css';
import { Button } from 'components/Button/Button';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import { addContact } from 'redux/contacts/contactsOperations';

const ContactForm = () => {
  const { contactForm, contactForm__field, contactLabel, contactInput } = styles;

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const onSubmit = async e => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const number = form.number.value;

    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    if (contacts.some(contact => contact.number === number)) {
      const [filteredNumber] = contacts.filter(
        contact => contact.number === number
      );
      alert(`${number} is already in contact with ${filteredNumber.name} `);
      return;
    }

    try {
      await dispatch(
        addContact({
          name,
          number,
        })
      );
    } catch (error) {
      alert(`Failed to save the contact`);
    }
    form.reset();
  };

  return (
    <form className={contactForm} onSubmit={onSubmit}>
      <div className={contactForm__field}>
        <label htmlFor="contactName" className={contactLabel}>
          Name
        </label>
        <input
          className={contactInput}
          id="contactName"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder='Put contact name...'
          required
        />
      </div>
      <div className={contactForm__field}>
        <label htmlFor="contactTel" className={contactLabel}>
          Phone number
        </label>
        <input
          className={contactInput}
          id="contactTel"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder='Put contact phone number...'
          required
        />
      </div>
      <Button type="submit" title="Add contact"></Button>
    </form>
  );
};

export default ContactForm;

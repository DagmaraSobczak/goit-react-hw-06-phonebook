import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import { addContact, deleteContact } from '../redux/contactSlice';
import { setFilter } from '../redux/filtersSlice';
import { getContacts, getFilter } from '../redux/selectors';

const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFormSubmit = (name, number) => {
    let existContact = contacts.find(
      contact => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (existContact) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    dispatch(addContact(newContact));
  };

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name?.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onFormSubmit={handleFormSubmit} />
      <Filter filteredContacts={handleFilterChange} />
      <h2>Contacts</h2>

      <ContactsList contacts={filteredContacts} onDelete={handleDelete} />
    </>
  );
};

export default App;

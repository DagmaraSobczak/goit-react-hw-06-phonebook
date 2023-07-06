import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import Contacts from './Contacts/Contacts.json';

const App = () => {
  const [contacts, setContacts] = useState(Contacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

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
      number: number, // Dodaj właściwość number do nowego kontaktu
    };

    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const deleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm
        /*name={name}*/
        onFormSubmit={handleFormSubmit}
      />
      <Filter filteredContacts={handleFilterChange} />
      <h2>Contacts</h2>
      <ContactsList contacts={filteredContacts} onDelete={deleteContact} />
    </>
  );
};

export default App;

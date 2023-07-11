import React, { useState } from 'react';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';

import { addContact } from '../../redux/contactSlice';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    if (event.target.name === 'name') {
      setName(event.target.value);
    } else if (event.target.name === 'number') {
      setNumber(event.target.value);
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addContact({ name, number }));
    reset();
  };

  return (
    <form className={css.wrapper} onSubmit={handleSubmit}>
      <label className={css.label} htmlFor="nameInput">
        Name
      </label>
      <input
        className={css.input}
        type="text"
        id="nameInput"
        name="name"
        value={name}
        onChange={handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <label className={css.label} htmlFor="numberInput">
        Number
      </label>
      <input
        className={css.input}
        type="tel"
        id="numberInput"
        name="number"
        value={number}
        onChange={handleChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <button className={css.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;

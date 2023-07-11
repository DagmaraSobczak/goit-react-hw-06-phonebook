import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { getStoredContacts } from '../components/storedContacts';

const contactsInitialState = getStoredContacts();

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, { payload }) {
        state.push({ ...payload, id: nanoid() });
      },
    },
    deleteContact(state, { payload }) {
      return state.filter(({ id }) => id !== payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

export default contactsSlice;

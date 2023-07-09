import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactSlice';
import { filterReducer } from './filtersSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

export default store;

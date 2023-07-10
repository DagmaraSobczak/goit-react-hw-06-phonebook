export const getStoredContacts = () => {
  const storedContacts = localStorage.getItem('contacts');
  return storedContacts ? JSON.parse(storedContacts) : [];
};

export const saveContacts = contacts => {
  localStorage.setItem('contacts', JSON.stringify(contacts));
};

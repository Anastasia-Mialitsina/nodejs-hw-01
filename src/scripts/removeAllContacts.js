import { writeContacts } from '../utils/writeContacts.js';

const removeAllContacts = async () => {
  await writeContacts([]); 
  console.log('All contacts have been removed!');
};

removeAllContacts();

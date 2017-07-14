// Seed file

const { db, Contact } = require('./index');

const contactData = [
  {
    first_name: 'Alan',
    last_name: 'Turing',
    email: 'aturing@gmail.com'
  },
  {
    first_name: 'Grace',
    last_name: 'Hopper',
    email: 'ghopper@gmail.com'
  },
    {
    first_name: 'Ada',
    last_name: 'Lovelace',
    email: 'alovelace@gmail.com'
  },
    {
    first_name: 'Edsger',
    last_name: 'Dijkstra',
    email: 'edijkstra@gmail.com'
  }
];

db.sync()
  .then(() => {
    const arrPromises = contactData.map(contact => {
      return Contact.create(contact);
    });

    Promise.all(arrPromises).then(() => {
      console.log(`${contactData.length} contacts seeded.`);
    });
  });

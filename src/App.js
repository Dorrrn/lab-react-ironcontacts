import { useState } from "react";
import "./App.css";
import contactsArr from "./contacts.json";

function App() {
  let fiveContacts = contactsArr.slice(0, 5);
  const [contacts, setContacts] = useState(fiveContacts);

  const addRandomContact = () => {
    const randomIndex = Math.floor(Math.random() * contactsArr.length);
    const randomContact = contactsArr[randomIndex];
    setContacts([randomContact, ...contacts]);
  };

  const sortByName = () => {
    const sortedContacts = contactsArr.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    setContacts([...sortedContacts]);
  };

  const sortByPop = () => {
    const sortedContacts = contactsArr.sort((a, b) => {
      return b.popularity - a.popularity;
    });
    setContacts([...sortedContacts]);
  };

  return (
    <div className="App">
      <h1>Iron Contacts</h1>
      <button onClick={addRandomContact}>Add random contact</button>
      <button onClick={sortByName}>Sort by name</button>
      <button onClick={sortByPop}>Sort by popularity</button>

      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an oscar</th>
          <th>Won an emmy</th>
        </tr>
        {contacts.map((contact) => {
          return (
            <tr>
              <td>
                <img
                  src={contact.pictureUrl}
                  alt={contact.name}
                  className="img-contact"
                />
              </td>
              <td>{contact.name}</td>
              <td>{Math.round(contact.popularity * 100) / 100}</td>
              <td>{contact.wonOscar && <p>🏆</p>} </td>
              <td>{contact.wonEmmy && <p>🏆</p>} </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;

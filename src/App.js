import { useState } from "react";
import "./App.css";
import contactsArr from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(contactsArr.slice(0, 5));

  const addRandomContact = () => {
    const displayedContacts = [...contacts];
    const randomIndex = Math.floor(Math.random() * (contactsArr.length - 1));
    const randomContact = contactsArr[randomIndex];

    if (!displayedContacts.includes(randomContact)) {
      setContacts([randomContact, ...displayedContacts]);
    } else {
      addRandomContact();
    }
  };

  const sortByName = () => {
    const sortedContacts = [...contacts];
    sortedContacts.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    setContacts(sortedContacts);
  };

  const sortByPop = () => {
    const sortedContacts = [...contacts];
    sortedContacts.sort((a, b) => {
      return b.popularity - a.popularity;
    });
    setContacts(sortedContacts);
  };

  const removeContact = (id) => {
    const filteredContacts = contactsArr.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(filteredContacts);
  };

  return (
    <div className="App">
      <div className="navbar">
        <h1>Movie stars</h1>
      </div>

      <div className="main-content">
        <div className="btn-bar">
          <button onClick={addRandomContact}>Add random contact</button>
          <button onClick={sortByName}>Sort by name</button>
          <button onClick={sortByPop}>Sort by popularity</button>
        </div>
        <table className="center-table">
          <tr className="table-head">
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an oscar</th>
            <th>Won an emmy</th>
            <th>Actions</th>
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
                <td>{contact.wonEmmy && <p>🎖️</p>} </td>
                <td>
                  <button onClick={() => removeContact(contact.id)}>
                    Remove contact
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default App;

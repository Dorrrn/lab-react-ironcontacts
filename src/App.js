import { useState } from "react";
import "./App.css";
import contactsArr from "./contacts.json";

function App() {
  let fiveContacts = contactsArr.slice(0, 5);
  const [contacts, setContacts] = useState(fiveContacts);

  return (
    <div className="App">
      <h1>Iron Contacts</h1>
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
              <td>{contact.popularity}</td>
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

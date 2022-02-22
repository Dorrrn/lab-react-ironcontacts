import { useState } from "react";
import "./App.css";
import contactsArr from "./contacts.json";
import Contacts from "./components/Contacts"

function App() {
  const [contacts, setContacts] = useState(contactsArr.slice(0,5));

  return (
  <div className="App">

<Contacts 
  name = {contacts.name}
  populartiy = {contacts.popularity}
  image = {contacts.pictureUrl}
/>
  </div>
  );
}
export default App;

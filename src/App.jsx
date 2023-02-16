import React, { Component } from 'react';
import Form from 'components/Form';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  fromSubmitHandler = contact => {
    let { contacts } = this.state;
    if (contacts.find(({ name }) => name === contact.name)) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    contacts = [...contacts, contact];
    this.setState({ contacts });
  };

  handleFilter = filter => {
    this.setState({ filter });
  };

  handleContactSearch = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  deleteContact = id => {
    this.setState(prevstate => {
      return {
        contacts: prevstate.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <Form addnewcontact={this.fromSubmitHandler} />

        <Filter searchContact={this.handleFilter} value={this.state.filter} />
        <ContactList
          searchContact={this.handleContactSearch()}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;

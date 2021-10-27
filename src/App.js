import { Component } from 'react';

import { v4 as uuidv4 } from 'uuid';
// uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

import Form from './components/Form';
import Contacts from './components/Contacts';
import s from './App.module.css';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  onFormChange = ({ currentTarget }) => {
    // const name = currentTarget.value;
    // this.setState({ name });
    const name = currentTarget.name;
    const value = currentTarget.value;
    this.setState({
      [name]: value,
    });
  };

  onFormSubmit = e => {
    e.preventDefault();

    const name = e.currentTarget.name.value;
    const number = e.currentTarget.number.value;

    this.setState(({ contacts }) => {
      return {
        contacts: [...contacts, { name, number, id: uuidv4() }],
      };
    });
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <div className={s.app}>
        <h1 className={s.app__title}>Phonebook</h1>
        <Form
          submitHandler={this.onFormSubmit}
          inputHandler={this.onFormChange}
          state={this.state}
        />
        <h2 className={s.app__title}>Contacts</h2>
        <Contacts contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;

import { Component } from 'react';
import s from './Contacts.module.css';

class Contacts extends Component {
  render() {
    const { contacts } = this.props;
    return (
      <div className={s.contacts}>
        <ul className={s.contacts__list}>
          {contacts.map(contact => (
            <li className={s.contacts__item} key={contact.id}>
              {contact.name}: {contact.number}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Contacts;

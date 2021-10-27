import { Component } from 'react';
import s from './Contacts.module.css';

class Contacts extends Component {
  render() {
    const { contacts, filteredContacts, removeHandler } = this.props;

    return (
      <div className={s.contacts}>
        {contacts.length === 0 ? (
          <p className={s.contacts__nothingText}>No contacts added</p>
        ) : (
          <ul className={s.contacts__list}>
            {filteredContacts.length === 0 ? (
              <p className={s.contacts__nothingText}>Nothing found</p>
            ) : (
              filteredContacts.map(contact => (
                <li className={s.contacts__item} key={contact.id}>
                  <p className={s.contacts__text}>
                    {contact.name}: {contact.number}
                  </p>
                  <button
                    className={s.contacts__btn}
                    type="button"
                    onClick={() => removeHandler(contact.id)}
                  >
                    Delete
                  </button>
                </li>
              ))
            )}
          </ul>
        )}
      </div>
    );
  }
}

export default Contacts;

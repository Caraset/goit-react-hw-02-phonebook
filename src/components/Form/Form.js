import { Component } from 'react';
import s from './Form.module.css';

class Form extends Component {
  render() {
    const { state, inputHandler, submitHandler } = this.props;
    const { name, number } = state;
    return (
      <form className={s.form} onSubmit={submitHandler}>
        <label className={s.form__label}>
          Name
          <input
            className={s.form__input}
            onChange={inputHandler}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
          />
          <label className={s.form__label}>
            Number
            <input
              className={s.form__input}
              onChange={inputHandler}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              value={number}
            />
          </label>
        </label>
        <button className={s.form__button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default Form;

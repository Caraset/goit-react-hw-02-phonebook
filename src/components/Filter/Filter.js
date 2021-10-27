import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

class Filter extends Component {
  static propTypes = {
    filterValue: PropTypes.string,
    onInputChange: PropTypes.func,
  };
  render() {
    const { onInputChange, filterValue } = this.props;

    return (
      <div className={s.filter}>
        <p className={s.filter__title}>Find contacts by name</p>
        <input
          className={s.filter__input}
          type="text"
          name="filter"
          onChange={onInputChange}
          value={filterValue}
        />
      </div>
    );
  }
}

export default Filter;

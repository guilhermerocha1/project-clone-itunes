import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/Search.css';

class Form extends Component {
  render() {
    const {
      className,
      placeholder,
      tidInput,
      tidBtn,
      id,
      value,
      onChange,
      onClick,
      txtBtn,
      disabled,
    } = this.props;

    return (
      <div className={className}>
        <input
          data-testid={tidInput}
          type="text"
          placeholder={placeholder}
          id={id}
          value={value}
          onChange={onChange}
        />
        <button
          data-testid={tidBtn}
          type="submit"
          disabled={!disabled}
          onClick={onClick}
          id='button-search'
        >
          {txtBtn}
        </button>
      </div>
    );
  }
}

Form.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  testInput: PropTypes.string,
  testBtn: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  txtBtn: PropTypes.func,
  disabled: PropTypes.bool,
}.isRequired;

export default Form;

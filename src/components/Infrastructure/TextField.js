import React from 'react';
import PropTypes from 'prop-types';
import { dasherize } from '../../utils';

const TextField = ({ id, name, label, type, value, onChange }) => (
  <div className={`${dasherize(name)}-text-field`}>
    {label &&
      <label htmlFor={name}>
        {label}
      </label>
    }
    <input
      id={id}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
    />
  </div>
);

TextField.defaultProps = {
  type: 'text',
  label: null,
  onChange: null
};

TextField.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.oneOf(["text", "email", "password"]),
  onChange: PropTypes.func
}

export default TextField;

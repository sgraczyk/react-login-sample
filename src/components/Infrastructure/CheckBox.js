import React from 'react';
import PropTypes from 'prop-types';
import { dasherize } from '../../utils';

const CheckBox = ({ id, name, label, type, value, onChange }) => (
  <div className={`${dasherize(name)}-checkbox`}>
    {label &&
      <label htmlFor={name}>
        {label}
      </label>
    }
    <input
      id={id}
      type="checkbox"
      name={name}
      checked={value}
      onChange={onChange}
    />
  </div>
);

CheckBox.defaultProps = {
  label: null,
  onChange: null
};

CheckBox.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func
}

export default CheckBox;

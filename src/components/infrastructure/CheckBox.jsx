import React from 'react';
import PropTypes from 'prop-types';
import { Field, propTypes } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import dasherize from '../../utils/dasherize';

const RenderField = ({
  input, label, type, meta: { touched, error },
}) => (
  <div className={`${dasherize(input.name)}-check-box`}>
    <label htmlFor={input.name}>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && error &&
      <span className="field-error">
        <FormattedMessage id={error.id} />
      </span>}
    </div>
  </div>
);

RenderField.propTypes = {
  ...propTypes.fieldPropTypes,
};

const CheckBox = props => (
  <Field
    {...props}
    type="checkbox"
    component={RenderField}
  />
);

CheckBox.defaultProps = {
  label: null,
};

CheckBox.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
};

export default CheckBox;

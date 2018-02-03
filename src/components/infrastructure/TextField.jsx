import React from 'react';
import PropTypes from 'prop-types';
import { Field, propTypes } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import dasherize from '../../utils/dasherize';

const RenderField = ({
  input, label, type, meta: { touched, error },
}) => (
  <div className={`${dasherize(input.name)}-text-field`}>
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

const TextField = props => (
  <Field
    {...props}
    component={RenderField}
  />
);

TextField.defaultProps = {
  type: 'text',
  label: null,
};

TextField.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.oneOf(['text', 'email', 'password']),
};

export default TextField;

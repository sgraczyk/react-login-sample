import React from 'react';
import PropTypes from 'prop-types';
import { Field, propTypes } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import { TextFieldContainer, Label, Input } from './TextField.styled';
import { ValidationError } from '../../styled';
import dasherize from '../../../utils/dasherize';

const RenderField = ({
  input, label, type, meta: { touched, error },
}) => (
  <TextFieldContainer className={`${dasherize(input.name)}-text-field`}>
    <Label htmlFor={input.name}>{label}</Label>
    <Input {...input} placeholder={label} type={type} />
    {touched && error &&
      <ValidationError>
        <FormattedMessage id={error.id} />
      </ValidationError>
    }
  </TextFieldContainer>
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

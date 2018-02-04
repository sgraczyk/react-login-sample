import React from 'react';
import PropTypes from 'prop-types';
import { Field, propTypes } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import { CheckBoxContainer, Input, Label } from './CheckBox.styled';
import { ValidationError } from '../../styled';
import dasherize from '../../../utils/dasherize';

const RenderField = ({
  input, label, type, meta: { touched, error },
}) => (
  <CheckBoxContainer className={`${dasherize(input.name)}-check-box`}>
    <Input {...input} placeholder={label} type={type} />
    <Label htmlFor={input.name}>{label}</Label>
    {touched && error &&
      <ValidationError>
        <FormattedMessage id={error.id} />
      </ValidationError>}
  </CheckBoxContainer>
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

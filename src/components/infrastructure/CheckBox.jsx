import React from 'react';
import PropTypes from 'prop-types';
import { Field, propTypes } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import dasherize from '../../utils/dasherize';

const CheckBoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 0.3em 0 0.3em 0;
`;

const Input = styled.input`
  margin-bottom: 0.3em;
`;

const Label = styled.label`
  line-height: 1;
`;

const ErrorSpan = styled.span`
  color: #FF0000;
  margin-bottom: 0.3em;
`;

const RenderField = ({
  input, label, type, meta: { touched, error },
}) => (
  <CheckBoxContainer className={`${dasherize(input.name)}-check-box`}>
    <Input {...input} placeholder={label} type={type} />
    <Label htmlFor={input.name}>{label}</Label>
    {touched && error &&
      <ErrorSpan>
        <FormattedMessage id={error.id} />
      </ErrorSpan>}
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

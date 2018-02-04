import React from 'react';
import PropTypes from 'prop-types';
import { Field, propTypes } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import dasherize from '../../utils/dasherize';

const TextFieldContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const Label = styled.label`
  padding: 0.3em 0 0.3em 0;
`;

const ErrorSpan = styled.span`
  color: #FF0000;
  margin-bottom: 0.3em;
`;

const Input = styled.input`
  color: #384047;
  background-color: #E8EEEF;
  box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
  border: none;
  border-radius: 4px;
  padding: 1em;
  margin-bottom: 0.3em;
  &:focus {
    outline: none;
  }
`;

const RenderField = ({
  input, label, type, meta: { touched, error },
}) => (
  <TextFieldContainer className={`${dasherize(input.name)}-text-field`}>
    <Label htmlFor={input.name}>{label}</Label>
    <Input {...input} placeholder={label} type={type} />
    {touched && error &&
      <ErrorSpan>
        <FormattedMessage id={error.id} />
      </ErrorSpan>
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

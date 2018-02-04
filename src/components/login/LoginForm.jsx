import React from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import { reduxForm, propTypes } from 'redux-form';
import styled from 'styled-components';
import { CheckBox, TextField } from '../infrastructure';

const Form = styled.form`
  background-color: #FFFFFF;
  padding: 2em;
  padding-bottom: 3em;
  border-radius: 8px;
  max-width: 400px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 10px 40px -14px rgba(0,0,0,0.25);
`;

const H2 = styled.h2`
  font-weight: 700;
  color: #384047;
  text-align: center;
  line-height: 1.5em;
  margin-bottom: 1.2em;
  margin-top: 0.2em;
`;

const Fieldset = styled.fieldset`
  border: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
`;

const ErrorSpan = styled.span`
  color: #FF0000;
  margin-bottom: 0.3em;
`;

const SubmitButton = styled.input`
  font-weight: 600;
  text-align: center;
  font-size: 19px;
  color: #FFFFFF;
  background-color: #4CAF50;
  width: 100%;
  border: none;
  border-radius: 4px;
  padding: 0.8em;
  margin-top: 1em;
  margin-bottom: 1em;
  cursor: pointer;
  overflow: hidden;
  transition: all 200ms ease-in-out;
  box-shadow: 0px 2px 6px rgba(0,0,0,0.3);
  &:hover {
    box-shadow: 0px 6px 10px rgba(0,0,0,0.3);
    transform: translateY(-4px);
  }
`;

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = {
      id: 'login.required',
    };
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = {
      id: 'login.invalidEmail',
    };
  }
  if (!values.password) {
    errors.password = {
      id: 'login.required',
    };
  } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(values.password)) {
    errors.password = {
      id: 'login.invalidPassword',
    };
  }
  return errors;
};

const LoginForm = ({
  intl, error, handleSubmit, submitting,
}) => (
  <Form onSubmit={handleSubmit}>
    <H2><FormattedMessage id="login.header" /></H2>
    <Fieldset>
      <TextField
        id="login-email"
        name="email"
        type="email"
        label={intl.formatMessage({ id: 'login.email' })}
      />
      <TextField
        id="login-password"
        name="password"
        type="password"
        label={intl.formatMessage({ id: 'login.password' })}
      />
      <CheckBox
        id="login-remember"
        name="rememberMe"
        label={intl.formatMessage({ id: 'login.rememberMe' })}
        value
        onChange={() => {}}
      />
      {error &&
      <ErrorSpan>
        <FormattedMessage id={error.id} />
      </ErrorSpan>}
      <SubmitButton type="submit" disabled={submitting} value={intl.formatMessage({ id: 'login.submit' })} />
    </Fieldset>
  </Form>
);

LoginForm.propTypes = {
  intl: intlShape.isRequired,
  ...propTypes,
};

export default injectIntl(reduxForm({
  form: 'loginForm',
  validate,
})(LoginForm));

import React from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import { reduxForm, propTypes } from 'redux-form';
import styled from 'styled-components';
import { CheckBox, TextField } from '../infrastructure';

const SubmitButton = styled.input`
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #4CAF50;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #FFFFFF;
  font-size: 14px;
  transition: all 0.3 ease;
  cursor: pointer;
`;

const Fieldset = styled.fieldset`
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
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
  <form onSubmit={handleSubmit}>
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
      <strong>
        <FormattedMessage id={error.id} />
      </strong>}
      <SubmitButton type="submit" disabled={submitting} value={intl.formatMessage({ id: 'login.submit' })} />
    </Fieldset>
  </form>
);

LoginForm.propTypes = {
  intl: intlShape.isRequired,
  ...propTypes,
};

export default injectIntl(reduxForm({
  form: 'loginForm',
  validate,
})(LoginForm));

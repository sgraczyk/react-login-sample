import React from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import { reduxForm, propTypes } from 'redux-form';
import { CheckBox, TextField } from '../infrastructure';

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
    <fieldset>
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
      <input type="submit" disabled={submitting} value={intl.formatMessage({ id: 'login.submit' })} />
    </fieldset>
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

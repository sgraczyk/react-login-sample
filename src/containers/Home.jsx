import React from 'react';
import { injectIntl, intlShape } from 'react-intl';

const Home = ({ intl }) => (
  <div className="login-container">
    <h2>{intl.formatMessage({ id: 'home.header' })}</h2>
  </div>
);

Home.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(Home);

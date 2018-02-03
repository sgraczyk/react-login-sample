import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import AuthActions from '../actions/auth';

const Home = ({ user, onLogout }) => (
  <div className="home-container">
    <h2>
      <FormattedMessage id="home.header" />
    </h2>
    <FormattedMessage
      id="home.welcome"
      values={{ email: user.email }}
    />
    <a
      role="button"
      tabIndex={0}
      onClick={onLogout}
      onKeyDown={() => { }}
    >
      <FormattedMessage
        id="home.logout"
      />
    </a>
  </div>
);

Home.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
  }).isRequired,
  onLogout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  user: state.auth.user,
});

const mapDispatchToProps = dispatch => ({
  onLogout: () => dispatch(AuthActions.logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

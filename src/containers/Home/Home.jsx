import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { injectIntl, FormattedMessage } from 'react-intl';
import { HomeContainer, WelcomeSpan } from './Home.styled';
import AuthActions from '../../actions/auth.actions';
import { AnchorButton, H2 } from '../../components/styled';

const Home = ({ user, onLogout }) => (
  <HomeContainer>
    <H2>
      <FormattedMessage id="home.header" />
    </H2>
    <WelcomeSpan>
      <FormattedMessage
        id="home.welcome"
        values={{ email: user.email }}
      />
    </WelcomeSpan>
    <AnchorButton
      role="button"
      tabIndex={0}
      onClick={onLogout}
      onKeyDown={() => { }}
    >
      <FormattedMessage
        id="home.logout"
      />
    </AnchorButton>
  </HomeContainer>
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

export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(Home));

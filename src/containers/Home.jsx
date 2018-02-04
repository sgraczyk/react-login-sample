import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { injectIntl, FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import AuthActions from '../actions/auth';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
`;

const H2 = styled.h2`
  font-weight: 700;
  color: #384047;
  text-align: center;
  line-height: 1.5em;
  margin-bottom: 1.2em;
  margin-top: 0.2em;
`;

const WelcomeSpan = styled.span`
  margin-bottom: 1.2em;
  margin-top: 0.2em;
`;

const Anchor = styled.a`
  background-color: #4CAF50;
  color: #FFFFFF;
  padding: 14px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  &:hover, &:active {
      background-color: #4CAFAA;
  }
`;

const Home = ({ user, onLogout }) => (
  <HomeContainer className="home-container">
    <H2>
      <FormattedMessage id="home.header" />
    </H2>
    <WelcomeSpan>
      <FormattedMessage
        id="home.welcome"
        values={{ email: user.email }}
      />
    </WelcomeSpan>
    <Anchor
      role="button"
      tabIndex={0}
      onClick={onLogout}
      onKeyDown={() => { }}
    >
      <FormattedMessage
        id="home.logout"
      />
    </Anchor>
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

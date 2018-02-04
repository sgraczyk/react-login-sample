import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from './';
import changeLocale from '../actions/i18n';

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 6%;
  margin: 0;
`;

const Layout = ({ children, currentLocale, onLocaleChange }) => (
  <div className="app-layout">
    <Header onLocaleChange={onLocaleChange} currentLocale={currentLocale} />
    <FlexContainer>
      {children}
    </FlexContainer>
  </div>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  onLocaleChange: PropTypes.func.isRequired,
  currentLocale: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  currentLocale: state.i18n.locale.toLowerCase().split(/[_-]+/)[0],
  ...state,
});

const mapDispatchToProps = dispatch => ({
  onLocaleChange: locale => dispatch(changeLocale(locale)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));

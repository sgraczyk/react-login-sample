import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Header } from './';
import changeLocale from '../actions/i18n';

const Layout = ({ children, onLocaleChange }) => (
  <div className="app-layout">
    <Header onLocaleChange={onLocaleChange} />
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  onLocaleChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  onLocaleChange: locale => dispatch(changeLocale(locale)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));

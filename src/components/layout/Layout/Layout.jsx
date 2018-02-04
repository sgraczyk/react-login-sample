import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Header } from '../';
import { FlexContainer } from './Layout.styled';
import I18nActions from '../../../actions/i18n.actions';

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
  currentLocale: state.i18n.locale,
  ...state,
});

const mapDispatchToProps = dispatch => ({
  onLocaleChange: locale => dispatch(I18nActions.changeLocale(locale)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));

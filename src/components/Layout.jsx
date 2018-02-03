import React from 'react';
import PropTypes from 'prop-types';
import { Header } from './';

const Layout = ({ children, onLocaleChange }) => (
  <div className="app-layout">
    <Header onLocaleChange={onLocaleChange} />
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  onLocaleChange: PropTypes.func.isRequired,
};

export default Layout;

import React from 'react';
import PropTypes from 'prop-types';
import { LocaleSwitch } from './';
import languages from '../constants/languages';

const Header = ({ onLocaleChange }) => (
  <header className="app-header">
    <LocaleSwitch
      languages={languages}
      onLocaleChange={onLocaleChange}
    />
  </header>
);

Header.propTypes = {
  onLocaleChange: PropTypes.func.isRequired,
};

export default Header;

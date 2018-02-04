import React from 'react';
import PropTypes from 'prop-types';
import { LocaleSwitch } from './';
import languages from '../constants/languages';

const Header = ({ onLocaleChange, currentLocale }) => (
  <header className="app-header">
    <LocaleSwitch
      languages={languages}
      onLocaleChange={onLocaleChange}
      value={currentLocale}
    />
  </header>
);

Header.propTypes = {
  onLocaleChange: PropTypes.func.isRequired,
  currentLocale: PropTypes.string.isRequired,
};

export default Header;

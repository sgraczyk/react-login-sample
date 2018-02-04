import React from 'react';
import PropTypes from 'prop-types';
import LocaleSelect from '../../features';
import languages from '../../../constants/languages';

const Header = ({ onLocaleChange, currentLocale }) => (
  <header>
    <LocaleSelect
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

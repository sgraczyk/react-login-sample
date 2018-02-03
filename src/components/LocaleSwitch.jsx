import React from 'react';
import PropTypes from 'prop-types';

const LocaleSwitch = ({ languages, onLocaleChange }) => (
  <header className="app-header">
    {languages && languages.map((language, index) => (
      <a
        role="button"
        tabIndex={index}
        onClick={() => onLocaleChange(language.locale)}
        onKeyDown={() => { }}
        key={`language-${language.locale}`}
      >
        {language.name}
      </a>
    ))
    }
  </header>
);

LocaleSwitch.propTypes = {
  languages: PropTypes.arrayOf(PropTypes.shape({
    locale: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  onLocaleChange: PropTypes.func.isRequired,
};

export default LocaleSwitch;

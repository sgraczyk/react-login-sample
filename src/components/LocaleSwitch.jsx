import React from 'react';
import PropTypes from 'prop-types';

const LocaleSwitch = ({ languages, onLocaleChange }) => (
  <header className="app-header">
    {languages && languages.map(language => (
      <a
        role="button"
        tabIndex={0}
        onClick={() => onLocaleChange(language.locale)}
        onKeyDown={() => { }}
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
    code: PropTypes.string.isRequired,
  })).isRequired,
  onLocaleChange: PropTypes.func.isRequired,
};

export default LocaleSwitch;

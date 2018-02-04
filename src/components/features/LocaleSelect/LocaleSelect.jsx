import React from 'react';
import PropTypes from 'prop-types';
import { Select } from './LocaleSelect.styled';

const LocaleSelect = ({ languages, value, onLocaleChange }) => (
  <Select onChange={event => onLocaleChange(event.target.value)} value={value}>
    {
      languages && languages.map(language => (
        <option
          value={language.locale}
          key={language.locale}
        >
          {language.name}
        </option>
      ))
    }
  </Select>
);

LocaleSelect.propTypes = {
  languages: PropTypes.arrayOf(PropTypes.shape({
    locale: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  onLocaleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default LocaleSelect;

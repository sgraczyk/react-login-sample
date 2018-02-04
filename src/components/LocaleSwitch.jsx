import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Select = styled.select`
  margin: 8px;
  padding: 4px;
`;

const LocaleSwitch = ({ languages, value, onLocaleChange }) => (
  <header className="app-header">
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
  </header>
);

LocaleSwitch.propTypes = {
  languages: PropTypes.arrayOf(PropTypes.shape({
    locale: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  onLocaleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default LocaleSwitch;

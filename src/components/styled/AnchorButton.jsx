import styled from 'styled-components';
import StyledVariables from '../../constants/styled-variables';

const AnchorButton = styled.a`
  background-color: ${StyledVariables.colors.primary};
  color: ${StyledVariables.colors.white};
  border-radius: ${StyledVariables.properties.borderRadius};
  padding: 14px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  &:hover, &:active {
      background-color: ${StyledVariables.colors.secondary};
  }
`;

export default AnchorButton;

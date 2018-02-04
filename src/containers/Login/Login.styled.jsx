import styled from 'styled-components';
import StyledVariables from '../../constants/styled-variables';

export const Fieldset = styled.fieldset`
  border: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  background-color: ${StyledVariables.colors.white};
  padding: 2em;
  padding-bottom: 3em;
  border-radius: ${StyledVariables.properties.borderRadius};
  max-width: 400px;
  box-shadow: 0 10px 40px -14px rgba(0,0,0,0.25);
`;

export const SubmitButton = styled.input`
  font-weight: 600;
  text-align: center;
  font-size: 19px;
  color: ${StyledVariables.colors.white};
  background-color: ${StyledVariables.colors.primary};
  width: 100%;
  border: none;
  border-radius: ${StyledVariables.properties.borderRadius};
  padding: 0.8em;
  margin-top: 1em;
  margin-bottom: 1em;
  cursor: pointer;
  overflow: hidden;
  transition: all 200ms ease-in-out;
  box-shadow: 0px 2px 6px rgba(0,0,0,0.3);
  &:hover {
    box-shadow: 0px 6px 10px rgba(0,0,0,0.3);
    transform: translateY(-4px);
  }
  &:disabled {
    background-color: ${StyledVariables.colors.dark};
  }
`;

const LoginStyled = {
  Fieldset,
  Form,
  SubmitButton,
};

export default LoginStyled;

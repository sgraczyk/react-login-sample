import styled from 'styled-components';

export const TextFieldContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const Label = styled.label`
  padding: 0.3em 0 0.3em 0;
`;

export const Input = styled.input`
  color: #384047;
  background-color: #E8EEEF;
  box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
  border: none;
  border-radius: 4px;
  padding: 1em;
  margin-bottom: 0.3em;
  &:focus {
    outline: none;
  }
`;

const TextFieldStyled = {
  TextFieldContainer,
  Label,
  Input,
};

export default TextFieldStyled;

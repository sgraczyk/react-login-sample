import styled from 'styled-components';

export const CheckBoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 0.3em 0 0.3em 0;
`;

export const Input = styled.input`
  margin-bottom: 0.3em;
`;

export const Label = styled.label`
  line-height: 1;
`;

const ChekBoxStyled = {
  CheckBoxContainer,
  Input,
  Label,
};

export default ChekBoxStyled;

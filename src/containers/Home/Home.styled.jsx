import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
`;

export const WelcomeSpan = styled.span`
  margin-bottom: 1.2em;
  margin-top: 0.2em;
`;

const HomeStyled = {
  HomeContainer,
  WelcomeSpan,
};

export default HomeStyled;

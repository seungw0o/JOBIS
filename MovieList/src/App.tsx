import styled, { createGlobalStyle } from "styled-components";
import MainRouter from "./routers/MainRouter";
import reset from "styled-reset";

function App(): JSX.Element {
  return (
    <Wrapper>
      <GlobalStyles />
      <MainRouter />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
`;

const GlobalStyles = createGlobalStyle`
  ${reset};
  *{
    box-sizing:border-box;
    margin: 0;
    padding: 0;
  }
  body {
  background-color: black;
  }
`;

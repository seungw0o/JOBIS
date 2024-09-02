import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import MainRouter from "./routes/mainRouter";

function App() {
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
  justify-content: space-between;
`;

const GlobalStyles = createGlobalStyle`
  ${reset};
  *{
    box-sizing:border-box;
    margin: 0;
    padding: 0;
  }
  body {
  background-color: white;
  }
`;

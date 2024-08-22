import styled, { createGlobalStyle } from "styled-components";
import Home from "./pages/home";
import reset from "styled-reset";

function App() {
  return (
    <Wrapper>
      <GlobalStyles />
      <Home />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-between;
`;

const GlobalStyles = createGlobalStyle`
  ${reset};
  *{
    box-sizing:border-box;
  }
  body {
  background-color: white;
  }
`;

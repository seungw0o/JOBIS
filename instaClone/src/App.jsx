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
  display: flex;
  justify-content: space-between;
`;

const GlobalStyles = createGlobalStyle`
  ${reset};
  *{
    box-sizing:border-box;
    margin: 0;
  }
  body {
  background-color: white;
  height:5000px;
  
  }
`;

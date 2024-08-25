import { useState } from "react";
import Peed from "./peed";
import styled from "styled-components";

const PeedBoard = () => {
  const [peeds, setPeeds] = useState([]);
  return (
    <Wrapper>
      <Peed />
    </Wrapper>
  );
};

export default PeedBoard;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
`;

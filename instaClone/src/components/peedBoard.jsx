import { useState } from "react";
import Peed from "./peed";
import styled from "styled-components";

const PeedBoard = () => {
  const [peeds, setPeeds] = useState([]);
  return (
    <Wrapper>
      <Peed name={"ee.j_x0"} time={"10"} exp={"테스트"} />
      <Peed name={"txd.w0_"} time={"1"} exp={"졸리다"} />
      <Peed name={"hi"} time={"200"} exp={"집가자"} />
    </Wrapper>
  );
};

export default PeedBoard;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0px auto;
  box-sizing: border-box;
  flex-direction: column;
`;

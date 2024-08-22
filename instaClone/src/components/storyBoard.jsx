import { useState } from "react";
import styled from "styled-components";
import { Story } from "./story";

const StoryBoard = () => {
  // const [storys, setStorys] = useState([]);
  return (
    <Wrapper>
      {/* {storys.map((story, index) => (
        <Story key={index} name={story.name} />
      ))} */}
      <Story name="kc0821_" />
      <Story name="kc0821_" />
      <Story name="kc0821_" />
      <Story name="kc0821_" />
      <Story name="kc0821_" />
    </Wrapper>
  );
};

export default StoryBoard;

const Wrapper = styled.div`
  display: flex;
  gap: 16px;
  background-color: white;
  border: solid black 1px;
  height: 100px;
  width: 630px;
  padding: 8px 0px;
  margin: 16px 0px 24px;
`;

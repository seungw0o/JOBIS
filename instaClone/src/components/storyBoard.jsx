import styled from "styled-components";
import { Story } from "./story";

const StoryBoard = () => {
  const storys = [
    "kc0821_",
    "kc0821_",
    "kc0821_",
    "kc0821_",
    "kc0821_",
    "kc0821_",
    "kc0821_",
    "kc0821_",
  ];
  return (
    <Wrapper>
      {storys.map((name, index) => (
        <Story key={index} name={name} />
      ))}
    </Wrapper>
  );
};

export default StoryBoard;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  background-color: white;
  height: 100px;
  width: 630px;
  padding: 8px 0px;
  margin: 16px 0px 24px;
`;

import styled from "styled-components";
import StoryBoard from "../components/storyBoard";
import SideMenu from "../components/sideMenu";
import SuggestTab from "../components/suggestTab";
import PeedBoard from "../components/peedBoard";

const Home = () => {
  return (
    <Wrapper>
      <SideMenu />
      <Container>
        <StoryBoard />
        <PeedBoard />
      </Container>
      <RightSide>
        <SuggestTab />
      </RightSide>
    </Wrapper>
  );
};

export default Home;

const RightSide = styled.div`
  display: flex;
  padding-left: 64px;
  box-sizing: border-box;
`;

const Container = styled.div`
  display: flex;
  margin-left: 350px;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0;
`;

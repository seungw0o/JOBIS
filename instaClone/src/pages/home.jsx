import styled from "styled-components";
import StoryBoard from "../components/storyBoard";
import SideMenu from "../components/sideMenu";
import SuggestTab from "../components/suggestTab";

const Home = () => {
  return (
    <Wrapper>
      <SideMenu />
      <Container>
        <StoryBoard />
      </Container>
      <RightSide>
        <SuggestTab />
      </RightSide>
    </Wrapper>
  );
};

export default Home;

const RightSide = styled.div`
  padding: 0px 0px 0px 64px;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 40px; */
  margin: 0;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
`;

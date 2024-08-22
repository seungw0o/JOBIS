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
  display: flex;
  padding: 0px 0px 0px 9px;
`;

const Container = styled.div`
  display: flex;
  margin-left: 350px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  margin: 0;
`;

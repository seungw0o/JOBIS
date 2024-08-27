import styled from "styled-components";
import { Profile } from "./story";
import NavIcons from "../icons/navicons";
import { useState } from "react";

const Peed = ({ name, time, exp }) => {
  const [heartIcon, setHeartIcon] = useState(false);
  const [saveIcon, setSaveIcon] = useState(false);
  const [likes, setLikes] = useState(0);

  const onClick = () => {
    setHeartIcon(!heartIcon);
    heartIcon === true ? setLikes(likes - 1) : setLikes(likes + 1);
  };

  return (
    <Wrapper>
      <InfoField>
        <NameField>
          <Profile
            height={32}
            width={32}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3G8FOX8WmJdD0DWd4xfoi5I1mLjkSjFbFaA&s"
          />
          <UserName>{name} </UserName>
          <Time>• {time}시간</Time>
        </NameField>
        <OptionMore>
          <NavIcons.OptionMore />
        </OptionMore>
      </InfoField>
      <ContentField>
        <Content src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3G8FOX8WmJdD0DWd4xfoi5I1mLjkSjFbFaA&s" />
      </ContentField>
      <div>
        <IconField>
          <Container>
            <HeartBox onClick={() => onClick()}>
              {heartIcon === true ? (
                <NavIcons.Heart selected />
              ) : (
                <NavIcons.Heart />
              )}
            </HeartBox>
            <NavIcons.Reply />
            <NavIcons.Message />
          </Container>
          <SaveBox onClick={() => setSaveIcon(!saveIcon)}>
            {saveIcon === true ? <NavIcons.Save selected /> : <NavIcons.Save />}
          </SaveBox>
        </IconField>
        <div>
          <Text weight={600}>좋아요 {likes}개</Text>
          <ExpField>
            <Text weight={600}>{name}</Text>
            <Text weight={0}>{exp}</Text>
          </ExpField>
        </div>
      </div>
    </Wrapper>
  );
};

export default Peed;
const ExpField = styled.div`
  display: flex;
  margin: 8px 0px 0px;
  gap: 5px;
`;
const Text = styled.span`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 14px;
  font-weight: ${props => props.weight};
  color: #000000;
`;

const SaveBox = styled.div`
  box-sizing: border-box;
`;
const HeartBox = styled.div`
  box-sizing: border-box;
`;

const Container = styled.div`
  display: flex;
  gap: 15px;
`;
const ContentField = styled.div`
  margin: 12px 0px;
`;
const IconField = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;
const Content = styled.img`
  background-size: cover;
  width: 100%;
  height: 100%;
`;
const OptionMore = styled.div`
  display: flex;
`;

const NameField = styled.div`
  display: flex;
`;

const Time = styled.span`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 14px;
  color: #737373;
  width: fit-content;
  height: fit-content;
  margin: 6px;
  margin-left: 3px;
`;

const InfoField = styled.div`
  display: flex;
  justify-content: space-between;
`;

const UserName = styled.span`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 14px;
  color: #000000;
  font-weight: 550;
  width: fit-content;
  height: fit-content;
  margin: 6px;
  margin-left: 11px;
`;

const Wrapper = styled.div`
  display: flex;
  margin: 0px 0px 20px;
  padding: 0px 0px 16px;
  flex-direction: column;
  box-sizing: border-box;
  width: 450px;
  height: 100%;
`;

import styled from "styled-components";
import { Profile } from "./story";
import NavIcons from "../icons/navicons";
import { useState } from "react";

const Peed = () => {
  const [selectedIcon, setSelectedIcon] = useState(null);
  const name = "glittermoon2023";
  const exp = "hi hello";
  const handleClick = iconName => {
    setSelectedIcon(iconName);
  };
  let time = 18;
  let likes = 5;
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
      <BottomField>
        <IconField>
          <Container>
            <HeartBox onClick={() => handleClick("Heart")}>
              {selectedIcon === "Heart" ? (
                <NavIcons.Heart selected />
              ) : (
                <NavIcons.Heart />
              )}
            </HeartBox>
            <NavIcons.Reply />
            <NavIcons.Message />
          </Container>
          <SaveBox onClick={() => handleClick("Save")}>
            {selectedIcon === "Save" ? (
              <NavIcons.Save selected />
            ) : (
              <NavIcons.Save />
            )}
          </SaveBox>
        </IconField>
        <TextField>
          <Likes>좋아요 {likes}개</Likes>
          <ExpField>
            <Name>{name}</Name>
            <Exp>{exp}</Exp>
          </ExpField>
        </TextField>
      </BottomField>
    </Wrapper>
  );
};

export default Peed;
const ExpField = styled.div`
  display: flex;
  margin: 8px 0px 0px;
  gap: 5px;
`;
const Name = styled.span`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #000000;
`;
const Exp = styled.span`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 14px;
  color: #000000;
`;

const Likes = styled.span`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #000000;
`;
const TextField = styled.div``;
const SaveBox = styled.div`
  box-sizing: border-box;
`;
const HeartBox = styled.div`
  box-sizing: border-box;
`;

const BottomField = styled.div``;

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
  gap: 200px;
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
`;

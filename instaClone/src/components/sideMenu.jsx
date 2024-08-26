import styled from "styled-components";
import NavIcons from "../icons/navicons";
import { Profile } from "./story";
import { useState } from "react";

const SideMenu = () => {
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleClick = iconName => {
    setSelectedIcon(iconName);
  };

  return (
    <Wrapper>
      <MenuField>
        <LogoField>
          <NavIcons.LogoText />
        </LogoField>
        <MidIcons>
          <IconContainer onClick={() => handleClick("Home")}>
            {selectedIcon === "Home" ? (
              <>
                <NavIcons.Home selected />
                <MenuName weight={600}>홈</MenuName>
              </>
            ) : (
              <>
                <NavIcons.Home />
                <MenuName weight={0}>홈</MenuName>
              </>
            )}
          </IconContainer>
          <IconContainer onClick={() => handleClick("Search")}>
            {selectedIcon === "Search" ? (
              <>
                <NavIcons.Search selected />
                <MenuName weight={600}>검색</MenuName>
              </>
            ) : (
              <>
                <NavIcons.Search />
                <MenuName weight={0}>검색</MenuName>
              </>
            )}
          </IconContainer>
          <IconContainer onClick={() => handleClick("Research")}>
            {selectedIcon === "Research" ? (
              <>
                <NavIcons.Research selected />
                <MenuName weight={600}>탐색 탭</MenuName>
              </>
            ) : (
              <>
                <NavIcons.Research />
                <MenuName weight={0}>탐색 탭</MenuName>
              </>
            )}
          </IconContainer>
          <IconContainer onClick={() => handleClick("Reels")}>
            {selectedIcon === "Reels" ? (
              <>
                <NavIcons.Reels selected />
                <MenuName weight={600}>릴스</MenuName>
              </>
            ) : (
              <>
                <NavIcons.Reels />
                <MenuName weight={0}>릴스</MenuName>
              </>
            )}
          </IconContainer>
          <IconContainer onClick={() => handleClick("Message")}>
            {selectedIcon === "Message" ? (
              <>
                <NavIcons.Message selected />
                <MenuName weight={600}>메시지</MenuName>
              </>
            ) : (
              <>
                <NavIcons.Message />
                <MenuName weight={0}>메시지</MenuName>
              </>
            )}
          </IconContainer>
          <IconContainer onClick={() => handleClick("Alert")}>
            {selectedIcon === "Alert" ? (
              <>
                <NavIcons.Alert selected />
                <MenuName weight={600}>알림</MenuName>
              </>
            ) : (
              <>
                <NavIcons.Alert />
                <MenuName weight={0}>알림</MenuName>
              </>
            )}
          </IconContainer>
          <IconContainer>
            <NavIcons.Create />
            <MenuName>만들기</MenuName>
          </IconContainer>
          <IconContainer>
            <Profile
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3G8FOX8WmJdD0DWd4xfoi5I1mLjkSjFbFaA&s"
              height={24}
              width={24}
            />
            <Name>프로필</Name>
          </IconContainer>
        </MidIcons>
        <IconContainer>
          <NavIcons.Thread />
          <MenuName>Threads</MenuName>
        </IconContainer>
        <IconContainer onClick={() => handleClick("More")}>
          {selectedIcon === "More" ? (
            <>
              <NavIcons.More selected />
              <MenuName weight={600}>더 보기</MenuName>
            </>
          ) : (
            <>
              <NavIcons.More />
              <MenuName weight={0}>더 보기</MenuName>
            </>
          )}
        </IconContainer>
      </MenuField>
    </Wrapper>
  );
};

export default SideMenu;

const MenuName = styled.span`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 16px;
  color: #000000;
  padding-left: 16px;
  margin: 4px 0px;
  font-weight: ${props => props.weight};
`;

const IconContainer = styled.div`
  display: flex;
  margin: 4px 0px;
  padding: 12px;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: #e9ebf0;
    svg {
      transform: scale(1.1);
    }
  }
`;

const Name = styled.span`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 16px;
  color: #000000;
  padding: 0px 0px 0px 16px;
  margin: 4px 0px;
`;

const MidIcons = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 55px;
`;

const LogoField = styled.div`
  margin: 0px 0px 19px;
  padding: 25px 12px 16px;
`;

const Wrapper = styled.div`
  border: 1px solid rgb(101, 104, 108, 0.3);
  position: fixed;
  height: 100vh;
  width: 16%;
`;
const MenuField = styled.aside`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

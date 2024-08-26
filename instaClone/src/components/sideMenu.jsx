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
                <Name weight={600}>홈</Name>
              </>
            ) : (
              <>
                <NavIcons.Home />
                <Name weight={0}>홈</Name>
              </>
            )}
          </IconContainer>
          <IconContainer onClick={() => handleClick("Search")}>
            {selectedIcon === "Search" ? (
              <>
                <NavIcons.Search selected />
                <Name weight={600}>검색</Name>
              </>
            ) : (
              <>
                <NavIcons.Search />
                <Name weight={0}>검색</Name>
              </>
            )}
          </IconContainer>
          <IconContainer onClick={() => handleClick("Research")}>
            {selectedIcon === "Research" ? (
              <>
                <NavIcons.Research selected />
                <Name weight={600}>탐색 탭</Name>
              </>
            ) : (
              <>
                <NavIcons.Research />
                <Name weight={0}>탐색 탭</Name>
              </>
            )}
          </IconContainer>
          <IconContainer onClick={() => handleClick("Reels")}>
            {selectedIcon === "Reels" ? (
              <>
                <NavIcons.Reels selected />
                <Name weight={600}>릴스</Name>
              </>
            ) : (
              <>
                <NavIcons.Reels />
                <Name weight={0}>릴스</Name>
              </>
            )}
          </IconContainer>
          <IconContainer onClick={() => handleClick("Message")}>
            {selectedIcon === "Message" ? (
              <>
                <NavIcons.Message selected />
                <Name weight={600}>메시지</Name>
              </>
            ) : (
              <>
                <NavIcons.Message />
                <Name weight={0}>메시지</Name>
              </>
            )}
          </IconContainer>
          <IconContainer onClick={() => handleClick("Alert")}>
            {selectedIcon === "Alert" ? (
              <>
                <NavIcons.Alert selected />
                <Name weight={600}>알림</Name>
              </>
            ) : (
              <>
                <NavIcons.Alert />
                <Name weight={0}>알림</Name>
              </>
            )}
          </IconContainer>
          <IconContainer>
            <NavIcons.Create />
            <Name>만들기</Name>
          </IconContainer>
          <IconContainer>
            <Profile
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3G8FOX8WmJdD0DWd4xfoi5I1mLjkSjFbFaA&s"
              height={24}
              width={24}
            />
<<<<<<< HEAD
            <Name weight={0}>프로필</Name>
=======
            <Name>프로필</Name>
>>>>>>> cae447e5a8c3a0d8b40835e2da35cde9234070bc
          </IconContainer>
        </MidIcons>
        <IconContainer>
          <NavIcons.Thread />
          <Name>Threads</Name>
        </IconContainer>
        <IconContainer onClick={() => handleClick("More")}>
          {selectedIcon === "More" ? (
            <>
              <NavIcons.More selected />
              <Name weight={600}>더 보기</Name>
            </>
          ) : (
            <>
              <NavIcons.More />
              <Name weight={0}>더 보기</Name>
            </>
          )}
        </IconContainer>
      </MenuField>
    </Wrapper>
  );
};

export default SideMenu;

const Name = styled.span`
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

<<<<<<< HEAD
=======
const Name = styled.span`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 16px;
  color: #000000;
  padding: 0px 0px 0px 16px;
  margin: 4px 0px;
`;

>>>>>>> cae447e5a8c3a0d8b40835e2da35cde9234070bc
const MidIcons = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 55px;
`;

const LogoField = styled.div`
  margin: 0px 0px 19px 0px;
  padding: 25px 12px 16px 0px;
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

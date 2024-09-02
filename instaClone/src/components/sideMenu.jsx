import styled from "styled-components";
import NavIcons from "../icons/navicons";
import { Profile } from "./story";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SideMenu = () => {
  const [homeIcon, setHomeIcon] = useState(false);
  const [searchIcon, setSearchIcon] = useState(false);
  const [researchIcon, setResearchIcon] = useState(false);
  const [reelsIcon, setReelsIcon] = useState(false);
  const [messageIcon, setMessageIcon] = useState(false);
  const [alertIcon, setAlertIcon] = useState(false);
  const [moreIcon, setMoreIcon] = useState(false);
  const [profileIcon, setProfileIcon] = useState(false);
  const navigate = useNavigate();
  const onSearch = () => {
    setSearchIcon(!searchIcon);
    setHomeIcon(false);
    setResearchIcon(false);
    setReelsIcon(false);
    setMessageIcon(false);
    setAlertIcon(false);
    setMoreIcon(false);
    setProfileIcon(false);
  };
  const onResearch = () => {
    setResearchIcon(!researchIcon);
    setHomeIcon(false);
    setSearchIcon(false);
    setReelsIcon(false);
    setMessageIcon(false);
    setAlertIcon(false);
    setMoreIcon(false);
    setProfileIcon(false);
  };
  const onReels = () => {
    setReelsIcon(!reelsIcon);
    setHomeIcon(false);
    setResearchIcon(false);
    setSearchIcon(false);
    setMessageIcon(false);
    setAlertIcon(false);
    setMoreIcon(false);
    setProfileIcon(false);
  };
  const onMessage = () => {
    setMessageIcon(!messageIcon);
    setHomeIcon(false);
    setResearchIcon(false);
    setReelsIcon(false);
    setSearchIcon(false);
    setAlertIcon(false);
    setMoreIcon(false);
    setProfileIcon(false);
  };
  const onAlert = () => {
    setAlertIcon(!alertIcon);
    setHomeIcon(false);
    setResearchIcon(false);
    setReelsIcon(false);
    setMessageIcon(false);
    setSearchIcon(false);
    setMoreIcon(false);
    setProfileIcon(false);
  };
  const onMore = () => {
    setMoreIcon(!moreIcon);
    setHomeIcon(false);
    setResearchIcon(false);
    setReelsIcon(false);
    setMessageIcon(false);
    setAlertIcon(false);
    setSearchIcon(false);
    setProfileIcon(false);
  };
  const onProfile = () => {
    navigate("/profile");
    setProfileIcon(true);
  };
  const onHome = () => {
    navigate("");
    setHomeIcon(!homeIcon);
    setMoreIcon(false);
    setResearchIcon(false);
    setReelsIcon(false);
    setMessageIcon(false);
    setAlertIcon(false);
    setSearchIcon(false);
    setProfileIcon(false);
  };
  const loacation = useLocation();

  return (
    <Wrapper>
      <MenuField>
        <LogoField onClick={onHome}>
          <NavIcons.LogoText />
        </LogoField>
        <MidIcons>
          <IconContainer onClick={onHome}>
            {loacation.pathname === "/" ? (
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
          <IconContainer onClick={() => onSearch()}>
            {searchIcon ? (
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
          <IconContainer onClick={() => onResearch()}>
            {researchIcon ? (
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
          <IconContainer onClick={() => onReels()}>
            {reelsIcon ? (
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
          <IconContainer onClick={() => onMessage()}>
            {messageIcon ? (
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
          <IconContainer onClick={() => onAlert()}>
            {alertIcon ? (
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
          <IconContainer onClick={onProfile}>
            {loacation.pathname === "/profile" ? (
              <>
                <Profile
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3G8FOX8WmJdD0DWd4xfoi5I1mLjkSjFbFaA&s"
                  height={24}
                  width={24}
                  border={2}
                />
                <Name weight={600}>프로필</Name>
              </>
            ) : (
              <>
                <Profile
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3G8FOX8WmJdD0DWd4xfoi5I1mLjkSjFbFaA&s"
                  height={24}
                  width={24}
                />
                <Name weight={0}>프로필</Name>
              </>
            )}
          </IconContainer>
        </MidIcons>
        <IconContainer>
          <NavIcons.Thread />
          <Name>Threads</Name>
        </IconContainer>
        <IconContainer onClick={() => onMore()}>
          {moreIcon === true ? (
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

const MidIcons = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 55px;
`;

const LogoField = styled.div`
  margin: 0px 0px 19px;
  cursor: pointer;
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

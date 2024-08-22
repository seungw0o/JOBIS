import styled from "styled-components";
import NavIcons from "../../icons/navicons";
import Icon from "../../icons/icon";
import { Profile } from "./story";

const SideMenu = () => {
  return (
    <Wrapper>
      <MenuField>
        <LogoField>
          <NavIcons.LogoText />
        </LogoField>
        <MidIcons>
          <Icon name={"Home"} />
          <Icon name={"Search"} />
          <Icon name={"Research"} />
          <Icon name={"Reels"} />
          <Icon name={"Message"} />
          <Icon name={"Alert"} />
          <Icon name={"Create"} />
          <Icon
            name={"Profile"}
            props={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3G8FOX8WmJdD0DWd4xfoi5I1mLjkSjFbFaA&s"
            }
          />
        </MidIcons>
        <Icon name={"Thread"} />
        <Icon name={"More"} />
      </MenuField>
    </Wrapper>
  );
};

export default SideMenu;

const MidIcons = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 115px;
`;

const LogoField = styled.div`
  margin: 0px 0px 19px;
  padding: 25px 12px 16px;
`;

const Wrapper = styled.div`
  border: solid rgb(101, 104, 108, 0.3) 1px;
  position: fixed;
  height: 100vh;
  width: 18%;
`;
const MenuField = styled.aside`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

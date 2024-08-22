import styled from "styled-components";
import NavIcons from "./navicons";

const Icon = ({ name }) => {
  const IconInfo = NavIcons[name];
  return (
    <Wrapper>
      <IconInfo />
      <MenuName>{name}</MenuName>
    </Wrapper>
  );
};
export default Icon;

const Wrapper = styled.div`
  display: flex;
  margin: 4px 0px;
  padding: 12px;
  cursor: pointer;
`;

const MenuName = styled.span`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 16px;
  color: #000000;
  padding: 0px 0px 0px 16px;
  margin: 4px 0px;
`;

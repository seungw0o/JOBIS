import styled from "styled-components";

export const Story = ({ name }) => {
  return (
    <Human>
      <Button>
        <Profile
          src="https://start.litt.ly/common/img/default_profile.png"
          height={56}
          width={56}
        />
        <Name>{name}</Name>
      </Button>
    </Human>
  );
};

const Human = styled.div`
  padding: 0px 4px;
  width: 60px;
  height: 120px;
`;
export const Profile = styled.img`
  height: ${props => props.height}px;
  width: ${props => props.width}px;
  border-radius: 100px;
  border: ${props => props.border}px solid black;
`;
const Name = styled.span`
  color: #000000;
  font-size: 12px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
const Button = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
`;

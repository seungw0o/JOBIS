import styled from "styled-components";

export const Story = ({ name }) => {
  return (
    <Human>
      <Button>
        <Profile src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3G8FOX8WmJdD0DWd4xfoi5I1mLjkSjFbFaA&s" />
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
  height: 56px;
  width: 56px;
  border-radius: 100px;
  border: solid 1px black;
`;
const Name = styled.span`
  color: #a8a8a8;
  font-size: 12px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
const Button = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
`;

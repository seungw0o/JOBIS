import styled from "styled-components";
import NavIcons from "../assets/navicons";

const PopUp = ({ close }) => {
  const onClose = () => {
    close();
  };
  return (
    <Wrapper>
      <Field>
        <Header>새 게시물 만들기</Header>
        <FileBtn htmlFor="file">컴퓨터에서 선택</FileBtn>
        <File type="file" id="file" />
      </Field>
      <CloseField onClick={onClose}>
        <NavIcons.close />
      </CloseField>
    </Wrapper>
  );
};
export default PopUp;

const CloseField = styled.div`
  padding: 20px;
  cursor: pointer;
  height: fit-content;
`;

const Field = styled.div`
  background-color: white;
  margin: auto;
  width: 500px;
  height: 550px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

const FileBtn = styled.label`
  background-color: #0095f6;
  margin: auto;
  padding: 7px 16px;
  width: fit-content;
  height: fit-content;
  color: white;
  border-radius: 8px;
  font-size: 14px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: #007ccf;
  }
`;
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
`;
const Header = styled.span`
  display: flex;
  justify-content: center;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 16px;
  font-weight: 600;
  margin: 15px;
`;
const File = styled.input`
  display: none;
`;

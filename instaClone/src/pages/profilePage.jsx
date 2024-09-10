import styled from "styled-components";
import { Profile } from "../components/story";
import NavIcons from "../assets/navicons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ProfilePage = () => {
  const [post, setPost] = useState(false);
  const [save, setSave] = useState(false);
  const [tag, setTag] = useState(false);

  const navigate = useNavigate();
  const onSave = () => {
    navigate("saved");
    setPost(false);
    setSave(true);
    setTag(false);
  };
  const onPost = () => {
    navigate("");
    setPost(true);
    setSave(false);
    setTag(false);
  };
  const onTag = () => {
    navigate("tagged");
    setPost(false);
    setSave(false);
    setTag(true);
  };
  return (
    <Wrapper>
      <Header>
        <ProfileField>
          <Profile
            width={150}
            height={150}
            src="https://start.litt.ly/common/img/default_profile.png"
          />
        </ProfileField>
        <SetField>
          <Text size={20}>txd.w0_</Text>
          <Btn>프로필 편집</Btn>
          <Btn>보관된 스토리 보기</Btn>
          <NavIcons.Set />
        </SetField>
        <InfoField>
          <div>
            게시물
            <Text> 0</Text>
          </div>
          <div>
            팔로워
            <Text> 0</Text>
          </div>
          <div>
            팔로우
            <Text> 0</Text>
          </div>
        </InfoField>
        <ExpField>
          <Text size={14} weight={600}>
            정승우
          </Text>
          <span>test</span>
          <span>test</span>
          <span>test</span>
          <span>test</span>
        </ExpField>
        <HighlightField>
          <AddField>
            <NavIcons.add />
          </AddField>
          <Label>생성</Label>
        </HighlightField>
      </Header>
      <MenuBar>
        {post ? (
          <Text size={12} weight={600} onClick={onPost} color="#000000">
            게시물
          </Text>
        ) : (
          <Text size={12} weight={600} onClick={onPost} color="#747474">
            게시물
          </Text>
        )}

        {save ? (
          <Text size={12} weight={600} onClick={onSave} color="#000000">
            저장됨
          </Text>
        ) : (
          <Text size={12} weight={600} onClick={onSave} color="#747474">
            저장됨
          </Text>
        )}
        {tag ? (
          <Text size={12} weight={600} onClick={onTag} color="#000000">
            태그됨
          </Text>
        ) : (
          <Text size={12} weight={600} onClick={onTag} color="#747474">
            태그됨
          </Text>
        )}
      </MenuBar>
    </Wrapper>
  );
};
export default ProfilePage;

const MenuBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 50px;
  margin-top: 50px;
  width: 100%;
`;

const Label = styled.span`
  padding: 15px 0px 0px;
  font-size: 12px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 600;
`;

const AddField = styled.div`
  border-radius: 200px;
  border: solid 1px gray;
  width: 77px;
  height: 77px;
  padding: 15px 15px;
  background-color: #fafafa;
`;

const Btn = styled.a`
  padding: 0px 16px;
  font-size: 14px;
  font-weight: 600;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-color: #efefef;
  color: #000000;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #cfcfcf;
  }
`;

const HighlightField = styled.div`
  flex-direction: row;
  width: fit-content;
  padding: 10px 15px;
  cursor: pointer;
  text-align: center;
`;
const Text = styled.span`
  font-size: ${props => props.size}px;
  font-weight: ${props => props.weight};
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: ${props => props.color};
`;
const SetField = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;
  height: fit-content;
  gap: 10px;
`;
const InfoField = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  grid-column-start: 2;
  grid-row-start: 2;
  margin: 0px 0px 20px;
  height: fit-content;
`;
const ExpField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const ProfileField = styled.div`
  grid-row-end: 5;
  grid-column-start: 1;
  margin: 30px 20px;
  display: flex;
  justify-content: center;
  grid-row-end: 4;
  grid-row-start: 1;
`;
const Wrapper = styled.div`
  padding: 30px 20px 0px 0px;
  flex-grow: 1px;
  margin: 0px auto 30px auto;
  display: flex;
  flex-direction: column;
`;
const Header = styled.header`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 2fr;
`;

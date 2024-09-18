import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface MovieProps {
  title: string;
  coverimg: string;
  summary: string;
  id: number;
}

const MovieScreen = ({
  title,
  coverimg,
  summary,
  id,
}: MovieProps): JSX.Element => {
  const navigate = useNavigate();
  const onDetail = (): void => {
    navigate(`/movie/${id}`);
  };
  return (
    <Wrapper onClick={onDetail}>
      <CoverImg src={coverimg} alt={title} />
      <MovieTitle>{title}</MovieTitle>
      <MovieSummary>{summary}</MovieSummary>
    </Wrapper>
  );
};

export default MovieScreen;

const MovieSummary = styled.p`
  float: right;
  color: black;
`;

const Wrapper = styled.div`
  background-color: white;
  margin-bottom: 70px;
  font-weight: 300;
  padding: 20px;
  border-radius: 5px;
  color: #adaeb9;
  display: grid;
  grid-template-columns: minmax(150px, 1fr) 2fr;
  grid-gap: 20px;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
const CoverImg = styled.img`
  position: relative;
  top: -50px;
  max-width: 150px;
  height: 200px;
  width: 100%;
  margin-right: 30px;
  box-shadow: 0 30px 60px -12px rgba(255, 255, 255, 0.25),
    0 18px 36px -18px rgba(255, 255, 255, 0.3),
    0 -12px 36px -8px rgba(0, 0, 0, 0.025);
`;
const MovieTitle = styled.h2`
  margin: 0;
  font-weight: 300;
  text-decoration: none;
  color: black;
  & > a {
    margin-bottom: 5px;
    font-size: 24px;
    color: #2c2c2c;
    text-decoration: none;
  }
`;

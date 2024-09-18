import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

interface Details {
  title: string;
  poster_path: string;
  overview: string;
}

const Detail = (): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(true);
  const [details, setDetails] = useState<Details | null>(null);
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const goHome = () => {
    navigate(-1);
  };
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMDY3ZTI3YTAxMjBhZmQxM2EwZDMwMjQwNTFmMGFkNiIsInN1YiI6IjY1OTNjMmFhMDI4ZjE0NzZlYWM2YWVjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nf-MYtZQG6XGKMa5awr1_RwTzL6DyhxtCN1ji-96aoY",
    },
  };
  const getDetails = async (): Promise<void> => {
    try {
      const response = await axios.request(options);
      setDetails(response.data);
    } catch (error) {
      console.error("Error fetching movies:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getDetails();
  }, [id]);
  if (!details) {
    return <div>No details found.</div>;
  }
  return (
    <Wrapper>
      {loading ? (
        <Load>Loading...</Load>
      ) : (
        <>
          <BtnField>
            <HomeBtn onClick={goHome}>Go Home</HomeBtn>
          </BtnField>
          <Container>
            <CoverImg
              src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
            />
            <TextField>
              <Title>{details.title}</Title>
              <p>{details.overview}</p>
            </TextField>
          </Container>
        </>
      )}
    </Wrapper>
  );
};

export default Detail;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const TextField = styled.div`
  display: flex;
  width: 300px;
  flex-direction: column;
`;

const BtnField = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const HomeBtn = styled.button`
  box-shadow: 0 30px 60px -12px rgba(255, 255, 255, 0.25);
  background-color: white;
  width: 80px;
  height: 25px;
  cursor: pointer;
  border-radius: 200px;
  &:hover {
    background-color: #bdbdbd;
  }
`;

const Load = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 300;
  color: white;
`;

const Container = styled.div`
  color: white;
  display: flex;
  padding-top: 50px;
  margin-left: 200px;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
`;

const CoverImg = styled.img`
  width: 300px;
  height: 400px;
  margin-right: 40px;
`;

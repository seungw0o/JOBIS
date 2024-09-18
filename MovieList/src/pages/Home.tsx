import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import MovieScreen from "../components/Movie";
import { useNavigate } from "react-router-dom";

interface Movie {
  id: number;
  title: string;
  adult: boolean;
  overview: string;
  poster_path: string;
}

const Home = (): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(true);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [input, setInput] = useState<string>("");
  let [count, setCount] = useState<number>(1);
  const filterMovie = movies.filter(info =>
    info.title.toLowerCase().includes(input.toLowerCase())
  );

  const onUp = () => {
    setCount(count + 1);
    console.log(count);
  };
  const onDown = () => {
    if (count > 1) {
      setCount(count - 1);
    }
    console.log(count);
  };
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${count}&sort_by=popularity.desc`,
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMDY3ZTI3YTAxMjBhZmQxM2EwZDMwMjQwNTFmMGFkNiIsInN1YiI6IjY1OTNjMmFhMDI4ZjE0NzZlYWM2YWVjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nf-MYtZQG6XGKMa5awr1_RwTzL6DyhxtCN1ji-96aoY",
    },
  };
  const getMovies = async (): Promise<void> => {
    try {
      const response = await axios.request(options);
      setMovies(response.data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    getMovies();
  }, [count]);
  return (
    <Wrapper>
      {loading ? (
        <Load>Loading...</Load>
      ) : (
        <MovieField>
          <SearchField>
            <Label htmlFor="search">영화 이름 </Label>
            <MovieSearch
              id="search"
              placeholder="영화 이름을 입력하세요!"
              type="text"
              onChange={onChange}
              value={input}
            />
          </SearchField>
          <PageCnt>page : {count}</PageCnt>
          <PageBox>
            <PageBtn onClick={onDown}>{"<"}-</PageBtn>
            <PageBtn onClick={onUp}>-{">"}</PageBtn>
          </PageBox>
          <MovieBox>
            {movies &&
              filterMovie.map(movie => (
                <MovieScreen
                  title={movie.title}
                  coverimg={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  key={movie.id}
                  id={movie.id}
                  summary={movie.overview}
                />
              ))}
          </MovieBox>
        </MovieField>
      )}
    </Wrapper>
  );
};

export default Home;

const PageCnt = styled.h1`
  margin-bottom: 20px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const PageBox = styled.div`
  display: flex;
  gap: 10px;
`;

const PageBtn = styled.button`
  background-color: white;
  color: black;
  font-size: 14px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  width: 50px;
  cursor: pointer;
`;

const MovieBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(400px, 1fr));
  grid-gap: 100px;
  padding: 50px;
  width: 80%;
  padding-top: 70px;
  @media screen and (max-width: 1500px) {
    grid-template-columns: 1fr;
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

const SearchField = styled.div`
  display: flex;
  gap: 10px;
  margin: 40px;
  margin-right: 120px;
  color: white;
  height: fit-content;
`;

const Label = styled.label`
  height: fit-content;
  margin-top: 10px;
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const MovieField = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: white;
`;

const MovieSearch = styled.input`
  width: fit-content;
  height: fit-content;
  border-radius: 20px;
  padding: 10px;
`;

import {useState, useEffect} from "react";
import {useNavigate, Link} from "react-router-dom";

const MovieList = () => {
  const API = process.env.REACT_APP_TMDB_API_KEY;
  const [test, setTest] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API}&language=ko-KR`
    )
      .then((response) => response.json())
      .then((response) => {
        setTest(response.results);
        console.log(response.results);
      });
  }, []);

  return (
    <>
      <ul>
        {test.map((e) => (
          <Link to="/detail" state={{id: e.id}}>
            <li key={e.id}>{e.title}</li>
          </Link>
          //   <img
          //     key={e.id}
          //     alt="poster"
          //     src={`https://image.tmdb.org/t/p/original/${e.poster_path}`}
          //     style={{
          //       flex: "1 0 0",
          //       width: "20rem",
          //       height: "30vh",
          //     }}
          //   />
        ))}
      </ul>
    </>
  );
};

export default MovieList;

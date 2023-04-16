import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

const DetailMovie = () => {
  const API = process.env.REACT_APP_TMDB_API_KEY;
  const [test2, setTest2] = useState("");
  const t = useLocation();
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${t.state.id}?api_key=${API}&language=ko-KR`
    )
      .then((response) => response.json())
      .then((response) => {
        setTest2(response.title);
        console.log(response);
      });
  }, [t]);
  return (
    <>
      <div>{test2}</div>
    </>
  );
};

export default DetailMovie;

import MoviePosterItem from "../movie-poster-item/MoviePosterItem";
import { useContext, useEffect, useState } from "react";
import AuthContext from '../../../store/auth-context';

const MovieList = (props) => {
  const authCtx = useContext(AuthContext);
  const [movieList, setMovieList] = useState([]);


  useEffect(() => {
    fetch("http://127.0.0.1:8080/api/staff/movie", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Bearer ' + authCtx.token,
      },
    }).then((res) => {
      if(res.ok){
        return res.json();
      }
    }).then((data) => {
      setMovieList(data)
    }) 
  }, [])

  return (
    <div className="movie-list px-5 py-5 justify-content-between row container-fluid">
      {movieList.map(movie => <MoviePosterItem key={movie.movieId} movie={movie}></MoviePosterItem>)}
    </div>
  );
};
export default MovieList;

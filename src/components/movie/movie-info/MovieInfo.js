import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import Trailer from "../../trailer/Trailer"
import AuthContext from "../../../store/auth-context";

const MovieInfo = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [movieData, setMovie] = useState({})
  const params = useParams();
  const { id } = params;
  const location = useLocation();
  const pathName = location.pathname;
  const selectingSeat = pathName.includes("room");
  const authCtx = useContext(AuthContext)


  const playTrailer = () => {
    setIsPlaying(true)
  }
  const closeTrailerHandler = () => {
    setIsPlaying(false)
  }
  return (
    <div className="movie-info-section row m-3">
      <div className="poster-holder col-6">
        <img src={props.movie.thumbnail} alt="" />
      </div>
      <div
        className="movie-info col-6 d-flex flex-column justify-content-around py-5"
        style={{ color: "white" }}
      >
        <h2 className="my-5">{props.movie.title}</h2>
        <p className="my-3">
          {props.movie.description}
        </p>
        {/* // <p className="my-2">Director: name</p> */}
        {/* // <p className="my-2">Actors: name1, name2, name3, name4</p> */}
        {
          props.movie.genreSet !== undefined && <p className="my-2">Genre: {Array.from(props.movie.genreSet).map(genre => genre.genreName).join(", ")}</p>
        }
        {
          props.movie.releaseDate !== undefined && <p className="my-2">Opening day: {props.movie.releaseDate.split("T")[0]}</p>
        }

        <p className="my-2">Duration: {props.movie.duration}mins</p>

        {isPlaying && <Trailer videoId={props.movie.trailerId} onClose={closeTrailerHandler}></Trailer>}

        {!selectingSeat ? (
          <div className="my-5 buttons d-flex flex-row justify-content-between">
            <button onClick={playTrailer} className="p-4 movie-btn">Watch trailer</button>
            <Link
              to={`/booking/moive-detail/${id}/room`}
              className="p-4 movie-btn"
            >
              Buy ticket
            </Link>
          </div>
        ) : (
          <div className="my-5 buttons d-flex flex-row justify-content-center">
            <Link
              to={`/booking/moive-detail/${id}/room/combo`}
              className="p-4 movie-btn"
            >
              Next
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
export default MovieInfo;

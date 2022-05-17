import { useEffect, useReducer, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { useParams } from "react-router-dom";

import Trailer from "../../trailer/Trailer";
import AuthContext from "../../../store/auth-context";
import TicketContext from "../../../store/ticket-context";

const MovieInfo = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const location = useLocation();
  const playTrailer = () => {
    setIsPlaying(true);
  };

  const closeTrailerHandler = () => {
    setIsPlaying(false);
  };

  
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
        <p className="my-3">{props.movie.description}</p>
        {props.movie.genreSet !== undefined && (
          <p className="my-2">
            Genre:{" "}
            {Array.from(props.movie.genreSet)
              .map((genre) => genre.genreName)
              .join(", ")}
          </p>
        )}
        {props.movie.releaseDate !== undefined && (
          <p className="my-2">
            Opening day: {props.movie.releaseDate.split("T")[0]}
          </p>
        )}

        <p className="my-2">Duration: {props.movie.duration}mins</p>

        {isPlaying && (
          <Trailer
            videoId={props.movie.trailerId}
            onClose={closeTrailerHandler}
          ></Trailer>
        )}

        <div className="my-2 buttons d-flex flex-row justify-content-center">
          <button onClick={playTrailer} className="p-4 movie-btn">
            Watch trailer
          </button>
        </div>
      </div>
    </div>
  );
};
export default MovieInfo;

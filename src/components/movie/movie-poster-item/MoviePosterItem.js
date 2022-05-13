import { Link } from "react-router-dom";

const MoviePosterItem = (props) => {
    return (
        <div className="movie-item d-flex flex-column col-3 justify-content-between m-3">
            <img src={props.movie.thumbnail} alt="moive-poster"/>
            <p className="movieTitle py-3 my-0">{props.movie.title}</p>
            <Link to={`/booking/moive-detail/${props.movie.movieId}`} className=" mx-auto buy-btn py-2 w-75">Buy</Link>
        </div>
    );
} 
export default MoviePosterItem;
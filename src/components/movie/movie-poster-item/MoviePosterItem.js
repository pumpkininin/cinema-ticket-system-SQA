import { Link } from "react-router-dom";

const MoviePosterItem = (props) => {
    return (
        <div className="movie-item d-flex flex-column justify-content-between mx-3">
            <img src="image/movie-item.png" alt="moive-poster"/>
            <p className="movie-title py-3 my-0">Movie title</p>
            <Link to={`/booking/moive-detail/1`} className=" mx-auto buy-btn py-2 w-75">Buy</Link>
        </div>
    );
} 
export default MoviePosterItem;
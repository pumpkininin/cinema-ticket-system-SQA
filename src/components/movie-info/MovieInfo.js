import { Link, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

const MovieInfo = (props) => {
  const params = useParams();
  const { id } = params;
  const location = useLocation();
  const pathName = location.pathname;
  const selectingSeat = pathName.includes("room");
  return (
    <div className="movie-info-section row m-3">
      <div className="poster-holder col-6">
        <img src="/image/movie-item-big.png" alt="" />
      </div>
      <div
        className="movie-info col-6 d-flex flex-column justify-content-around py-5"
        style={{ color: "white" }}
      >
        <h2 className="my-5">Movie title</h2>
        <p className="my-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis,
          aperiam impedit est commodi nobis voluptates numquam praesentium
          consequatur atque facilis fugiat fuga libero nesciunt rerum velit modi
          error amet architecto.
        </p>
        <p className="my-2">Director: name</p>
        <p className="my-2">Actors: name1, name2, name3, name4</p>
        <p className="my-2">Genre: name1, name2, name3, name4</p>
        <p className="my-2">Opening day: 1/1/2022</p>
        <p className="my-2">Duration: 120mins</p>
        {!selectingSeat ? (
          <div className="my-5 buttons d-flex flex-row justify-content-between">
            <button className="p-4 movie-btn">Watch trailer</button>
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

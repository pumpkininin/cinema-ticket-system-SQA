import MovieTimeItem from "../movie-timetable/MovieTimeItem";
import TheaterInfo from "../theater-info/TheaterInfo";

const MovieTimeTableList = (props) => {
  return (
    <div className="movie-timetable mt-5 mx-5" style={{ color: "white" }}>
      <div className="movie-timetable--theater row">
        <TheaterInfo></TheaterInfo>
        <div className="movie-time-items col-8">
          <MovieTimeItem></MovieTimeItem>
        </div>
      </div>
    </div>
  );
};
export default MovieTimeTableList;

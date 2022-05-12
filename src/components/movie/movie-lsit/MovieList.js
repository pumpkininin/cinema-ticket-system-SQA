import MoviePosterItem from "../movie-poster-item/MoviePosterItem";

const MovieList = (props) => {
  return (
    <div className="movie-list px-5 py-5 d-flex flex-row">
      <MoviePosterItem></MoviePosterItem>
      <MoviePosterItem></MoviePosterItem>
      <MoviePosterItem></MoviePosterItem>
      <MoviePosterItem></MoviePosterItem>
      <MoviePosterItem></MoviePosterItem>
      <MoviePosterItem></MoviePosterItem>
    </div>
  );
};
export default MovieList;

const MovieTimeItem = (props) => {
  const startTime = props.show.startTime.substring(11,16)
  return (
    <div className="movie-time-item col-2 m-3">
      <p className="m-2">{startTime}</p>
    </div>
  );
};
export default MovieTimeItem;

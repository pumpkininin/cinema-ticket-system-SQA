import MovieInfo from "../../components/movie-info/MovieInfo";
import SeatRow from "../../components/seat-row/SeatRow";

const TheaterRoomPage = (props) => {
  return (
    <div>
      <MovieInfo></MovieInfo>
      <div className="screen d-flex flex-column justify-content-center mx-3 mt-5">
        <div style={{ backgroundColor: "#767676" }}>
          <h1
            style={{ color: "white", textAlign: "center" }}
            className="py-2 px-n2"
          >
            Screen
          </h1>
        </div>
      </div>
      <div className="seat-selection mt-5 mx-3 px-n2 py-5">
        <SeatRow></SeatRow>
        <SeatRow></SeatRow>
        <SeatRow></SeatRow>
        <SeatRow></SeatRow>
        <SeatRow></SeatRow>
      </div>
      <div className="note-section row">
        <div className="col-3">
          <div className="note my-1 row align-items-center justify-content-center">
            <div className="seat px-4 py-3" style={{pointerEvents: "none"}}>
              A1
            </div>
            <div className="offset-1">
              <strong className="align-middle" style={{color: "white"}}>
                Avaliable
              </strong>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="note my-1 row align-items-center justify-content-center">
            <div
              className="seat isSelected px-4 py-3"
              style={{pointerEvents: "none"}}
            >
              A1
            </div>
            <div className="offset-1">
              <strong className="align-middle" style={{color: "white"}}>
                Selected
              </strong>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="note my-1 row align-items-center justify-content-center">
            <div
              className="seat isSold px-4 py-3"
              style={{ pointerEvents: "none" }}
            >
              A1
            </div>
            <div className="offset-1">
              <strong className="align-middle" style={{ color: "white" }}>
                Sold
              </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TheaterRoomPage;

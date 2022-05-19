import Seat from "../seats/Seat";

const SeatRow = (props) => {
    return (
        <div className="seat-row row justify-content-between mx-5 px-5 my-3">
            {
                props.seatArr.map((seat,index) => <Seat key={index} seat={seat} />)
            }
        </div>
    );
} 
export default SeatRow;
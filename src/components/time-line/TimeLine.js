const TimeLine = (props) => {
    return (
        <div className="time-line d-flex flex-column justify-content-center mt-5 py-5">
        <div>
            <h1 style={{color: "white", textAlign: "center", borderBottom: "#C4C4C4 2px solid"}}>Movie timetable</h1>
        </div>
        <div className="time-line--week d-flex flex-row justify-content-around">
            <div className="date-item d-flex flex-column justify-content-center">
                <p>Monday</p>
                <p>21/3/2022</p>
            </div>
            <div className="date-item d-flex flex-column justify-content-center">
                <p>Tuesday</p>
                <p>22/3/2022</p>
            </div>
            <div className="date-item d-flex flex-column justify-content-center">
                <p>Wednesday</p>
                <p>23/3/2022</p>
            </div>
            <div className="date-item d-flex flex-column justify-content-center">
                <p>Thursday</p>
                <p>24/3/2022</p>
            </div>
            <div className="date-item d-flex flex-column justify-content-center">
                <p>Friday</p>
                <p>25/3/2022</p>
            </div>
            <div className="date-item d-flex flex-column justify-content-center">
                <p>Saturday</p>
                <p>26/3/2022</p>
            </div>
            <div className="date-item d-flex flex-column justify-content-center">
                <p>Sunday</p>
                <p>27/3/2022</p>
            </div>
        </div>
    </div>
    );
} 
export default TimeLine;
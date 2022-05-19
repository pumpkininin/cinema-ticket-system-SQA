const TimeLine = (props) => {
    var dayArr = []
    var dateArr = []
    var today = new Date();
    var tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000));

    
    for (let i = 0; i < 7; i++) {
        var tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000) * i);
        dayArr.push(tomorrow.toString().substring(0, 4))
        dateArr.push(tomorrow.toString().substring(4, 15));
    }
    return (
        <div className="time-line d-flex flex-column justify-content-center mt-5 py-5">
            <div>
                <h1 style={{ color: "white", textAlign: "center", borderBottom: "#C4C4C4 2px solid" }}>Movie timetable</h1>
            </div>
            <div className="time-line--week d-flex flex-row justify-content-around">
                {
                    dateArr.map((date, index) => 
                        (<div onClick={() => props.datePickerHandler(date)} className="date-item d-flex flex-column justify-content-center" key={index}>
                            <p>{dayArr[index]}</p>
                            <p>{date}</p>
                        </div>)
                    )
                }
            </div>
        </div>
    );
}
export default TimeLine;
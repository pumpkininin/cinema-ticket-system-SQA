const Profile = (props) => {
    return (
        <div className="row m-3" style={{color: "white"}} >
            <div className="col-3 img-holder">
                <img src="image/user.png" alt="" />
            </div>
            <div className="col-8 px-5 mx-3">
                <div className="d-flex flex-column">
                    <div className="usename">
                        <h2 className="d-inline mr-2">Username</h2><i className="fa fa-pencil" aria-hidden="true"></i>
                    </div>
                    <p className="py-2">ID: 12345676</p>
                </div>
            </div>
        </div>
    );
} 
export default Profile;
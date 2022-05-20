import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import classes from "../profile/Profile.module.css"

const ChangeProfile = (props) => {
    const authCtx = useContext(AuthContext)
    const [profile, setProfile] = useState({
        username: "",
        fullname: "",
        roles: []
    })

    const navigate = useNavigate()
    const newNameInputref = useRef()
    const ChangeProfileHandler = () => {
        const newName = newNameInputref.current.value;
        let url = `http://localhost:8080/api/auth/changeProfile`
        fetch(url, {
            method: "POST",
            body: newName,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                Authorization: "Bearer " + authCtx.token,
              },
        }).then((res) => {
            if (res.ok) {
              navigate("/profile")
            }
          })
          .catch((err) => {
            console.log(err);
          });
    }

    useEffect(() => {
        let url = `http://localhost:8080/api/auth`
        fetch(url, {
            method: "POST",
            body: authCtx.token,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                Authorization: "Bearer " + authCtx.token,
              },
        }).then((res) => {
            if (res.ok) {
              return res.json();
            }
          })
          .then((data) => {
            setProfile(data)
          })
          .catch((err) => {
            console.log(err);
          });
    }, []);
    return (
        <div className={classes.card}>
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="act" className={classes.imgHolder} style={{width:"100%"}} />
                <input className={classes.inputProfile} ref={newNameInputref} />
                <p className={classes.title}>{profile.roles.map(role => role + ", ")}</p>
                <p>{profile.username}</p>
                <p><button onClick={ChangeProfileHandler} className={classes.btnContact}>Change profile</button></p>

        </div>
    );
}
export default ChangeProfile;
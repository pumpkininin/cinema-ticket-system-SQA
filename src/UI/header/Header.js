import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import classes from "../header/Header.module.css"

const Header = (props) => {
  const authCtx = useContext(AuthContext)

  const isLoggedIn = authCtx.isLoggedIn;
  
  return (
    <nav
      className="navbar navbar-light justify-content-between p-4"
      style={{ backgroundColor: "#000000 !important" }}
    >
      <a className="navbar-menu"><i className="fa-solid fa-bars fa-2xl"></i></a>
      {!isLoggedIn && (
        <Link to='/auth'>Login</Link>
      )}
      {isLoggedIn && (
      <Link to='/profile'><i className="fas fa-user-circle fa-2xl" style={{ color: "#c4c4c4" }}></i></Link>
      )}
      
    </nav>
  );
}
export default Header;
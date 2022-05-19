import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import classes from "../header/Header.module.css"

const Header = (props) => {
  const authCtx = useContext(AuthContext)

  const isLoggedIn = authCtx.isLoggedIn;
  const logoutHanlder = () => {
    authCtx.logout()
  }
  return (
    <nav
      className="navbar navbar-light justify-content-between p-4"
      style={{ backgroundColor: "#000000 !important" }}
    >
      <div className="nav-item dropdown">
          <a href="#" className="nav-menu dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i className="fa-solid fa-bars fa-2xl">
            </i>
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <Link to={"/orders"} className="dropdown-item" >Order</Link>
            {/* <a class="dropdown-item" onClick={logoutHanlder} href="#">Logout</a> */}
          </div>
        </div>
      {!isLoggedIn && (
        <Link to='/auth'>Login</Link>
      )}
      {isLoggedIn && (
        <div className="nav-item dropdown">
          <a href="#" className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fas fa-user-circle fa-2xl" style={{ color: "#c4c4c4" }}>
            </i>
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <Link to={"/profile"} className="dropdown-item" >Profile</Link>
            <a className="dropdown-item" onClick={logoutHanlder} href="#">Logout</a>
          </div>
        </div>
      )}

    </nav>
  );
}
export default Header;
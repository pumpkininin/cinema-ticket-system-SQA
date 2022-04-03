import classes from "../header/Header.module.css"

const Header = (props) => {     
    return (
        <nav
        className="navbar navbar-light justify-content-between p-4"
        style={{ backgroundColor: "#000000 !important"}}
      >
        <a className="navbar-menu"><i className="fa-solid fa-bars fa-2xl"></i></a>
        <a><i className="fas fa-user-circle fa-2xl" style={{color: "#c4c4c4"}}></i></a>
      </nav>
    ) ;
} 
export default Header;
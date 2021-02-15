import { Link } from "react-router-dom";
import "./style.css";

const NavBar = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__list_item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav__list_item">
          <Link to="/employees">Employees</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

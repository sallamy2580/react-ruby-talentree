import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <section>
        <h1>
          <img
            src="img/talentree-student-logo.png"
            alt="Talentree Student Logo"
          />
          TalenTree
        </h1>
      </section>
      <nav>
        <NavLink exact activeClassName="active" className="nav-link" to="/">
          Home
        </NavLink>
        <NavLink activeClassName="active" className="nav-link" to="/browse">
          Browse
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;

import { Link, NavLink } from "react-router-dom";
import "./Header.css";
const Header = (props) => {
  const { userData } = props;
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
        <Link to="/profile">
          <img src={userData?.img_url} alt={userData?.username} />
          <h3>{userData?.username}</h3>
          <h5>{userData?.is_teacher ? "TEACHER" : "STUDENT"}</h5>
        </Link>
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

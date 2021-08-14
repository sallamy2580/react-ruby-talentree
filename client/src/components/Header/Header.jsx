import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { verify } from "../../services/users";
import "./Header.css";
const Header = () => {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    const reverify = async () => {
      const currUser = await verify();
      setUserData(currUser);
    };
    reverify();
  }, []);
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
        <NavLink
          activeClassName="active-profile"
          className="profile-link"
          to="/profile"
        >
          <img src={userData?.img_url} alt={userData?.username} />
          <div className="profile-link-text">
            <h3>{userData?.username}</h3>
            <h5>{userData?.is_teacher ? "TEACHER" : "STUDENT"}</h5>
          </div>
        </NavLink>
      </section>
      <nav>
        <NavLink exact className="nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/browse">
          Browse
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;

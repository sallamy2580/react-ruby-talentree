import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { register } from "../../services/users";
const Register = (props) => {
  const { setUserData } = props;
  const history = useHistory();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    is_teacher: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleClick = (e) => {
    const { name } = e.target;
    e.preventDefault();
    console.log(name);
    if (name === "student" && user.is_teacher) {
      setUser({
        ...user,
        is_teacher: false,
      });
    } else if (name === "teacher" && !user.is_teacher) {
      setUser({
        ...user,
        is_teacher: true,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const createUser = async () => {
      const newUser = await register(user);
      setUserData(newUser);
      setTimeout(() => {
        history.push("/");
      }, 500);
    };
    createUser();
  };

  return (
    <div className="login-register">
      <section className="login-register-heading">
        <h1>TalenTree</h1>
        <h5>Where leaders create leaders</h5>
      </section>
      <form className="login-register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          value={user.username}
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={user.email}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={user.password}
          onChange={handleChange}
        />
        <div className="buttons">
          <button
            className={`student-btn${user.is_teacher ? "" : " btn-selected"}`}
            onClick={handleClick}
            name="student"
          >
            <img
              src="img/BranchOutline.png"
              alt="Talentree Student Logo"
              name="student"
            />{" "}
            Student
          </button>
          <button
            className={`teacher-btn${user.is_teacher ? " btn-selected" : ""}`}
            onClick={handleClick}
            name="teacher"
          >
            <img
              src="img/TreeOutline.png"
              alt="Talentree Student Logo"
              name="teacher"
            />{" "}
            Teacher
          </button>
        </div>
        <button type="submit">Submit</button>
        <p>
          Already have an account?{" "}
          <Link className="login-register-link" to="/login">
            Log in!
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;

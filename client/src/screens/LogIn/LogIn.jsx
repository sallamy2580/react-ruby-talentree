import "./LogIn.css";
const LogIn = () => {
  return (
    <div className="login-register">
      <section className="login-register-heading">
        <h1>TalenTree</h1>
        <h5>Where leaders create leaders</h5>
      </section>
      <form className="login-register-form">
        <h2>Register</h2>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <div className="buttons">
          <button className="student-btn">
            <img src="img/BranchOutline.png" alt="Talentree Student Logo" />{" "}
            Student
          </button>
          <button className="teacher-btn">
            <img src="img/TreeOutline.png" alt="Talentree Student Logo" />{" "}
            Teacher
          </button>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LogIn;

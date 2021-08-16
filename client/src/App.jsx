import { Switch, Route, Redirect } from "react-router-dom";
import LogIn from "./screens/LogIn/LogIn";
import Register from "./screens/Register/Register";
import "./App.css";
import { useEffect, useState } from "react";
import { verify } from "./services/users";
import Main from "./components/Main/Main";
import LogOut from "./screens/LogOut/LogOut";

function App() {
  const [authorized, setAuthorized] = useState(null);
  const [userData, setUserData] = useState({});
  useEffect(() => {
    const reverify = async () => {
      try {
        const currUser = await verify();
        setUserData(currUser);
        return true;
      } catch (error) {
        return false;
      }
    };
    setAuthorized(reverify());
  }, []);
  return (
    <div className="App">
      <Switch>
        <Route exact path="/login">
          {authorized ? (
            <Redirect to="/" />
          ) : (
            <LogIn setUserData={setUserData} />
          )}
        </Route>
        <Route exact path="/register">
          {authorized ? (
            <Redirect to="/" />
          ) : (
            <Register setUserData={setUserData} />
          )}
        </Route>
        <Route exact path="/logout">
          <LogOut />
        </Route>
        <Route>
          {authorized ? <Main userData={userData} /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </div>
  );
}

export default App;

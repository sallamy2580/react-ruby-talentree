import { Switch, Route, Redirect } from "react-router-dom";
import LogIn from "./screens/LogIn/LogIn";
import Register from "./screens/Register/Register";
import "./App.css";
import { useEffect, useState } from "react";
import { verify } from "./services/users";
import Main from "./components/Main/Main";

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
  return authorized ? (
    <div className="App">
      <Switch>
        <Route exact path="/login">
          <LogIn setUserData={setUserData} />
        </Route>
        <Route exact path="/register">
          <Register setUserData={setUserData} />
        </Route>
        <Route>
          <Main userData={userData} />
        </Route>
      </Switch>
    </div>
  ) : (
    <Redirect to="/login" />
  );
}

export default App;

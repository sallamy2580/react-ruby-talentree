import { Switch, Route } from "react-router-dom";
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
          <LogIn userData={userData} setUserData={setUserData} />
        </Route>
        <Route exact path="/register">
          <Register userData={userData} setUserData={setUserData} />
        </Route>
        <Route exact path="/logout">
          <LogOut />
        </Route>
        <Route>
          <Main userData={userData} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

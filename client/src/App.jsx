import { Switch, Route } from "react-router-dom";
import LogIn from "./screens/LogIn/LogIn";
import Register from "./screens/Register/Register";
import "./App.css";
import { useEffect, useState } from "react";
import { verify } from "./services/users";
import Main from "./components/Main/Main";

function App() {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    const reverify = async () => {
      const currUser = await verify();
      console.log(currUser);
      setUserData(currUser);
    };
    reverify();
  }, []);
  return (
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
  );
}

export default App;

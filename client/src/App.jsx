import { Switch, Route } from "react-router-dom";
import Home from "./screens/Home/Home";
import Browse from "./screens/Browse/Browse";
import CreatePost from "./screens/CreatePost/CreatePost";
import EditPost from "./screens/EditPost/EditPost";
import LogIn from "./screens/LogIn/LogIn";
import Register from "./screens/Register/Register";
import Profile from "./screens/Profile/Profile";
import TeacherProfile from "./screens/TeacherProfile/TeacherProfile";
import "./App.css";
import { useEffect, useState } from "react";
import { verify } from "./services/users";

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
        <Route exact path="/">
          <Home userData={userData} />
        </Route>
        <Route path="/browse">
          <Browse />
        </Route>
        <Route path="/new">
          <CreatePost userData={userData} />
        </Route>
        <Route path="/edit">
          <EditPost />
        </Route>
        <Route path="/login">
          <LogIn setUserData={setUserData} />
        </Route>
        <Route path="/register">
          <Register setUserData={setUserData} />
        </Route>
        <Route path="/profile">
          <Profile userData={userData} />
        </Route>
        <Route path="/teacher/:id">
          <TeacherProfile userData={userData} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

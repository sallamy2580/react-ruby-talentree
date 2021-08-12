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

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/browse" component={Browse} />
        <Route path="/new" component={CreatePost} />
        <Route path="/edit" component={EditPost} />
        <Route path="/login" component={LogIn} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
        <Route path="/teacher/:id" component={TeacherProfile} />
      </Switch>
    </div>
  );
}

export default App;

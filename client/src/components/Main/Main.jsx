import { Redirect, Route, Switch } from "react-router-dom";
import Home from "../../screens/Home/Home";
import Browse from "../../screens/Browse/Browse";
import CreatePost from "../../screens/CreatePost/CreatePost";
import EditPost from "../../screens/EditPost/EditPost";
import Profile from "../../screens/Profile/Profile";
import TeacherProfile from "../../screens/TeacherProfile/TeacherProfile";
import Layout from "../Layout/Layout";
import CreateCourse from "../../screens/CreateCourse/CreateCourse";
import { useEffect } from "react";
import { verify } from "../../services/users";

import CourseDetail from "../../screens/CourseDetail/CourseDetail";

const Main = ({ userData, setUserData }) => {
  useEffect(() => {
    const reverify = async () => {
      try {
        const currUser = await verify();
        if (currUser.img_url === null) {
          currUser.img_url =
            "https://res.cloudinary.com/dszox5xnw/image/upload/v1629222245/TalenTree/NoUserImage_uzwprl.png";
        }
        setUserData(currUser);
        return true;
      } catch (error) {
        return false;
      }
    };
    reverify();
  }, [setUserData]);

  if (typeof userData === "undefined") {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home userData={userData} />
          </Route>
          <Route exact path="/browse">
            <Browse />
          </Route>
          <Route exact path="/new">
            <CreatePost userData={userData} />
          </Route>
          <Route exact path="/edit/:id">
            <EditPost userData={userData} />
          </Route>
          <Route exact path="/profile">
            <Profile userData={userData} />
          </Route>
          <Route exact path="/course/new">
            <CreateCourse userData={userData} />
          </Route>
          <Route exact path="/course/:id">
            <CourseDetail userData={userData} />
          </Route>
          <Route exact path="/teacher/:id">
            <TeacherProfile userData={userData} />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
};

export default Main;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Post from "../../components/Post/Post";
import { getUserPosts } from "../../services/users";
import "./Profile.css";

const Profile = ({ userData }) => {
  const [userPosts, setUserPosts] = useState([]);
  const [toggleFetch, setToggleFetch] = useState([]);
  useEffect(() => {
    if (userData?.id) {
      const fetchPosts = async () => {
        const data = await getUserPosts(userData?.id);
        setUserPosts(data);
      };
      fetchPosts();
    }
  }, [userData?.id, toggleFetch]);
  return userData ? (
    <main className="profile">
      <section className="user-info">
        <div className="user-info-image">
          <img src={userData?.img_url} alt={userData?.username} />
        </div>
        <div className="user-info-text">
          <div className="user-info-header">
            <h2>{userData?.username?.toUpperCase()}</h2>
            <h4>{userData?.is_teacher ? "Teacher" : "Student"}</h4>
          </div>
          <p>{userData?.bio}</p>
          <div className="user-stats">
            <h5>POSTS</h5>
            <h2>{userPosts?.length}</h2>
          </div>
          <div className="user-info-buttons">
            <Link to="/logout">Log Out</Link>
          </div>
        </div>
      </section>
      {/* <h2>COURSES</h2>
      <section className="user-courses"></section> */}
      <h2>POSTS</h2>
      <section className="user-posts">
        {userPosts?.length ? (
          userPosts?.map((post) => (
            <Post
              key={post.id}
              post={post}
              userId={userData?.id}
              setToggleFetch={setToggleFetch}
            />
          ))
        ) : (
          <h4>No posts yet.</h4>
        )}
      </section>
    </main>
  ) : (
    <h1>Loading...</h1>
  );
};

export default Profile;

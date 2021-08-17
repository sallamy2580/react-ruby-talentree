import { useEffect, useState } from "react";
import Post from "../../components/Post/Post";
import { getUserPosts } from "../../services/users";
import "./Profile.css";

const Profile = ({ userData }) => {
  const [userPosts, setUserPosts] = useState([]);
  const [toggleFetch, setToggleFetch] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getUserPosts(userData?.id);
      setUserPosts(data);
    };
    fetchPosts();
  }, [userData.id, toggleFetch]);
  return (
    <main id="profile">
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
        </div>
      </section>
      <section className="user-courses">
        <h2>COURSES</h2>
      </section>
      <section className="user-posts">
        <h2>POSTS</h2>
        {userPosts?.map((post) => (
          <Post
            key={post.id}
            post={post}
            userId={userData?.id}
            setToggleFetch={setToggleFetch}
          />
        ))}
      </section>
    </main>
  );
};

export default Profile;

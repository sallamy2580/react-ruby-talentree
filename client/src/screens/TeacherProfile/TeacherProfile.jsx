import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Post from "../../components/Post/Post";
import { getUser } from "../../services/users";
const TeacherProfile = () => {
  const params = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    const fetchUserInfo = async () => {
      const userData = await getUser(params.id);
      setUser(userData);
    };
    fetchUserInfo();
  }, [params.id]);
  console.log(user);
  return (
    <main id="profile">
      <section className="user-info">
        <div className="user-info-image">
          <img src={user?.img_url} alt={user?.username} />
        </div>
        <div className="user-info-text">
          <div className="user-info-header">
            <h2>{user?.username?.toUpperCase()}</h2>
            <h4>{user?.is_teacher ? "Teacher" : "Student"}</h4>
          </div>
          <p>{user?.bio}</p>
          <div className="user-stats">
            <h5>POSTS</h5>
            <h2>{user?.posts?.length}</h2>
          </div>
        </div>
      </section>
      <section className="user-posts">
        <h2>POSTS</h2>
        {user?.posts?.map((post) => (
          <Post key={post.id} post={post} userId={user?.id} />
        ))}
      </section>
    </main>
  );
};

export default TeacherProfile;

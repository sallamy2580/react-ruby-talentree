import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
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

  return (
    <Layout>
      <h2>{user?.username}</h2>
      <p>{user?.bio}</p>
      <img src={user?.img_url} alt={user?.username} />
      <section>
        {user?.posts?.map((post) => (
          <div className="post" key={post.id}>
            <img src={post.media_url} alt={post.id.toString()} />
            <p>{post.content}</p>
          </div>
        ))}
      </section>
    </Layout>
  );
};

export default TeacherProfile;

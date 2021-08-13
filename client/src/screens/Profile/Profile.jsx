import Layout from "../../components/Layout/Layout";
import Post from "../../components/Post/Post";

const Profile = ({ userData }) => {
  return (
    <Layout>
      <h2>{userData?.username}</h2>
      <h4>{userData?.email}</h4>
      <p>{userData?.bio}</p>
      <section className="user-posts">
        {userData?.posts?.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </section>
    </Layout>
  );
};

export default Profile;

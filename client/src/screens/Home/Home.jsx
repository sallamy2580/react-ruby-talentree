import { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { getPosts } from "../../services/posts";
import "./Home.css";
const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPosts();
      setPosts(data);
    };
    fetchPosts();
  }, []);
  return (
    <Layout>
      <h1>Home</h1>
      <section className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <img src={post.media_url} alt={post.id.toString()} />
            <p>{post.content}</p>
          </div>
        ))}
      </section>
    </Layout>
  );
};

export default Home;

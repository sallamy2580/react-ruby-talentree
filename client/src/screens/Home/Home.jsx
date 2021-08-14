import { useEffect, useState } from "react";
import Post from "../../components/Post/Post";
import { getPosts } from "../../services/posts";
import "./Home.css";
const Home = (props) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPosts();
      setPosts(data);
    };
    fetchPosts();
  }, []);
  return (
    <main>
      <section className="posts">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </section>
    </main>
  );
};

export default Home;

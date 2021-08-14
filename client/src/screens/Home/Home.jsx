import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import Post from "../../components/Post/Post";
import { getPosts } from "../../services/posts";
import "./Home.css";
const Home = ({ userData }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPosts();
      setPosts(data);
    };
    fetchPosts();
  }, []);
  return (
    <main id="home">
      <section className="posts">
        {posts.map((post) => (
          <Post key={post.id} post={post} userId={userData.id} />
        ))}
      </section>
      <Link className="new-post-link" to="/new">
        <AiOutlinePlus />
      </Link>
    </main>
  );
};

export default Home;

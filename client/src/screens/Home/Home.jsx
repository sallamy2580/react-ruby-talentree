import { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import Post from "../../components/Post/Post";
import { getPosts } from "../../services/posts";
import "./Home.css";
const Home = ({ userData }) => {
  const [posts, setPosts] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(true);
  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPosts();
      setPosts(data);
    };
    fetchPosts();
  }, [toggleFetch]);
  if (typeof userData === "undefined") {
    return <Redirect to="/login" />;
  }
  return (
    <main id="home">
      <section className="posts">
        {posts.map((post) => (
          <Post
            key={post?.id}
            post={post}
            userId={userData?.id}
            setToggleFetch={setToggleFetch}
          />
        ))}
      </section>
      <Link className="new-post-link" to="/new">
        <AiOutlinePlus />
      </Link>
    </main>
  );
};

export default Home;

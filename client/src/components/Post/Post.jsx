import "./Post.css";

const Post = ({ post }) => {
  const { media_url, content, user, course, created_at } = post;
  const dateCreated = new Date(created_at).toString();
  const dateArray = dateCreated.split(" ").splice(0, 5);
  dateArray[4] = dateArray[4].slice(0, 5);
  const displayDate = `${dateArray[0]}, ${dateArray[1]} ${dateArray[2]}, ${dateArray[3]} at ${dateArray[4]}`;
  return (
    <article className="post">
      <div className="post-header">
        <div className="post-header-img">
          <img src={user?.img_url} alt={user?.username} />
        </div>
        <div className="post-header-text">
          <h3>
            {user?.username} • {course?.name}
          </h3>
          <h5>{displayDate}</h5>
        </div>
      </div>
      <p>{content}</p>
      <img src={media_url} alt={user?.username} />
    </article>
  );
};

export default Post;

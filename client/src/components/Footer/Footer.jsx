import { FiUser, FiGithub, FiLinkedin, FiFacebook } from "react-icons/fi";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <h5>Rahul Joshi &copy; 2021</h5>
      <div className="socials">
        <a
          href="https://www.rahulpjoshi.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiUser />
        </a>
        <a
          href="https://github.com/rahulpjo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/rahul-joshi-00/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiLinkedin />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100004289202416"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiFacebook />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

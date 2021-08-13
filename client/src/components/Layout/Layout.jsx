import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = (props) => {
  const { userData } = props;
  return (
    <>
      <Header userData={userData} />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;

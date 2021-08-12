const Header = () => {
  return (
    <header>
      <section>
        <h1>TalenTree</h1>
      </section>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/browse">Browse</Link>
      </nav>
    </header>
  );
};

export default Header;

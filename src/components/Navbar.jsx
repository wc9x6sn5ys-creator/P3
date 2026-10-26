function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        Bhavik Ahuja
      </div>

      <div className="navbar-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#articles">Articles</a>
        <a href="#tutorials">Tutorials</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
      </div>

      <a href="#newsletter" className="subscribe-link">
        Subscribe
      </a>
    </nav>
  );
}

export default Navbar;
const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <span className="logo">Y</span>
        <span className="title">Hacker News</span>
        <nav className="nav">
          <a href="#" className="nav-link">new</a>
          <span className="separator">|</span>
          <a href="#" className="nav-link">past</a>
          <span className="separator">|</span>
          <a href="#" className="nav-link">comments</a>
          <span className="separator">|</span>
          <a href="#" className="nav-link">ask</a>
          <span className="separator">|</span>
          <a href="#" className="nav-link">show</a>
          <span className="separator">|</span>
          <a href="#" className="nav-link">jobs</a>
          <span className="separator">|</span>
          <a href="#" className="nav-link">submit</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
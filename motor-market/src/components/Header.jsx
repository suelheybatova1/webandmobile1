export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-content">
        <a className="logo" href="#listings" aria-label="Turbo React home">
          TURBO.REACT
        </a>

        <nav aria-label="Main navigation">
          <ul className="nav-links">
            <li><a href="#listings">All Cars</a></li>
            <li><a href="#listings">New Cars</a></li>
            <li><a href="#dealers">Dealers</a></li>
            <li><a href="#about">About Us</a></li>

            <li>♥: {favoriteCount}</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

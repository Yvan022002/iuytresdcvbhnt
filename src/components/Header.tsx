function Header() {
  const basePath = import.meta.env.BASE_URL
  
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="blog-title">iuytresdcvbhnt</h1>
        <nav className="nav">
          <a href={basePath} className="nav-link">Accueil</a>
          <a href={`${basePath}articles`} className="nav-link">Articles</a>
          <a href={`${basePath}about`} className="nav-link">À propos</a>
          <a href={`${basePath}contact`} className="nav-link">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Header

import { Link } from '@remix-run/react';

function Header() {
  return (
    <header className="header">
      <div className="contenedor barra">
        <div className="logo">

        </div>
        <nav className="navegacion">
          <Link
            to='/'
          >Inicio</Link>

          <Link
            to='/us'
          >Us</Link>

          <Link
            to='/store'
          >Store</Link>

          <Link
            to='/blog'
          >Blog</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header

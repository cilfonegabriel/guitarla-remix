import { Link, useLocation } from '@remix-run/react';

function Navegation() {

    const location = useLocation()

  return (
    <nav className="navegacion">
        <Link
            to='/'
            className={location.pathname === '/' ? 'active' : '' }
        >Inicio</Link>

        <Link
            to='/us'
            className={location.pathname === '/us' ? 'active' : '' }
        >Us</Link>

        <Link
            to='/store'
            className={location.pathname === '/store' ? 'active' : '' }
        >Store</Link>

        <Link
            to='/blog'
            className={location.pathname === '/blog' ? 'active' : '' }
        >Blog</Link>
    </nav>
  )
}

export default Navegation

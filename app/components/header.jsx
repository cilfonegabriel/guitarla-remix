import { Link, useLocation } from '@remix-run/react';
import logo from '../../public/img/logo.svg'

function Header() {

  const location = useLocation()
  console.log(location)

  return (
    <header className="header">
      <div className="contenedor barra">
        <Link to='/'>
          <img className='logo' src={logo} alt='imagen logo' />
        </Link>
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
      </div>
    </header>
  )
}

export default Header

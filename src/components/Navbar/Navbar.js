import './Navbar.scss'
import logo from '../../assets/imgs/logo.png'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

export const Navbar = ({red}) => {

    return (
        <header className="header" style={{backgroundColor: red ? 'red' : 'darkcyan'}}>
            <div className="header__container">
                <img src={logo} className="header__logo" alt='logo'/>

                <nav className="navbar">
                    <Link to='/' className="navbar__link">Inicio</Link>
                    <Link to='/productos/limpieza' className="navbar__link">Limpieza</Link>
                    <Link to='/productos/carniceria' className="navbar__link">Carnes</Link>
                    <Link to='/productos/panaderia' className="navbar__link">Pan</Link>
                    <Link to='/productos/perfumeria' className="navbar__link">Perfu</Link>
                    <Link to='/productos/verduleria' className="navbar__link">Verdu</Link>
                    <Link to='/nosotros' className="navbar__link">Nosotros</Link>
                    {/* <Link to='/pokeapi' className="navbar__link">Pokeapi</Link> */}
                </nav>

                <CartWidget />
            </div>
        </header>
    )
}
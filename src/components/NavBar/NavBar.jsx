import './NavBar.css'
import logo from "../../assets/logo.png";
import CardWidget from './CardWidget'
import { Link } from 'react-router-dom'
export default function NavBar() {
    return (
        <nav className="nav-head">
            <div>
                <ul className="nav-list">
                    <Link to="/">
                        <img className="logo" src={logo} alt="Logo" />
                    </Link>
                    <Link to="/category/Camisas">
                        <li className="nav-item">Camisas</li>
                    </Link>
                    <Link to="/category/Pantalones">
                        <li className="nav-item">Pantalones</li>
                    </Link>
                    <Link to="/category/Sacos">
                        <li className="nav-item">Sacos</li>
                    </Link>
                </ul>
            </div>
            <div className="cart">
                <Link to="/cart">
                <CardWidget />
                </Link>
            </div>
        </nav>
    )
}
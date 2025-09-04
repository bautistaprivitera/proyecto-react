import './NavBar.css'
import logo from '../assets/logo.png'
import CardWidget from './CardWidget'
export default function NavBar() {
    return (
        <nav className="nav-head">
            <div>
                <ul className="nav-list">
                    <img className="logo" src={logo} alt="Logo" />
                    <li className="nav-item">Carniceria</li>
                    <li className="nav-item">Verduleria</li>
                    <li className="nav-item">Panaderia</li>
                </ul>
            </div>
            
            <div className="cart">
                <CardWidget />
            </div>
        </nav>
    )
}
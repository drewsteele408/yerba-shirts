import {NavLink} from "react-router-dom" 
import "../styles/components/navbar.css"

export default function NavBar() {
    return (
        <header className="navbar">
            <nav className="navbar-container">
                 {/* Navigation links */}
                <ul className="nav-links">
                    <li>
                        <NavLink to="/" end className={({isActive}) => (isActive ? "active" : "")}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/products" end className={({isActive}) => (isActive ? "active" : "")}>
                            Products
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/carts" end className={({isActive}) => (isActive ? "active" : "")}>
                            Cart
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/login" end className={({isActive}) => (isActive ? "active" : "")}>
                            Login
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
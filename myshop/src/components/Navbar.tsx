import {NavLink} from "react-router-dom" 
import { useCart } from "../features/cart/CartContext"
import "../styles/components/navbar.css"

export default function NavBar() {
    const { cartItemCount } = useCart();

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
                            Cart {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
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
import {Outlet} from "react-router-dom"
import NavBar  from "./components/Navbar"
import { CartProvider } from "./features/cart/CartContext"

export default function App(){
  return(
    <CartProvider>
      <NavBar />
      <div>
        <main>
          <Outlet />
        </main>
      </div>
    </CartProvider>
  )
}

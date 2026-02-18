import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "../App"
import HomePage from "../pages/HomePage"
import ProductPage from "../features/products/ProductPage"
import ProductDetailPage from "../features/products/ProductDeatilPage"
import CartPage from "../pages/CartPage"
import CheckoutPage from "../pages/CheckoutPage"
import LoginPage from "../pages/LoginPage"

const router = createBrowserRouter([
    {
        path: "/", 
        element: <App />, 
        children: [
            {index: true, element: <HomePage />},
            {path: "products", element: <ProductPage />},
            {path: "products/:productId", element: <ProductDetailPage />},
            {path: "carts", element: <CartPage />},
            {path: "checkout", element: <CheckoutPage />},
            {path: "login", element: <LoginPage />},
        ],
    },
])

export default function AppRouter() {
    return <RouterProvider router={router} />
}
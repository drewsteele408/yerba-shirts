import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "../App"
import HomePage from "../pages/HomePage"
import ProductPage from "../features/products/ProductPage"
import ProductDetailPage from "../features/products/ProductDeatilPage"

const router = createBrowserRouter([
    {
        path: "/", 
        element: <App />, 
        children: [
            {index: true, element: <HomePage />},
            {path: "products", element: <ProductPage />},
            {path: "products/:productId", element: <ProductDetailPage />},
        ],
    },
])

export default function AppRouter() {
    return <RouterProvider router={router} />
}
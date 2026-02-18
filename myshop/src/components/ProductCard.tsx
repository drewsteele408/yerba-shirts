import { Link } from 'react-router-dom';
import { useCart } from '../features/cart/CartContext';

interface ProductCardProps {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
    category: string;
}

export default function ProductCard({ id, name, price, description, image, category }: ProductCardProps) {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart({
            id,
            name,
            price,
            image,
        });
    };

    return (
        <div className="product-card">
            <div className="product-image">
                <img src={image} alt={name} />
                <div className="product-category">{category}</div>
            </div>
            <div className="product-info">
                <h3>{name}</h3>
                <p className="product-description">{description}</p>
                <div className="product-footer">
                    <span className="price">${price.toFixed(2)}</span>
                    <div className="product-buttons">
                        <button 
                            className="btn primary" 
                            onClick={handleAddToCart}
                        >
                            Add to Cart
                        </button>
                        <Link to={`/products/${id}`} className="btn secondary">
                            Details
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
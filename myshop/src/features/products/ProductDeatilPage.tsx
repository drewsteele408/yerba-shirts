import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../../styles/pages/product-detail.css';

// Eventually change this to get information from a database 
const sampleProducts = [
    {
        id: "1",
        name: "Traditional Yerba Mate",
        price: 12.99,
        description: "Classic Argentine yerba mate with a balanced flavor profile. This premium blend offers a perfect combination of leaves, stems, and dust, creating an authentic mate experience. Grown in the fertile regions of Misiones, Argentina, this yerba mate delivers a smooth, full-bodied flavor with subtle notes of herbs and earth.",
        image: "/images/playadito.jpg",
        category: "yerba",
        details: {
            origin: "Argentina",
            weight: "1000g",
            type: "Traditional",
            ingredients: "Yerba Mate leaves, stems (naturally caffeinated)",
            instructions: "Use with traditional gourd and bombilla. Fill gourd 2/3 full, add cool water to create mound, insert bombilla, then add hot water (70-80°C)."
        }
    },
   
];

export default function ProductDetailPage() {
    const { productId } = useParams();
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);

    // Find the product from our sample data
    const product = sampleProducts.find(p => p.id === productId);

    if (!product) {
        return (
            <div className="container error-container">
                <h2>Product Not Found</h2>
                <button className="btn primary" onClick={() => navigate('/products')}>
                    Back to Products
                </button>
            </div>
        );
    }

    const handleAddToCart = () => {
        // TODO: Implement cart functionality
        console.log(`Added ${quantity} of ${product.name} to cart`);
    };

    return (
        <div className="product-detail-page">
            <div className="container">
                <button className="back-button" onClick={() => navigate('/products')}>
                    ← Back to Products
                </button>

                <div className="product-detail-grid">
                    <div className="product-detail-image">
                        <img src={product.image} alt={product.name} />
                    </div>

                    <div className="product-detail-info">
                        <div className="product-category-tag">{product.category}</div>
                        <h1>{product.name}</h1>
                        <div className="product-price">${product.price.toFixed(2)}</div>
                        
                        <p className="product-description">{product.description}</p>

                        <div className="product-actions">
                            <div className="quantity-selector">
                                <button 
                                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                                    disabled={quantity <= 1}
                                >
                                    -
                                </button>
                                <span>{quantity}</span>
                                <button 
                                    onClick={() => setQuantity(q => q + 1)}
                                >
                                    +
                                </button>
                            </div>
                            <button 
                                className="btn primary add-to-cart"
                                onClick={handleAddToCart}
                            >
                                Add to Cart
                            </button>
                        </div>

                        <div className="product-details">
                            <h2>Product Details</h2>
                            <div className="details-grid">
                                <div className="detail-item">
                                    <span className="detail-label">Origin:</span>
                                    <span className="detail-value">{product.details.origin}</span>
                                </div>
                                <div className="detail-item">
                                    <span className="detail-label">Weight:</span>
                                    <span className="detail-value">{product.details.weight}</span>
                                </div>
                                <div className="detail-item">
                                    <span className="detail-label">Type:</span>
                                    <span className="detail-value">{product.details.type}</span>
                                </div>
                            </div>

                            <div className="product-instructions">
                                <h3>Ingredients</h3>
                                <p>{product.details.ingredients}</p>
                                <h3>Preparation Instructions</h3>
                                <p>{product.details.instructions}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
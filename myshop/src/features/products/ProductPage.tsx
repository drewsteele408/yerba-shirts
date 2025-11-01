import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard';
import '../../styles/pages/products.css';

// Sample product data - replace with API calls eventually
const sampleProducts = [
    {
        id: "1",
        name: "Traditional Yerba Mate",
        price: 12.99,
        description: "Classic Argentine yerba mate with a balanced flavor profile",
        image: "/images/playadito.jpg",
        category: "yerba"
    },
    {
        id: "2",
        name: "Handcrafted Mate Gourd",
        price: 29.99,
        description: "Natural calabaza gourd with silver trim",
        image: "/images/gourd-traditional.jpg",
        category: "gourds"
    },
    {
        id: "3",
        name: "Premium Bombilla",
        price: 19.99,
        description: "Stainless steel bombilla with enhanced filtering",
        image: "/images/bombilla-premium.webp",
        category: "bombillas"
    },
];

export default function ProductPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [filteredProducts, setFilteredProducts] = useState(sampleProducts);
    const [activeCategory, setActiveCategory] = useState<string>('all');

    // Handle category filter changes
    const handleCategoryChange = (category: string) => {
        setActiveCategory(category);
        if (category === 'all') {
            // Remove the category parameter from URL for 'all'
            searchParams.delete('cat');
            setSearchParams(searchParams);
            setFilteredProducts(sampleProducts);
        } else {
            // Update URL with new category
            setSearchParams({ cat: category });
            setFilteredProducts(sampleProducts.filter(product => product.category === category));
        }
    };

    // Initialize filters from URL on page load
    useEffect(() => {
        const category = searchParams.get('cat');
        if (category) {
            handleCategoryChange(category);
        } else {
            handleCategoryChange('all');
        }
    }, []); // Empty dependency array since we only want this on mount

    return (
        <div className="product-page">
            <div className="container">
                <header className="product-header">
                    <h1>Our Products</h1>
                    <div className="category-filters">
                        <button 
                            className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
                            onClick={() => handleCategoryChange('all')}
                        >
                            All Products
                        </button>
                        <button 
                            className={`filter-btn ${activeCategory === 'yerba' ? 'active' : ''}`}
                            onClick={() => handleCategoryChange('yerba')}
                        >
                            Yerba Mate
                        </button>
                        <button 
                            className={`filter-btn ${activeCategory === 'gourds' ? 'active' : ''}`}
                            onClick={() => handleCategoryChange('gourds')}
                        >
                            Gourds
                        </button>
                        <button 
                            className={`filter-btn ${activeCategory === 'bombillas' ? 'active' : ''}`}
                            onClick={() => handleCategoryChange('bombillas')}
                        >
                            Bombillas
                        </button>
                    </div>
                </header>

                <div className="products-grid">
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            </div>
        </div>
    );
}

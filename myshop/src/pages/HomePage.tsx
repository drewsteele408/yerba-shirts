import "../styles/components/homepage.css"
import { Link } from "react-router-dom"

export default function HomePage() {
    return (
        <div className="home">
            <section className="hero">
                <div className="hero-background"></div>
                <div className="container hero-content">
                    <h1>Sip Tradition</h1>
                    <p>Premium yerba mate, artisan gourds, and stainless steel bombillas - curated for ritual and daily energy.</p>
                    <div className="actions">
                        <Link to="/products?cat=yerba" className="btn primary">Shop Yerba</Link>
                        <Link to="/products?cat=starter%20kits" className="btn secondary">Starter Kits</Link>
                    </div>
                </div>
            </section>

            <section className="categories">
                <div className="container">
                    <h2>Explore Our Categories</h2>
                    <div className="category-grid">
                        <Link to="/products?cat=yerba" className="category-card">
                            <img src="/images/yerba.jpg" alt="Yerba Mate" />
                            <h3>Yerba Mate</h3>
                            <p>Traditional & flavored blends</p>
                        </Link>
                        <Link to="/products?cat=gourds" className="category-card">
                            <img src="/images/gourds.jpg" alt="Mate Gourds" />
                            <h3>Mate Gourds</h3>
                            <p>Traditional & modern designs</p>
                        </Link>
                        <Link to="/products?cat=bombillas" className="category-card">
                            <img src="/images/bombillas.jpg" alt="Bombillas" />
                            <h3>Bombillas</h3>
                            <p>Premium filtering straws</p>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="benefits">
                <div className="container">
                    <h2>Why Choose Yerba Mate?</h2>
                    <div className="benefits-grid">
                        <div className="benefit-card">
                            <div className="icon"></div>
                            <h3>Natural Energy</h3>
                            <p>Sustained focus without the jitters</p>
                        </div>
                        <div className="benefit-card">
                            <div className="icon"></div>
                            <h3>Rich in Nutrients</h3>
                            <p>Packed with vitamins & antioxidants</p>
                        </div>
                        <div className="benefit-card">
                            <div className="icon"></div>
                            <h3>Community</h3>
                            <p>Join the mate-drinking tradition</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="newsletter">
                <div className="container">
                    <div className="newsletter-content">
                        <h2>Join Our Mate Community</h2>
                        <p>Subscribe for exclusive offers, brewing tips, and mate culture insights.</p>
                        <form className="newsletter-form">
                            <input type="email" placeholder="Enter your email" />
                            <button type="submit" className="btn primary">Subscribe</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}
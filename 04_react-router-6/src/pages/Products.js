import { Link } from "react-router-dom";
import products from "../data";
const Products = () => {
    return (
        <section className="section">
            <div className="products">
                {products.map((product) => {
                    return (
                        <article key={product.id}>
                            <h3>{product.name}</h3>
                            <Link to={`/products/${product.id}`}>
                                {" "}
                                see details
                            </Link>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Products;

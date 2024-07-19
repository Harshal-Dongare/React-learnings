import { useParams, Link } from "react-router-dom";
import products from "../data";
const SingleProduct = () => {
    const { productId } = useParams();
    const product = products.find((product) => product.id === productId);
    const { image, id, name } = product;
    return (
        <section className="section product">
            <h2>{name}</h2>
            <h3>{id}</h3>
            <img src={image} alt="" />
            <Link to="/products" className="btn">
                back to products
            </Link>
        </section>
    );
};

export default SingleProduct;

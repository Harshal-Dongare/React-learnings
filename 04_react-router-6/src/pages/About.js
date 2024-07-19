import { Link } from "react-router-dom";

const About = () => {
    return (
        <section className="section">
            <h2>About</h2>
            <Link className="btn" to="/">
                back Home
            </Link>
        </section>
    );
};
export default About;

import React from "react";
import ReactDOM from "react-dom/client";
import { books } from "./books";
import Book from "./Book";

import "./index.css";

const BookList = () => {
    return (
        <>
            <h1>Amazon Best Sellers</h1>
            <section className="booklist">
                {books &&
                    books.map((book) => {
                        return <Book key={book.id} {...book} />;
                    })}
            </section>
        </>
    );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<BookList />);

// export default Greeting;

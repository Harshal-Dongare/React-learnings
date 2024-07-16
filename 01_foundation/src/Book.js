const Book = ({ id, author, title, imgURL }) => {
    return (
        <article className="book">
            <img src={imgURL} alt={title} />
            <h2>{title}</h2>
            <h4>{author}</h4>
            <span># {id}</span>
        </article>
    );
};

export default Book;

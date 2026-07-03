import { useEffect, useState } from "react";
import { useAuth } from "../auth/useAuth";
import { Link } from "react-router-dom";

interface BookLog {
    id: number;
    title: string;
    author: string;
    rating: number | null;
    date_read: string | null;
    created_at: string;
}

export default function Bookshelf() {
    const [books, setBooks] = useState<BookLog[]>([]);
    const [sort, setSort] = useState("-created_at");
    const { token, username, logout } = useAuth();

    useEffect(() => {
        fetch(`/api/books/?ordering=${sort}`, {
            headers: { Authorization: `Token ${token}` },
        })
            .then((res) => res.json())
            .then(setBooks);
    }, [token, sort]);

    return (
        <>
            <p>
                Welcome, {username}! <button onClick={logout}>Logout</button>
            </p>
            <h1>My Bookshelf</h1>
            <Link to="/books/new">Add New Log</Link>
            <div>
                Sort:{" "}
                <button onClick={() => setSort("-created_at")}>Newest</button>
                <button onClick={() => setSort("created_at")}>Oldest</button>
                <button onClick={() => setSort("title")}>Title A-Z</button>
                <button onClick={() => setSort("-rating")}>Rating (Highest)</button>
                <button onClick={() => setSort("rating")}>Rating (Lowest)</button>
            </div>
            {books.map((book) => (
                <div key={book.id}>
                    <Link to={`/books/${book.id}`}>
                        <h3>{book.title}</h3>
                        <p>{book.author}</p>
                    </Link>
                </div>
            ))}
        </>
    );
}

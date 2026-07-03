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
    const { token, username, logout } = useAuth();

    useEffect(() => {
        fetch("/api/books/", {
            headers: { Authorization: `Token ${token}` },
        })
            .then((res) => res.json())
            .then(setBooks);
    }, [token]);

    return (
        <>
            <p>
                Welcome, {username}! <button onClick={logout}>Logout</button>
            </p>
            <h1>My Bookshelf</h1>
            <Link to="/books/new">Add New Log</Link>
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

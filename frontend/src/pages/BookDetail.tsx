import { useEffect, useState } from "react";
import { useAuth } from "../auth/useAuth";
import { useParams, Link } from "react-router-dom";

interface BookLog {
    id: number;
    title: string;
    author: string;
    notes: string;
    rating: number | null;
    date_read: string | null;
    created_at: string;
}

export default function BookDetail() {
    const { id } = useParams();
    const { token } = useAuth();
    const [book, setBook] = useState<BookLog | null>(null);

    useEffect(() => {
        fetch(`/api/books/${id}/`, {
            headers: { Authorization: `Token ${token}` },
        })
            .then((res) => res.json())
            .then(setBook);
    }, [id, token]);

    if (!book) return <p>Loading...</p>;

    return (
        <>
            <Link to="/">← Back to Bookshelf</Link>
            <h1>{book.title}</h1>
            <p>by {book.author}</p>
            {book.rating && <p>Rating: {book.rating}/5</p>}
            {book.date_read && <p>Read: {book.date_read}</p>}
            <p>{book.notes}</p>
        </>
    );
}

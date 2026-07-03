import { useState } from "react";
import { useAuth } from "../auth/useAuth";
import { useNavigate } from "react-router-dom";

export default function BookForm() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [notes, setNotes] = useState("");
    const [date_read, setDateRead] = useState("");
    const [rating, setRating] = useState("");
    const { token } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        const body: Record<string, unknown> = { title, author, notes };
        if (date_read) body.date_read = date_read;
        if (rating) body.rating = parseInt(rating);

        const res = await fetch("/api/books/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${token}`,
            },
            body: JSON.stringify(body),
        });
        if (res.ok) navigate("/");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>New Log</h1>
            <input
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <input
                placeholder="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
            />
            <textarea
                placeholder="Notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
            />
            <input
                type="date"
                value={date_read}
                onChange={(e) => setDateRead(e.target.value)}
            />
            <input
                type="number"
                min={1}
                max={5}
                placeholder="Rating (1-5)"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
            />
            <button type="submit">Save</button>
        </form>
    );
}

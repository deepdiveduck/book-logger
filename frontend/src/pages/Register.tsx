import { useState } from "react";
import { useAuth } from "../auth/useAuth";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { register } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        setError("");
        try {
            await register(username, email, password);
            navigate("/");
        } catch {
            setError("Registration failed");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Register</h1>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <input
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Register</button>
            <p>
                Already have an account? <Link to="/login">Login</Link>
            </p>
        </form>
    );
}

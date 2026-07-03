import { useState } from "react";
import { useAuth } from "../auth/useAuth";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        setError("");
        try {
            await login(username, password);
            navigate("/");
        } catch {
            setError("Invalid credentials");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <input
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
            <p>
                Don't have an account? <Link to="/register">Register</Link>
            </p>
        </form>
    );
}

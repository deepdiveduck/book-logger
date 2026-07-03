import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./auth/useAuth";
import Login from "./pages/Login";
import Register from "./pages/Register";

function Home() {
    const { username, logout } = useAuth();
    return (
        <>
            <h1>Book Logger</h1>
            <p>Welcome, {username}!</p>
            <button onClick={logout}>Logout</button>
        </>
    );
}

function App() {
    const { token } = useAuth();

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/login"
                    element={token ? <Navigate to="/" /> : <Login />}
                />
                <Route
                    path="/register"
                    element={token ? <Navigate to="/" /> : <Register />}
                />
                <Route
                    path="/*"
                    element={token ? <Home /> : <Navigate to="/login" />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

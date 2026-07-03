import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./auth/useAuth";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Bookshelf from "./pages/Bookshelf";
import BookDetail from "./pages/BookDetail";
import BookForm from "./pages/BookForm";

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
                    path="/"
                    element={token ? <Bookshelf /> : <Navigate to="/login" />}
                />
                <Route
                    path="/books/new"
                    element={token ? <BookForm /> : <Navigate to="/login" />}
                />
                <Route
                    path="/books/:id/edit"
                    element={token ? <BookForm /> : <Navigate to="/login" />}
                />
                <Route
                    path="/books/:id"
                    element={token ? <BookDetail /> : <Navigate to="/login" />}
                />
                <Route
                    path="*"
                    element={<Navigate to="/" />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

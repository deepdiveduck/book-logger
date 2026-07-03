import { useState, type ReactNode } from "react";
import { AuthContext } from "./context";

export function AuthProvider({ children }: { children: ReactNode }) {
    const [token, setToken] = useState<string | null>(
        localStorage.getItem("token"),
    );

    const [username, setUsername] = useState<string | null>(
        localStorage.getItem("username"),
    );

    const register = async (
        username: string,
        email: string,
        password: string,
    ) => {
        const res = await fetch("/api/auth/register/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, email, password }),
        });

        if (!res.ok) throw new Error("Registration failed");
        const data = await res.json();
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", data.username);
        setToken(data.token);
        setUsername(data.username);
    };

    const login = async (username: string, password: string) => {
        const res = await fetch("/api/auth/login/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        if (!res.ok) throw new Error("Login failed");

        const data = await res.json();
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", data.username);
        setToken(data.token);
        setUsername(data.username);
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        setToken(null);
        setUsername(null);
    };

    return (
        <AuthContext.Provider
            value={{ token, username, register, login, logout }}
        >
            {children}
        </AuthContext.Provider>
    );
}

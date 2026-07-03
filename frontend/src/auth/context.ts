import { createContext } from "react";

interface AuthContextType {
    token: string | null;
    username: string | null;
    login: (username: string, password: string) => Promise<void>;
    register: (username: string, email: string, password: string) => Promise<void>;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);
export type { AuthContextType };

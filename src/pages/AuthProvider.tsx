// src/context/AuthContext.tsx
import { createContext, useState, ReactNode, useContext } from "react";

// Define the structure of the auth state
interface AuthState {
  user?: string;
}

// Define the full context type
interface AuthContextType {
  auth: AuthState;
  setAuth: (auth: AuthState) => void;
  token?: string;
  setToken: (token: string) => void;
}

// Create the context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

// Auth Provider Component
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [auth, setAuth] = useState<AuthState>({});
  const [token, setToken] = useState<string>("");

  return (
    <AuthContext.Provider value={{ auth, setAuth, token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook for consuming the context
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default AuthContext;

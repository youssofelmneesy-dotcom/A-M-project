import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { apiPost } from "./api/client";
import { AuthResponse, AuthUser } from "./api/types";

interface AuthContextValue {
  user: AuthUser | null;
  token: string | null;
  loading: boolean;
  isAdmin: boolean;
  register: (payload: {
    fullName: string;
    email: string;
    password: string;
  }) => Promise<void>;
  login: (payload: { email: string; password: string }) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue>({
  user: null,
  token: null,
  loading: true,
  isAdmin: false,
  register: async () => {},
  login: async () => {},
  logout: () => {},
});

const STORAGE_TOKEN_KEY = "am_auth_token";
const STORAGE_USER_KEY = "am_auth_user";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(() => {
    const raw = localStorage.getItem(STORAGE_USER_KEY);
    if (!raw) return null;

    try {
      return JSON.parse(raw) as AuthUser;
    } catch {
      return null;
    }
  });
  const [token, setToken] = useState<string | null>(() =>
    localStorage.getItem(STORAGE_TOKEN_KEY)
  );
  const [loading] = useState(false);

  const saveSession = (session: AuthResponse) => {
    setToken(session.token);
    setUser(session.user);
    localStorage.setItem(STORAGE_TOKEN_KEY, session.token);
    localStorage.setItem(STORAGE_USER_KEY, JSON.stringify(session.user));
  };

  const register = async (payload: {
    fullName: string;
    email: string;
    password: string;
  }) => {
    const session = await apiPost<AuthResponse>("/auth/register", payload);
    saveSession(session);
  };

  const login = async (payload: { email: string; password: string }) => {
    const session = await apiPost<AuthResponse>("/auth/login", payload);
    saveSession(session);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem(STORAGE_TOKEN_KEY);
    localStorage.removeItem(STORAGE_USER_KEY);
  };

  const value = useMemo(() => {
    return {
      user,
      token,
      loading,
      isAdmin: user?.role === "admin",
      register,
      login,
      logout,
    };
  }, [loading, token, user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}

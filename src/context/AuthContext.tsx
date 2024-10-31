"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { signIn, getProfile, logout } from "../lib/auth";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

// Define the context types
interface AuthContextType {
  user: UserProfile | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

// Define user profile type (same as in auth.ts)
interface UserProfile {
  name: string;
}

// Define children prop type for the provider
interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUserFromCookies = async () => {
      const token = Cookies.get("token");
      if (token) {
        try {
          await getProfile();
          setUser({ name: "ADMIN" });
        } catch (error) {
          console.error(error);
          logout();
        }
      }
      setLoading(false);
    };

    loadUserFromCookies();
  }, []);

  const login = async (username: string, password: string): Promise<void> => {
    await signIn(username, password);
    setUser({ name: "ADMIN" });
  };

  const logoutUser = (): void => {
    logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout: logoutUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const useProtectedRoute = (): void => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [loading, user, router]);
};


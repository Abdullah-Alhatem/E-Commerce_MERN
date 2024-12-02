import { createContext, useContext } from "react";

interface AuthContextType {
  username: string | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (username: string, token: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  username: null,
  token: null,
  login: () => {},
  isAuthenticated: false,
  logout: () => {},
}); // createContext: دالة من React تُستخدم لإنشاء سياق (Context). هذا السياق يمكن أن يحمل بيانات

export const useAuth = () => useContext(AuthContext); // useContext: هو "Hook" من React يمكنك استخدامه للوصول إلى القيم المخزنة في AuthContext.

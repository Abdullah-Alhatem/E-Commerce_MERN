import { createContext, useContext } from "react";

interface AuthContextType {
  username: string | null;
  token: string | null;
  login: (username: string, token: string) => void;
  isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextType>({
  username: null,
  token: null,
  login: () => {},
  isAuthenticated: false,
}); // createContext: دالة من React تُستخدم لإنشاء سياق (Context). هذا السياق يمكن أن يحمل بيانات

export const useAuth = () => useContext(AuthContext); // useContext: هو "Hook" من React يمكنك استخدامه للوصول إلى القيم المخزنة في AuthContext.

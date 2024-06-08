import { createContext, useContext, useState } from "react";

export const AuthContext = createContext(null);

export const ConstProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const login = (user) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
//حتى اقدر استخدمه بأكثر من مكان بالابلكيشن تبعي لازم اسويله {export}

export const useAuth = () => {
  return useContext(AuthContext);
};

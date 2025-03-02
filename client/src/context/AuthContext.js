import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUser({ id: decoded.id, username: decoded.username, email: decoded.email }); // Set user on token change
      } catch (error) {
        console.error("Invalid token", error);
        logout(); // Logout if token is invalid
      }
    } else {
      setUser(null); // Ensure user is null if no token
    }
  }, [token]);

  const login = async (email, password) => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", { email, password });
      const newToken = res.data.token;
      localStorage.setItem("token", newToken);
      setToken(newToken);
      const decoded = jwtDecode(newToken);
      setUser({ id: decoded.id, username: decoded.username, email: decoded.email }); // Set user immediately on login
    } catch (err) {
      console.error(err.response?.data?.error || "Login failed");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

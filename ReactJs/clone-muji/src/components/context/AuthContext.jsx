import React, { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authInfo, setAuInfo] = useState({
    token: null,
    user: null,
  });

  const navigate = useNavigate();

  const login = (token) => {
    try {
      const decoded = jwtDecode(token);
      console.log("decoded data", decoded);

      const user = {
        email: decoded.sub,
        roles: decoded.scope,
        fullName: decoded.iss,
        expiryTime: decoded.exp,
      };

      setAuInfo((prev) => {
        const newState = { token, user };
        console.log("giá trị được set:", newState);
        return newState;
      });

      navigate("/");
    } catch (error) {
      console.log("Lỗi khi decode token");
    }
  };

  useEffect(() => {
    console.log("Updated authInfo:", authInfo);
  }, [authInfo]);

  const logout = () => {
    setAuInfo({
      token: null,
      user: null,
    });

    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ ...authInfo, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);

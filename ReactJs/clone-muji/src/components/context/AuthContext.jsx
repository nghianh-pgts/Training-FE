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
        userId: decoded.userId,
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

      localStorage.setItem("token", token);

      navigate("/");
    } catch (error) {
      console.log("Lỗi khi decode token");
    }
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      try {
        const decodedData = jwtDecode(storedToken);
        console.log("giá trị Token lấy từ lcs", decodedData);
        const currentTime = Math.floor(Date.now() / 1000);

        if (decodedData.exp > currentTime) {
          const storedUserInfo = {
            userId: decodedData.userId,
            email: decodedData.sub,
            roles: decodedData.scope,
            fullName: decodedData.iss,
            expiryTime: decodedData.exp,
          };

          setAuInfo({ token: storedToken, user: storedUserInfo });
          console.log("giá trị của auth info sau khi test: ", authInfo);
          console.log("AuthContext Đã được thêm vào DOM");
        }
      } catch (error) {
        console.log("Lỗi decode token");
        localStorage.removeItem("token");
      }
    } else {
      console.log("Lỗi lấy thông tin token");
      localStorage.removeItem("token");
    }
  }, []);

  const logout = () => {
    setAuInfo({
      token: null,
      user: null,
    });
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ ...authInfo, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);

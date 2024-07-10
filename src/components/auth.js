import React, { useContext, useState } from 'react'
const AuthContext = React.createContext();
export function AuthProvider({ children }) {
  const user = "name";
  const login = (username) => {
    localStorage.setItem(user, username);
  }
  const logout = () => {
    localStorage.removeItem(user);
  }
  const isLogin = () => {
    if (localStorage.getItem(user)) {
      return true;
    }
    return false;
  }

  return (
    <AuthContext.Provider value={{ isLogin, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext);
}
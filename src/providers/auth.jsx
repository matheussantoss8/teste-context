import React, { useContext, useState } from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
  const [user, setUser] = useState({
    name: null,
    email: null,
    addresses: [],
    
  });

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext)
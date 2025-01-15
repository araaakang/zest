import React, { createContext, useState, useContext, ReactNode } from 'react';

type UserData = {
  id: string;
  email: string;
  name: string;
  picture: string;
} | null;

type AuthContextType = {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  userData: UserData;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
};

type AuthProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState<UserData>(null);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, userData, setUserData }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;

import { createContext, useState } from 'react';

const defaultContext = {
  currentUser: null,
  setCurrentUser: (user: any) => {},
};

export const UserContext = createContext(defaultContext);

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};

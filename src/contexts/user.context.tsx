import { User } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';

import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from '../utils/firebase.utils';

type UserContextType = {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
};

const defaultContext: UserContextType = {
  currentUser: null,
  setCurrentUser: (user: User | null) => {},
};

export const UserContext = createContext(defaultContext);

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      if (user) {
        await createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};

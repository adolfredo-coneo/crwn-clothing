import { User } from 'firebase/auth';
import { createContext, useEffect, useState, useReducer } from 'react';

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

export const USER_ACTIONS_TYPE = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
};

const userReducer = (
  state: { currentUser: User | null },
  action: { type: string; payload: User | null }
) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTIONS_TYPE.SET_CURRENT_USER:
      return { ...state, currentUser: payload };
    default:
      throw new Error(`Invalid action type: ${type} in userReducer`);
  }
};

const INITIAL_STATE = {
  currentUser: null,
};

export const UserProvider = ({ children }: UserProviderProps) => {
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
  const { currentUser } = state;

  const setCurrentUser = (user: User | null) => {
    dispatch({ type: USER_ACTIONS_TYPE.SET_CURRENT_USER, payload: user });
  };

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

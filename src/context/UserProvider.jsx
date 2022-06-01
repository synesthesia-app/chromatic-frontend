import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { signOut } from '../services/users';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userObj, setUserObj] = useState({});

  const logout = useCallback(() => {
    signOut().then(() => setUserObj({}));
  });

  return (
    <UserContext.Provider
      value={{
        userObj,
        setUserObj,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined)
    throw new Error('useUser must be used within a UserProvider');

  return context;
};

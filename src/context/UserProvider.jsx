import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  useMemo,
} from 'react';

// import { signOut, signIn, getCurrentUser } from '../services/users';
import { signOut, getCurrentUser } from '../services/users';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // const [userObj, setUserObj] = useState(
  //   currentUser ? { id: currentUser.id, username: currentUser.username } : {}
  // );
  const [userObj, setUserObj] = useState({})

  // const login = async (credentials) => {
  //   try {
  //     const user = await signIn(credentials);
  //     setUserObj(user);
  //   } catch (error) {
  //     throw error;
  //   }
  // };

  const logout = useCallback(() => {
    signOut().then(() => setUserObj({}));
  }, []);

  useEffect(() => {
    getCurrentUser()
      .then(setUserObj)
      // .finally(() => setLoading(false));
  }, []);

  const state = useMemo(
    () => ({ userObj, logout }),
    [userObj, logout]
  );
  // const state = useMemo(
  //   () => ({ userObj, logout, login }),
  //   [userObj, logout, login]
  // );

  return (
    <UserContext.Provider value={{ userObj, logout, state }}>
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

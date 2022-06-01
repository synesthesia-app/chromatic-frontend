import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  useMemo,
} from 'react';
import { signOut } from '../services/users';
import { getCurrentUser } from '../services/users';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const currentUser = getCurrentUser();

  const [userObj, setUserObj] = useState(
    currentUser ? { id: currentUser.id, username: currentUser.username } : {}
  );

  const value = useMemo(
    () => ({ userObj, setUserObj }),
    [userObj?.id, userObj?.username]
  );

  const logout = useCallback(() => {
    signOut().then(() => setUserObj({}));
  });

  useEffect(() => {
    if (currentUser) setUserObj(currentUser);
  }, []);

  // const logout = async () => {
  //   await signOut().then(() => setUserObj({}));
  // };

  return (
    <UserContext.Provider
      // value={value}
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

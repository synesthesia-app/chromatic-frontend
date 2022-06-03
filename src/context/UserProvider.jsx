import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { getCurrentUser, signOut } from '../services/users';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [imagesContainer, setImagesContainer] = useState([]);
  const [displayedImage, setDisplayedImage] = useState('hvahpfe48bxckvfpzuxd');
  const currentUser = getCurrentUser();

  const [userObj, setUserObj] = useState(
    currentUser ? { id: currentUser.id, username: currentUser.username } : {}
  );

  const [currentColorNav, setCurrentColorNav] = useState(true);

  const logout = useCallback(() => {
    signOut().then(() => setUserObj({}));
  });

  useEffect(() => {
    if (currentUser) setUserObj(currentUser);
  }, []);

  return (
    <UserContext.Provider
      value={{
        userObj,
        setUserObj,
        logout,
        imagesContainer,
        setImagesContainer,
        displayedImage,
        setDisplayedImage,
        currentColorNav,
        setCurrentColorNav,
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

  return { logout: context.logout, login: context.login, ...context };
};

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

const ToneContext = createContext();

export const ColorNoteProvider = ({ children }) => {
  const [userColor, setUserColor] = useState({});
  const [pickedColor, setPickedColor] = useState('#bada55');
  const [colorObj, setColorObj] = useState({});
  const [colorPalette, setColorPalette] = useState([]);

  return (
    <ToneContext.Provider
      value={{
        userColor,
        setUserColor,
        pickedColor,
        setPickedColor,
        colorObj,
        setColorObj,
        colorPalette,
        setColorPalette,
      }}
    >
      {children}
    </ToneContext.Provider>
  );
};

export const useColorNote = () => {
  const context = useContext(ToneContext);

  if (context === undefined)
    throw new Error('useColorNote must be used within a ColorNoteProvider');

  return context;
};

import { createContext, useContext, useEffect, useState } from 'react';

const ToneContext = createContext();

export const ToneProvider = ({ children }) => {
  const [userColor, setUserColor] = useState([]);

  return (
    <ToneContext.Provider value={{ userColor, setUserColor }}>
      {children}
    </ToneContext.Provider>
  );
};

export const useTone = () => {
  const context = useContext(ToneContext);

  if (context === undefined)
    throw new Error('useTone must be used within a ToneProvider');

  return context;
};

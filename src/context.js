import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [buy, setBuy] = useState([]);

  return (
    <AppContext.Provider value={{ buy, setBuy }}>
      {children}
    </AppContext.Provider>
  );
};
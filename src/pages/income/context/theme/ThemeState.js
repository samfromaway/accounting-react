import React, { useReducer, useEffect, useState } from 'react';
import ThemeContext from './themeContext';

// Provider Component
const ThemeState = ({ children }) => {
  const [themeMode, setThemeMode] = useState(true);

  return (
    <ThemeContext.Provider
      value={{ themeMode: themeMode, setThemeMode: setThemeMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeState;

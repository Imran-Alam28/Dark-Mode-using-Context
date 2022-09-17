import React, { createContext, useState } from 'react';

export const DarkModeContext = createContext({
  mode: 'light',
  toggleMode: () => {},
});

export function DarkModeProvider({ children }) {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  };

  return (
    <DarkModeContext.Provider
      value={{
        mode,
        toggleMode,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
}
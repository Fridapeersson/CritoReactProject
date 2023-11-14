import React, { createContext, useState, useContext } from "react";

const HeaderContext = createContext();

export const useHeaderContext = () => {
  return useContext(HeaderContext);
};

export const HeaderProvider = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMobileMenu = () => {
    setOpenMenu((prevOpenMenu) => !prevOpenMenu);
  };

  const closeMobileMenu = () => {
    setOpenMenu(false);
  };

  return (
    <HeaderContext.Provider value={{ openMenu, toggleMobileMenu, closeMobileMenu }}>
      {children}
    </HeaderContext.Provider>
  );
};
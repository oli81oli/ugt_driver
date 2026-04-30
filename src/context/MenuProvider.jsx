import React, { useState } from 'react';
import MenuContext from './MenuContext';

const MenuProvider = ({ children }) => {
    const [valueMenu, setValueMenu] = useState(false);
   
    const handleTrueMenu = () => {
      setValueMenu(true);
    };
   
    const handleFalseMenu = () => {
        setValueMenu(false);
    };
   
    return (
      <MenuContext.Provider value={{ valueMenu, handleTrueMenu, handleFalseMenu }}>
        {children}
      </MenuContext.Provider>
    );
  };
   
  export default MenuProvider;
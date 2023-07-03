"use client";
import { useState, createContext, useContext } from "react";

const AppContext = createContext();

//this function is for context
export function AppWrapper( {children} ) {
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  return (
    <AppContext.Provider value={{isLoggedIn,setIsLoggedIn}}>
      {children}
    </AppContext.Provider>
  );
};

export function useAppContext() {
  return useContext(AppContext)
}
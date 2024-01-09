'use client'
// context/AppContext.tsx
import React, { ReactNode, createContext, useContext, useEffect, useState } from "react";



interface AppContextProps {
  account: string;
  connectWallet: () => Promise<void>;
  error: string;
}

interface AppProviderProps {
  children: React.ReactNode;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [account, setAccount] = useState<string>("");
  const [error, setError] = useState<string>("");

  const { ethereum } = (typeof window !== "undefined" ? window : {}) as { ethereum?: any };

  const checkEthereumExists = (): boolean => {
    if (!ethereum) {
      setError("Please Install MetaMask.");
      return false;
    }
    return true;
  };

  // connect to the ethereum wallet
  const connectWallet = async (): Promise<void> => {
    setError("");
    if (checkEthereumExists()) {
      try {
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log(accounts);
        // getting the first account
        setAccount(accounts[0]);
      } catch (err: any) {
        setError(err.message);
      }
    }
  };

  const contextValue: AppContextProps = {
    account,
    connectWallet,
    error,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </ AppContext.Provider>
  );

};
const useAppContext = () => useContext(AppContext);

export { AppProvider, useAppContext, AppContext }




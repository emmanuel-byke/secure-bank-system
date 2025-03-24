// contexts/AppContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';
import { TransactionAPI } from '../Api/transactionApi';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [appSettings, setAppSettings] = useState({});
  const [loadingData, setLoadingData] = useState(false);

  const loadTransactions = async () => {
    try {
      setLoadingData(true);
    //   const data = await TransactionAPI.getAll();
    //   setTransactions(data);
    } finally {
      setLoadingData(false);
    }
  };

  return (
    <AppContext.Provider value={{
      transactions,
      appSettings,
      loadingData,
      loadTransactions
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
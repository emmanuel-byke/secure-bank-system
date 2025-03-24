import { createContext, useContext, useState, useEffect } from 'react';
import apiClient, { getCSRFToken } from '../Api/client';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refreshUser, setRefreshUser] = useState(false);

  useEffect(() => {
    const initializeAuth = async () => {
      await getCSRFToken();
      try {
        const response = await apiClient.get('userAccount/me/');
        setUser(response.data);
      } catch (error) {
        setUser(null);
      }
      setLoading(false);
    };
    initializeAuth();
  }, [refreshUser]);

  const signup = async (data) => {
    await getCSRFToken();
    const response = await apiClient.post('userAccount/signup/', data);
    setUser(response.data.user);
    return response;
  };

  const login = async (formData) => {
    await getCSRFToken();
    const response = await apiClient.post('userAccount/login/', formData);
    setUser(response.data.user);
    return response;
  };

  const logout = async () => {
    await apiClient.post('userAccount/logout/');
    setUser(null);
  };

  const updateUser = async (id, formData) => {
    try{
      await apiClient.patch(`userAccount/users/${id}/`, formData);
      setRefreshUser(prev=>!prev);
    } catch(error) {
      console.error(error?.response?.data)
    }
  };

  const getAllUsers = async(params) => {
    const response = await apiClient.get('userAccount/users/', params);
    return response;
  }

  const getActiveUserStat = async() => {
    const response = await apiClient.get('userAccount/users/active_count/');
    return response;
  }

  const toggleBlock = async(formData) => {
    const response = await apiClient.post('userAccount/users/toggle_block/', formData);
    return response;
  }

  return (
    <AuthContext.Provider value={{ user, loading, refreshUser, signup, login, logout, updateUser, getAllUsers, getActiveUserStat,
      toggleBlock
     }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
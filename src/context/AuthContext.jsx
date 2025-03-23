import { createContext, useContext, useState, useEffect } from 'react';
import apiClient, { getCSRFToken } from '../Api/client';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      await getCSRFToken();
      try {
        const response = await apiClient.get('users/me/');
        setUser(response.data);
      } catch (error) {
        setUser(null);
      }
      setLoading(false);
    };
    initializeAuth();
  }, []);

  const signup = async (data) => {
    await getCSRFToken();
    const response = await apiClient.post('users/signup/', data);
    setUser(response.data.user);
    return response;
  };

  const login = async (email, password) => {
    await getCSRFToken();
    const response = await apiClient.post('users/login/', { email, password });
    setUser(response.data.user);
    return response;
  };

  const logout = async () => {
    await apiClient.post('users/logout/');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
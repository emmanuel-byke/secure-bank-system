// api/transactionsApi.js (example for non-user related API)
import apiClient from './client';

export const TransactionAPI = {
  getAll: async () => {
    const response = await apiClient.get('transactions/');
    return response.data;
  },
  
  create: async (data) => {
    const response = await apiClient.post('transactions/', data);
    return response.data;
  }
};


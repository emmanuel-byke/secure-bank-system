import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8000/',
  // baseURL: 'https://secure-bank-system-drf.onrender.com/',
  withCredentials: true,
});

let csrfToken = '';

export const getCSRFToken = async () => {
  const response = await apiClient.get('userAccount/csrftoken/');
  csrfToken = response.data.csrfToken;
  return csrfToken;
};

// Add CSRF token to all mutating requests
apiClient.interceptors.request.use((config) => {
  if (['post', 'put', 'patch', 'delete'].includes(config.method.toLowerCase())) {
    config.headers['X-CSRFToken'] = csrfToken;
  }
  return config;
});

export default apiClient;
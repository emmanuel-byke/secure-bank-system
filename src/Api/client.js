import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8000/',
  withCredentials: true,
});

let csrfToken = '';

export const getCSRFToken = async () => {
  const response = await apiClient.get('users/csrftoken/');
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
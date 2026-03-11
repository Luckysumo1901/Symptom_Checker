import axios from 'axios';

// In development, Vite proxies API requests or we hit the same port.
// In production, the API is on the same origin.
const API_URL = '/api';

export const predictDisease = async (symptoms) => {
  try {
    const response = await axios.post(`${API_URL}/predict`, { symptoms });
    return response.data;
  } catch (error) {
    console.error('Error predicting disease:', error);
    throw error;
  }
};

export const getAllSymptoms = async () => {
  try {
    const response = await axios.get(`${API_URL}/symptoms`);
    return response.data;
  } catch (error) {
    console.error('Error fetching symptoms:', error);
    throw error;
  }
};

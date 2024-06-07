import axios from 'axios';

const API_URL = 'http://localhost:3001/api'; // Adjust according to your server setup

export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    if (response.data.success) {
      localStorage.setItem('token', response.data.token);
      return true;
    }
    return false;
  } catch (error) {
    console.error('Login failed', error);
    return false;
  }
};

export const signupUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, credentials);
    if (response.data.success) {
      localStorage.setItem('token', response.data.token);
      return true;
    }
    return false;
  } catch (error) {
    console.error('Signup failed', error);
    return false;
  }
};

export const fetchUserData = async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${API_URL}/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Fetching user data failed', error);
    return null;
  }
};

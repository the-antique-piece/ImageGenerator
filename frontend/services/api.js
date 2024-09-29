import axios from 'axios';

// Set up the base URL of your API (running on Heroku or another server)
const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://your-api-endpoint.com/api';

// Create an axios instance for general configuration
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 10000 // 10 seconds timeout
});

/**
 * Generate an image from a text description using the image generation API.
 * @param {string} description - The text description to generate the image from.
 * @returns {Promise} - A promise that resolves with the generated image data.
 */
export const generateImage = async (description) => {
  try {
    const response = await api.post('/generate-image', { description });
    return response.data; // Assuming the API returns the generated image data or URL
  } catch (error) {
    console.error('Error generating image:', error);
    throw error; // Re-throw the error to be handled by the caller
  }
};

/**
 * Get the status of the image generation task (optional, for long-running tasks).
 * @param {string} taskId - The ID of the task to check the status of.
 * @returns {Promise} - A promise that resolves with the task status.
 */
export const getTaskStatus = async (taskId) => {
  try {
    const response = await api.get(`/task-status/${taskId}`);
    return response.data; // Assuming the API returns a status or progress percentage
  } catch (error) {
    console.error('Error fetching task status:', error);
    throw error;
  }
};

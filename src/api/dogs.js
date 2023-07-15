import axios from 'axios';

const API_URL = 'https://dog.ceo/api';

export const getAllDogs = async () => {
  try {
    const response = await axios.get(`${API_URL}/breeds/list/all`);
    return response.data.message;
  } catch (error) {
    throw new Error('Failed to fetch dogs.');
  }
};

export const getDogByName = async (dogName) => {
  try {
    const response = await axios.get(
      `${API_URL}/breed/${dogName}/images/random`
    );
    return response.data.message;
  } catch (error) {
    throw new Error('Failed to fetch the dog.');
  }
};

export const getRandomDog = async () => {
  try {
    const response = await axios.get(`${API_URL}/breeds/image/random`);
    return response.data.message;
  } catch (error) {
    throw new Error('Failed to fetch the dog.');
  }
};

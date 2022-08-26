import axios from 'axios';

const BASE_URL: string = import.meta.env.VITE_API_URL;

export const getUnits = async (url: string) => {
  const { data } = await axios.get(`${BASE_URL}${url}`, {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjYxNTEzNzY1LCJleHAiOjE2NjQxMDU3NjV9.lIqAS9RAXc1Z5s8MeviMf024n7QNGp8jsC0iHlAX7zo'
    }
  });

  return data;
};

import axios from 'axios';

const BASE_URL: string = import.meta.env.VITE_API_URL;

export const getUnits = async (url: string) => {
  const { data } = await axios.get(`${BASE_URL}${url}`, {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjYxNTE2Nzk5LCJleHAiOjE2NjQxMDg3OTl9.JWR5-G5geq36cb4MtV_AZZbGtnuA5vwacXwEFADzCRA'
    }
  });

  return data;
};

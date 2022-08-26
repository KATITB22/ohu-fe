import axios from 'axios';

const BASE_URL: string = import.meta.env.VITE_API_URL;

export const getUnits = async (url: string) => {
  const { data } = await axios.get(`${BASE_URL}${url}`, {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjYxNTIzMTg1LCJleHAiOjE2NjQxMTUxODV9.CH5NZeZq-2EKS8uzteROn1BrK0Eyy0o1Ded0EyCvfxY'
    }
  });

  return data;
};

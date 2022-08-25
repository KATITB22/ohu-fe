import Axios from 'axios';

const BASE_URL: string = import.meta.env.VITE_API_URL;

// TODO login
// TODO check cookie

export const getDataAPI = async (url: string) => {
  const { data } = await Axios.get(`${BASE_URL}${url}`, {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTExMzgsImlhdCI6MTY2MDk4MTY1NiwiZXhwIjoxNjYzNTczNjU2fQ.UsNHIizZZdDNQxAoyI5MuXjRSVxpQLObuvXyzlG65Oo'
    }
  });
  return data;
};

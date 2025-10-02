import axios from "axios";

const API_URL = "https://api.unsplash.com/search/photos";
const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

export const searchPhotos = async ({ query, page = 1, per_page = 12 }) => {
  const response = await axios.get(API_URL, {
    params: {
      query,
      page,
      per_page,
      client_id: ACCESS_KEY,
    },
  });
  return response.data; 
};

import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_INTERNAL_PATH,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const login = async (data) => {
  let response;

  try {
    response = await api.post("/login", data);
  } catch (error) {
    return error;
  }

  return response;
};

export const signup = async (data) => {
  let response;

  try { 
    response = await api.post("/register", data);
  } catch (error) {
    return error;
  }

  return response;
};

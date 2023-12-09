import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

export const login = async (email, password) => {
  try {
    const { data } = await api.post("/login", { email, password });
    localStorage.setItem("token", data.token);
    return data;
  } catch (e) {
    console.error(e);
    throw new Error(e.response.data.message);
  }
}

export const register = async (name, email, password, phone) => {
  try {
    const { data } = await api.post("/register", { name, email, password, phone });
    return data;
  } catch (e) {
    console.error(e);
    throw new Error(e.response.data.message);
  }
}

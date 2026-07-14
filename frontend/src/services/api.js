import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

export const saveInteraction = async (data) => {
  const response = await api.post("/interactions", data);
  return response.data;
};

export const getInteractions = async () => {
  const response = await api.get("/interactions");
  return response.data;
};

export const generateSummary = async (text) => {
  const response = await api.post("/ai/summary", {
    text,
  });

  return response.data;
};

export default api;
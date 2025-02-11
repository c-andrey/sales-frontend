import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:9000/api", // Altere conforme necessário
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;

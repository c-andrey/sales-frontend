import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api", // ou a URL do seu backend
  headers: {
    "X-Requested-With": "XMLHttpRequest", // Requerido pelo Laravel para AJAX
  },
});

// Primeiro, faz uma requisição para obter o token CSRF
api
  .get("/csrf-cookie", {
    withCredentials: true,
  })
  .then(() => {
    console.log("CSRF Token obtido");
  });

export default api;

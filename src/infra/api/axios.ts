import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api", // Altere para a URL do seu backend
  withCredentials: true, // Permite enviar cookies com credenciais
  headers: {
    "X-Requested-With": "XMLHttpRequest", // Requerido pelo Laravel para requisições AJAX
  },
});

// Primeiro, busca o token CSRF antes de qualquer requisição
async function getCsrfToken() {
  const response = await api.get("/csrf-token");
  axios.defaults.headers.common["X-CSRF-TOKEN"] = response.data.csrf_token;
}

getCsrfToken();

export default api;

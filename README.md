# 🎨 Frontend - Vue 3

Este é o frontend do sistema de gestão de vendas, desenvolvido com **Vue 3**, **Pinia** e **Bootstrap**.

## 🚀 Tecnologias Utilizadas

- **Vue 3 + Vite**
- **Pinia** (Gerenciamento de estado)
- **Vue Router** (Roteamento)
- **Axios** (Requisições HTTP)
- **Bootstrap + SCSS** (Estilização)

---

## 📂 Estrutura do Projeto

```
frontend/
│── src/
│   ├── core/
│   │   ├── entities/         # Modelos de dados (Seller, Sale)
│   │   ├── use-cases/        # Regras de negócio
│   │   ├── repositories/     # Interfaces para repositórios
│   │   ├── services/         # Implementações dos repositórios
│   ├── infra/
│   │   ├── api/axios.ts      # Configuração do Axios
│   │   ├── repositories/     # Implementação dos repositórios
│   ├── presentation/
│   │   ├── assets/           # Arquivos de estilo e imagens
│   │   ├── components/       # Componentes reutilizáveis
│   │   ├── pages/            # Páginas do sistema
│   │   ├── store/            # Gerenciamento de estado com Pinia
│   │   ├── router/           # Configuração de rotas
│── vite.config.ts            # Configuração do Vite
│── package.json              # Dependências do projeto
│── .env.example              # Exemplo de configuração de ambiente
```

---

## ⚙️ Instalação e Configuração

### 1️⃣ Clonar o repositório

### 2️⃣ Instalar dependências
```sh
npm install
```

### 3️⃣ Configurar API Backend

Edite `src/infra/api/axios.ts` e defina a URL do backend:
```ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000',
  withCredentials: true
});

export default api;
```

### 4️⃣ Iniciar o projeto
```sh
npm run dev
```
A aplicação estará disponível em `http://localhost:5173`.

---

## 📌 Funcionalidades

### 🔹 **Vendedores**
✅ Listagem de vendedores  
✅ Cadastro de novos vendedores  

### 🔹 **Vendas**
✅ Registro de vendas  
✅ Cálculo automático da comissão  


****

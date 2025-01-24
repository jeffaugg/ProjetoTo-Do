# Projeto: Lista de Tarefas (To-Do List)

## 📋 Sobre o Projeto
Uma aplicação simples de lista de tarefas que permite aos usuários criar, editar, atualizar e excluir tarefas diretamente de uma interface amigável e intuitiva. O projeto utiliza um backend em Node.js com Express para gerenciamento de dados e um frontend baseado em HTML, CSS e JavaScript para interação com o usuário.

---

## 🚀 Funcionalidades

- **Visualização de Tarefas:** Exibe as tarefas salvas no banco de dados.
- **Adicionar Tarefa:** Permite adicionar novas tarefas à lista.
- **Editar Tarefa:** Altere o título ou o status de uma tarefa existente.
- **Excluir Tarefa:** Remova tarefas indesejadas.
- **Status Personalizado:** Atualize o status da tarefa como `Pendente`, `Em andamento` ou `Concluída`.

---

## 🛠️ Tecnologias Utilizadas

### Backend:
- **Node.js**
- **Express.js**
- **MySQL** 

### Frontend:
- **HTML**
- **CSS**
- **JavaScript**

---

## 🖥️ Como Executar o Projeto

### Pré-requisitos
- **Node.js** instalado
- Gerenciador de pacotes (`npm` ou `yarn`)
- Banco de dados configurado (SQLite ou PostgreSQL)

### Passo a Passo

#### Backend:
1. Instale as dependências:
   ```bash
   cd backend
   npm install
   ```
2. Inicie o servidor:
   ```bash
   npm start
   ```
   O servidor estará disponível em `http://localhost:3333`.

#### Frontend:
1. Abra o arquivo `index.html` no navegador ou sirva-o utilizando um servidor local.

---

## 🛠️ Rotas da API

### Tarefas (`/tasks`):
- **GET `/tasks`**: Retorna todas as tarefas.
- **POST `/tasks`**: Adiciona uma nova tarefa.
- **DELETE `/tasks/:id`**: Remove uma tarefa pelo ID.
- **PUT `/tasks/:id`**: Atualiza uma tarefa pelo ID.

---

## 📝 Licença
Este projeto está sob a licença MIT. Sinta-se à vontade para utilizá-lo e adaptá-lo conforme necessário.

---

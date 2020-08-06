import express from "express";

const app = express();

app.use(express.json());

app.listen(3333);

// Nós temos os métodos GET, POST, DELETE, PUT
// GET - usado por browsers, realiza requests e responde com os dados pedidos
// POST - insere novos dados atráves do body da request
// DELETE - elimina dados atávés de params/body
// PUT - atualiza dados identificados por params ou body

// Request tem 3 propriedades
// params - objeto dos dados enviados como parte da rota ex: /users/:id
// body - o corpo da request, onde a maioria dos dados iráo de ficar.
// query - propriedades enviadas pela rota (endereço) para filtrar dados

app.get("/users", (request, response) => {
  console.log(request.query);

  const users = [
    {
      name: "Vinicius",
      age: 22,
    },
    {
      name: "Jefferson",
      age: 29,
    },
    {
      name: "Jonathan",
      age: 29,
    },
  ];

  return response.json(users);
});

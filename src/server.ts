import express from "express";
import routes from "./routes";

// Nós temos os métodos GET, POST, DELETE, PUT
// GET - usado por browsers, realiza requests e responde com os dados pedidos
// POST - insere novos dados atráves do body da request
// DELETE - elimina dados atávés de params/body
// PUT - atualiza dados identificados por params ou body

// Request tem 3 propriedades
// params - objeto dos dados enviados como parte da rota ex: /users/:id
// body - o corpo da request, onde a maioria dos dados iráo de ficar.
// query - propriedades enviadas pela rota (endereço) para filtrar dados

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);

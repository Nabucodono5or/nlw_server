import express from "express";

const routes = express.Router();

routes.post("/users", (request, response) => {
  const data = request.body;

  console.log(data);

  return response.send();
});

export default routes;

import express from "express";

const app = express();

app.listen(3333);

app.get("/users", (request, response) => {
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

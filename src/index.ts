import express from "express";

const app = express();

app.use(express.json()); // middleware que transforla la req.body a un json

const PORT = 3001;

app.get("/ping", (_req, res) => {
  console.log("someone pinged here!");
  res.send("pong");
});

app.listen(PORT, () => {
  console.log("Servver running");
});

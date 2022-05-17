import express from "express";
import diaryRouter from "./routes/diares";

const app = express();

app.use(express.json()); // middleware que transforla la req.body a un json

const PORT = 3001;

app.get("/ping", (_req, res) => {
  console.log("someone pinged here!");
  res.send("pong");
});

app.use("/api/diaries", diaryRouter);

app.listen(PORT, () => {
  console.log("Servver running");
});

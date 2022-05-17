import express from "express";
import * as diaryServices from "../services/diaryServices";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send(diaryServices.getEntresWithoutSenstiveInfo());
});

router.post("/", (_req, res) => {
  res.send("saving a diary!");
});

export default router;

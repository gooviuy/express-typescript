import express from "express";
import * as diaryServices from "../services/diaryServices";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send(diaryServices.getEntresWithoutSenstiveInfo());
});

router.get("/:id", (req, res) => {
  // el + indica que lo que vamos a estar a estar recibiendo lo pasamos a tipo number
  //ya que por defecto entra como string
  const diary = diaryServices.findById(+req.params.id);

  return diary != null ? res.send(diary) : res.sendStatus(404);
});

router.post("/", (req, res) => {
  const { date, weather, visibilty, comment } = req.body;

  const newDiaryEntry = diaryServices.addDiary({
    date,
    weather,
    visibilty,
    comment,
  });
  res.json(newDiaryEntry);
});

export default router;

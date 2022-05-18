import express from "express";
import * as diaryServices from "../services/diaryServices";
import toNewDiaryEntry from "../utils";

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
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body);

    const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry);
    res.json(addedDiaryEntry);
  } catch (e: any) {
    res.status(400).send(e.message);
  }
});

export default router;

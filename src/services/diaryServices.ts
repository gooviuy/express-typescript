import { DiaryEntry, NonSensitiveInfoEntry } from "../types";
import diaryData from "./diary.json";

//utilizamos asercion de tipos
const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>;

export const getEntries = (): DiaryEntry[] => diaries;

export const getEntresWithoutSenstiveInfo = (): NonSensitiveInfoEntry[] => {
  //hacemos un map para informar que solo vamos a mostrar esas prop. que son las que definimos en
  // NonSensitiveInfoEntry
  return diaries.map(({ id, date, weather, visibilty }) => {
    return {
      id,
      date,
      weather,
      visibilty,
    };
  });
};

export const addEntry = (): undefined => undefined;

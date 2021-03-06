import { DiaryEntry, NewDiaryEntry, NonSensitiveInfoEntry } from "../types";
import diaryData from "./diary.json";

//utilizamos asercion de tipos
const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>;

export const findById = (id: number): NonSensitiveInfoEntry | undefined => {
  const entry = diaries.find((d) => d.id === id);
  if (entry != null) {
    const { comment, ...restOfDiary } = entry;
    return restOfDiary;
  }
  return undefined;
};

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

export const addDiary = (newDiaryEntry: NewDiaryEntry) => {
  const newDiary = {
    id: Math.max(...diaries.map((d) => d.id)) + 1,
    ...newDiaryEntry,
  };

  diaries.push(newDiary);
  return newDiary;
};

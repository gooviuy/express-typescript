import { Weather, Visibility } from "./enumbs";

export interface DiaryEntry {
  id: number;
  date: string;
  weather: Weather;
  visibilty: Visibility;
  comment: string;
}

export type NewDiaryEntry = Omit<DiaryEntry, "id">;

export type NonSensitiveInfoEntry = Omit<DiaryEntry, "comment">;

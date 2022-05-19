import { Weather, Visibility } from "./enums";

export interface DiaryEntry {
  id: number;
  date: string;
  weather: Weather;
  visibilty: Visibility;
  comment: string;
}

export type NewDiaryEntry = Omit<DiaryEntry, "id">;

export type NonSensitiveInfoEntry = Omit<DiaryEntry, "comment">;

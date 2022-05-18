export type Weather = "sunny" | "rainy" | "cloudy" | "windy" | "stormy";
export type Visibility = "great" | "good" | "ok" | "poor";

export interface DiaryEntry {
  id: number;
  date: string;
  weather: Weather;
  visibilty: Visibility;
  comment: string;
}

export type newDiaryEntry = Omit<DiaryEntry, "id">;

export type NonSensitiveInfoEntry = Omit<DiaryEntry, "comment">;

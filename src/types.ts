export enum Weather {
  Sunny = "sunny",
  Rainy = "rainy",
  Cloudy = "cloud",
  Windy = "windy",
  Stormy = "stormy",
}

export enum Visibility {
  Great = "great",
  Good = "good",
  Ok = "ok",
  Poor = "poor",
}

export interface DiaryEntry {
  id: number;
  date: string;
  weather: Weather;
  visibilty: Visibility;
  comment: string;
}

export type NewDiaryEntry = Omit<DiaryEntry, "id">;

export type NonSensitiveInfoEntry = Omit<DiaryEntry, "comment">;

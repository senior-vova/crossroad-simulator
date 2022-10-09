export type CrossRoadType = "simple" | "t-type";
export const CrossRoadsList: Array<string> = ["Simple"];

export type Place = "up" | "left" | "right" | "down";
export type Way = "left" | "right" | "straight";
export type Color = "yellow" | "red" | "blue";

export interface ICar {
  color: Color;
  way: Way;
}

import * as Util from "../shared/Util";

export type t = "28_C" | "31_Eb" | "33_F" | "34_Fs" | "35_G" | "38_Bb";

const NOTE_TO_COLOR: { [note in t]: string } = {
  "28_C": "red",
  "31_Eb": "orange",
  "33_F": "yellow",
  "34_Fs": "green",
  "35_G": "blue",
  "38_Bb": "purple"
};

export const ALL: t[] = ["28_C", "31_Eb", "33_F", "34_Fs", "35_G", "38_Bb"];

export const noteToColor = (note: t): string => NOTE_TO_COLOR[note];

export const random = () => Util.sample(ALL);

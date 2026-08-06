

import type {
  Align,
  Direction,
  Justify,
  Position,
  Wrap,
} from "./types";


export const DIRECTION: Record<Direction, string[]> = {
  row: ["flex", "flex-row"],
  column: ["flex", "flex-col"],
};

export const JUSTIFY: Record<Justify, string> = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",
};

export const ALIGN: Record<Align, string> = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
};

export const WRAP: Record<Wrap, string> = {
  wrap: "flex-wrap",
  nowrap: "flex-nowrap",
};

export const POSITION: Record<Position, string[]> = {
  static: ["static"],
  relative: ["relative"],
  absolute: ["absolute"],
  fixed: ["fixed"],
  sticky: ["sticky", "top-0"],
};
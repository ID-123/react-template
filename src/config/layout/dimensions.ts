import type { LayoutConfig } from "./interfaces";

export const navbar: LayoutConfig = {
  size: {
    height: "",
    minHeight: "",
  },
  spacing: {
    padding: "",
    margin: "",
  },
  display: {
    position: "sticky",
    direction: "row",
    justify: "center",
  },
  layer: {
    zIndex: "",
  },
};

export const sidebar: LayoutConfig = {
  size: {
    width: "",
    maxWidth: "",
  },
  spacing: {
    padding: "",
  },
  display: {
    direction: "column",
    position: "sticky",
  },
  layer: {
    zIndex: "",
  },
};

export const content: LayoutConfig = {
  size: {
    width: "",
    minHeight: "",
  },
  spacing: {
    margin: "",
    padding: "",
  },
  display: {
    direction: "column",
    justify: "center",
  },
};

export const footer: LayoutConfig = {
  size: {
    height: "",
    minHeight: "",
  },
  spacing: {
    padding: "",
    margin: "",
  },
  display: {
    direction: "row",
    justify: "center",
  },
};

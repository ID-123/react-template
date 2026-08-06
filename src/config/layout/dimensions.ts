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
    zIndex: "",
    flexDirection: "row",
    justifyContent: "",
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
    flexDirection: "column",
    zIndex: "",
    position: "sticky",
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
    flexDirection: "column",
    justifyContent: "",
  },
};

export const footer: LayoutConfig = {
  size: {
    height: "",
    minHeight:"",
  },
  spacing: {
    padding: "",
    margin:"",
  },
  display: {
    flexDirection: "row",
    justifyContent: "",
  },
};

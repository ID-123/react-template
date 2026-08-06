export interface LayoutConfig {
  size: {
    height?: string;
    width?: string;

    minHeight?: string;
    maxHeight?: string;

    minWidth?: string;
    maxWidth?: string;
  };
  spacing: {
    padding?: string;
    margin?: string;
    gap?: string;
  };
  display: {
    direction?: "row" | "column";

    justify?: "start" | "center" | "end" | "between" | "around" | "evenly";

    align?: "start" | "center" | "end" | "stretch";

    wrap?: "wrap" | "nowrap";

    position?: "static" | "relative" | "absolute" | "fixed" | "sticky";
  };
  layer?: {
    zIndex?: string;
  };
  appearance?: {
    background?: string,
    border?: string,
    radius?: string,
    shadow?: string,
  }
}

export interface LayoutConfig {
    size: {
        height?: string,
        width?: string,
        minHeight?: string,
        maxWidth?: string,
    },
    spacing: {
        padding?: string,
        margin?: string,
        gap?: string,
    },
    display?: {
        flexDirection?: "row" | "column",
        justifyContent?: string,
        alignItems?: string,
        position?: "relative" | "absolute" | "sticky" | "fixed" | "static",
        zIndex?: string,
    },
}
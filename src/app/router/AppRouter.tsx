import { BrowserRouter, Routes } from "react-router";
import { publicRoutes, authRoutes, dashboardRoutes, adminRoutes } from "./routes";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes}
        {authRoutes}
        {dashboardRoutes}
        {adminRoutes}
      </Routes>
    </BrowserRouter>
  );
}

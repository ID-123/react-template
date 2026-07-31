import { Route } from "react-router-dom";
import { PublicLayout } from "@/shared/layouts/PublicLayout";
import { HomePage } from "@/features/movies/pages/HomePage";

export const publicRoutes = (
  <Route element={<PublicLayout />}>
    <Route path="/" element={<HomePage />} />
  </Route>
);

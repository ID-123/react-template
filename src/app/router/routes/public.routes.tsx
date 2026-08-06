import { Route } from "react-router";
import { PublicLayout } from "@/shared/layouts/PublicLayout";
import { HomePage } from "@/features/home/pages/HomePage";

export const publicRoutes = (
  <Route element={<PublicLayout />}>
    <Route path="/" element={<HomePage />} />
  </Route>
);

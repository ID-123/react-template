import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "@/features/pages/LoginPage/LoginPage";
import { AuthLayout } from "@/shared/layouts/AuthLayout";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

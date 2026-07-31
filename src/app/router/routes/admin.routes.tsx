import { Route } from "react-router-dom";
import { DashboardLayout } from "@/shared/layouts/DashboardLayout";
import { AdminPage } from "@/features/admin/pages/AdminPage";

export const adminRoutes = (
    <Route element={<DashboardLayout/>}>
        <Route path="/admin" element={<AdminPage/>}/>
    </Route>
);
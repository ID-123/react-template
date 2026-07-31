import { Route } from "react-router-dom";
import { DashboardLayout } from "@/shared/layouts/DashboardLayout";
import { DashboarPage } from "@/features/dashboard/pages/DashboardPage";
import { ProfilePage } from "@/features/profile/pages";

export const dashboardRoutes = (
    <Route element={<DashboardLayout/>}>
        <Route path="/dashboard" element={<DashboarPage/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
    </Route>
);
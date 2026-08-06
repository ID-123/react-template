import { Route } from "react-router";
import { DashboardLayout } from "@/shared/layouts/UserLayout";
import { DashboarPage } from "@/features/dashboard/pages/DashboardPage";
import { ProfilePage } from "@/features/profile/pages";

export const dashboardRoutes = (
    <Route element={<DashboardLayout/>}>
        <Route path="/dashboard" element={<DashboarPage/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
    </Route>
);
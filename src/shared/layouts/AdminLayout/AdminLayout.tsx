

import { adminLinks } from "@/config/navigation/adminLinks";
import { Footer } from "@/shared/components/navigation/Footer/Footer";
import { Navbar } from "@/shared/components/navigation/Navbar/Navbar";
import { Outlet } from "react-router";

export function DashboardLayout() {
  return (
    <>

      <Navbar links={adminLinks} />

      <main className="min-h-screen flex flex-col">
        <div className="flex flex-1">
          <aside className="w-64 border-r p-4">Sidebar</aside>
          <section className="flex-1 p-6">
            <Outlet />
          </section>
        </div>

      </main>

      <Footer />
    </>
  );
}
import { Outlet } from "react-router-dom";

export function DashboardLayout() {
  return (
    <main className="min-h-screen flex flex-col">
      <header className="border-b p-4">Dashboard Navbar</header>
      <div className="flex flex-1">
        <aside className="w-64 border-r p-4">Sidebar</aside>
        <section className="flex-1 p-6">
          <Outlet />
        </section>
      </div>
      <footer className="border-t p-4 text-center">Dashboard Footer</footer>
    </main>
  );
}

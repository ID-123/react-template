import { Outlet } from "react-router";

export function PublicLayout() {
  return (
    <main className="min-h-screen flex flex-col">
      <header className="border-b p-4">Navbar</header>

      <section className="flex-1 p-6">
        <Outlet />
      </section>
      <footer className="border-t p-4 text-center">Footer</footer>
    </main>
  );
}

import { Outlet } from "react-router-dom";

export function AuthLayout() {
  return (
    <main className="min-h-screen flex flex-col">
      <header className="border-b p-4">
        <h1>Multicine</h1>
      </header>
      <section className="flex-1 flex items-center justify-center">
        <Outlet />
      </section>
      <footer className="border-t p-4 text-center">
        Contactc | @ Multicine
      </footer>
    </main>
  );
}

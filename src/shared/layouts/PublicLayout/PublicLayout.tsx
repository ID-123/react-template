import { guestLinks } from "@/config/navigation/guestLinks";
import { Footer } from "@/shared/components/navigation/Footer/Footer";
import { Navbar } from "@/shared/components/navigation/Navbar/Navbar";
import { Outlet } from "react-router";

export function PublicLayout() {
  return (
    <>
      <header className="border-b p-4">
        <Navbar links={guestLinks} />
      </header>
      <main className="min-h-screen flex flex-col">
        <section className="flex-1 p-6">
          <Outlet />
        </section>
        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
}


import { Footer } from "@/shared/components/navigation/Footer/Footer";
import { Outlet } from "react-router";

export function AuthLayout() {
  return (
    <>
      <main className="min-h-screen flex flex-col">
        <section className="flex-1 flex items-center justify-center">
          <Outlet />
        </section>
      </main>
      <Footer />
    </>
  );
}

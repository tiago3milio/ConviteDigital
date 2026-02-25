import { Outlet } from "react-router";
import { Toaster } from "sonner";

export function Root() {
  return (
    <main className="min-h-screen bg-white">
      <Outlet />
      <Toaster position="bottom-center" richColors />
    </main>
  );
}

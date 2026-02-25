import { Smile } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-neutral-900 py-12 border-t border-neutral-600">
      <div className="max-w-4xl mx-auto text-center px-4">
        <Smile className="w-6 h-6 text-red-500 mx-auto mb-4 animate-pulse" />
        <p className="text-neutral-500 text-sm font-light uppercase tracking-widest">
          a desculpa é o aniversário, o objectivo é se divertir.
        </p>
        <div className="mt-8 pt-8 border-t border-neutral-600">
          <p className="text-neutral-400 text-[10px] uppercase tracking-[0.3em]">
            © 2025 • Convite Digital
          </p>
        </div>
      </div>
    </footer>
  );
}

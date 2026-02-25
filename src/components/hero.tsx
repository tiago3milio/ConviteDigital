import { motion } from "motion/react";
import todos from "../assets/todos.jpeg";

export function Hero() {
  return (
    <section className="border-none bg-neutral-900 relative h-screen w-full flex items-center justify-center overflow-hidden">
      <img
        className="absolute  brightness-[0.2] blur-[1.2px]  h-screen w-full"
        src={todos}
        alt=""
      />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-amber-400">CAÓTICOS FC APRESENTAM</span>
          <br /> <br />
          <span className="text-amber-400 tracking-[0.3em] uppercase mb-4 block font-light">
            especial o aniversário do
          </span>
          <h1 className="text-6xl md:text-8xl font-serif text-white mb-6 tracking-tight">
            Francisco
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light mb-12 tracking-wide">
            Se recebeu o link é porquê foi convidado(a),
            <br />
            Se foi convidado(a) é porquê{" "}
            <span className="text-amber-400 ">Está lá dentro!</span>
            <br />
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="px-8 py-3 border border-amber-400/30 bg-amber-400/10 backdrop-blur-md rounded-full text-white">
              <span className="block text-sm uppercase tracking-widest text-amber-400/80">
                Data
              </span>
              <span className="text-lg">08 de Março, 2026</span>
            </div>
            <div className="px-8 py-3 border border-amber-400/30 bg-amber-400/10 backdrop-blur-md rounded-full text-white">
              <span className="block text-sm uppercase tracking-widest text-amber-400/80">
                Local
              </span>
              <span className="text-lg">
                Rua conde de Ariães 48, 1º andar, Bragança
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        ></motion.div>
      </div>
    </section>
  );
}

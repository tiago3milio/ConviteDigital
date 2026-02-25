import { useState, useEffect } from "react";
import { motion } from "motion/react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function CountdownItem({ value, label }: { value: number; label: string }) {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      className="p-8 bg-neutral-800 rounded-2xl shadow-xl shadow-black/20 border border-neutral-700/50"
    >
      <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">
        {value.toString().padStart(2, "0")}
      </div>
      <div className="text-xs uppercase tracking-widest text-gray-400 font-medium">
        {label}
      </div>
    </motion.div>
  );
}

function calculateTimeLeft(targetDate: number): TimeLeft {
  const distance = targetDate - Date.now();

  if (distance <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),

    hours: Math.floor(distance / (1000 * 60 * 60)),

    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),

    seconds: Math.floor((distance % (1000 * 60)) / 1000),
  };
}

export function Countdown() {
  const targetDate = new Date("2026-03-08T21:00:00+01:00").getTime();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
    calculateTimeLeft(targetDate),
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="bg-neutral-900 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-serif text-white mb-12 tracking-wide uppercase">
          Contagem Regressiva
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <CountdownItem value={timeLeft.days} label="Dias" />
          <CountdownItem value={timeLeft.hours} label="Horas" />
          <CountdownItem value={timeLeft.minutes} label="Minutos" />
          <CountdownItem value={timeLeft.seconds} label="Segundos" />
        </div>
      </div>
    </section>
  );
}

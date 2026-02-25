import { Gift, Copy, Check } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import { toast } from "sonner";

export function GiftInfo() {
  const [copied, setCopied] = useState(false);
  const mbway = "965555021";

  const handleCopy = () => {
    navigator.clipboard.writeText(mbway);
    setCopied(true);
    toast.success("MBWay copiado!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="bg-neutral-900 py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-neutral-800 p-12 md:p-20 rounded-[3rem] border border-neutral-700 relative overflow-hidden"
        >

          <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber-400/10 blur-[80px] rounded-full" />
          
          <Gift className="w-16 h-16 text-amber-500 mx-auto mb-8" />
          <h2 className="text-4xl font-serif text-white mb-6">Presentes</h2>
          <p className="text-gray-400 font-light text-lg mb-12 max-w-xl mx-auto leading-relaxed">
            Sua presença é o nosso maior presente! Mas se você deseja nos presentear com algo especial, 
            disponibilizamos a opção de presente via MBWay.
          </p>

          <div className="bg-neutral-900 p-8 rounded-3xl border border-neutral-700/50 inline-block w-full max-w-md">
            <span className="text-xs uppercase tracking-[0.2em] text-amber-400/60 mb-4 block font-medium">
              MBWAY (TELEMÓVEL)
            </span>
            <div className="flex items-center justify-between gap-4 bg-black/30 p-4 rounded-xl border border-neutral-700">
              <code className="text-amber-400 font-mono text-sm md:text-base break-all">
                {mbway}
              </code>
              <button
                onClick={handleCopy}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors text-white"
                title="Copiar MBWay"
              >
                {copied ? <Check className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div className="mt-12 text-sm text-neutral-500 italic">
            "A vida é feita de momentos, e este será inesquecível graças a você."
          </div>
        </motion.div>
      </div>
    </section>
  );
}

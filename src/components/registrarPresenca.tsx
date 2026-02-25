import { useForm } from "react-hook-form";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, Send, Users, User, MessageSquare } from "lucide-react";
import { toast } from "sonner";
import ReactConfetti from "react-confetti";
import { useWindowSize } from "react-use";

import axios from "axios";

type RSVPData = {
  name: string;
  guests: number;
  message: string;
  attending: "Sim" | "Não";
};

export function RSVPForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { width, height } = useWindowSize();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RSVPData>({
    defaultValues: {
      guests: 0,
      attending: "Sim",
    },
  });

  const onSubmit = async (data: RSVPData) => {
    // Mocking an API call
    await axios.post("https://convitedigital-api.onrender.com/mail/send", data)
    setIsSubmitted(true);
    toast.success("Confirmação enviada com sucesso!", {
      description:
        data.attending === "Sim"
          ? "Mal podemos esperar para te ver lá!"
          : "Sentiremos sua falta, mas obrigado por avisar.",
    });
  };

  return (
    <section id="rsvp" className="relative bg-neutral-800 py-24 px-4">
      {isSubmitted && (
        <ReactConfetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={300}
        />
      )}

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-dark p-8 md:p-16 rounded-[2.5rem] shadow-2xl shadow-neutral-700 border border-neutral-700"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-neutral-300 mb-4 tracking-tight">
              Confirmar Presença
            </h2>
            <p className="text-neutral-200 font-light max-w-md mx-auto">
              Por favor, confirme sua presença até o dia 07 de Março para nos
              ajudar na organização.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, x: -20 }}
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-neutral-300 uppercase tracking-widest flex items-center gap-2">
                      <User className="w-4 h-4 text-amber-500" /> Nome Completo
                    </label>
                    <input
                      {...register("name", { required: "Nome é obrigatório" })}
                      className="w-full px-6 py-4 bg-neutral-300 border border-neutral-200 rounded-2xl focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition-all text-neutral-900 placeholder:text-neutral-800"
                      placeholder="Ex: João Silva"
                    />
                    {errors.name && (
                      <span className="text-red-500 text-xs mt-1">
                        {errors.name.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-neutral-300 uppercase tracking-widest block mb-4">
                      Você irá comparecer?
                    </label>
                    <div className="flex gap-4">
                      <label className="flex-1 cursor-pointer group">
                        <input
                          type="radio"
                          {...register("attending")}
                          value="yes"
                          className="peer hidden"
                        />
                        <div className="p-4 text-center border-2 border-neutral-700 rounded-2xl peer-checked:border-amber-400 peer-checked:bg-amber-100 group-hover:bg-neutral-600 transition-all text-neutral-300 font-medium peer-checked:text-amber-700">
                          Com certeza!
                        </div>
                      </label>
                      <label className="flex-1 cursor-pointer group">
                        <input
                          type="radio"
                          {...register("attending")}
                          value="no"
                          className="peer hidden"
                        />
                        <div className="p-4 text-center border-2 border-neutral-700 rounded-2xl peer-checked:border-red-400 peer-checked:bg-red-100 group-hover:bg-neutral-600 transition-all text-neutral-300 font-medium peer-checked:text-red-700">
                          Infelizmente não
                        </div>
                      </label>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-neutral-300 uppercase tracking-widest flex items-center gap-2">
                      <Users className="w-4 h-4 text-amber-500" /> Acompanhantes
                    </label>
                    <select
                      {...register("guests")}
                      className="w-full px-6 py-4 bg-neutral-300 border border-neutral-700 rounded-2xl focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition-all text-neutral-800 appearance-none"
                    >
                      <option value="0">Apenas eu</option>
                      <option value="1">+1 Acompanhante</option>
                      <option value="2">+2 Acompanhantes</option>
                      <option value="3">+3 Acompanhantes</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-neutral-300 uppercase tracking-widest flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-amber-500" />{" "}
                    Mensagem para o Francisco (opcional)
                  </label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    className="w-full px-6 py-4 bg-neutral-300 border border-neutral-200 rounded-2xl focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition-all text-neutral-900 placeholder:text-neutral-800 resize-none"
                    placeholder="Deixe um recado especial..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-5 bg-neutral-900 text-white rounded-2xl font-bold uppercase tracking-widest cursor-pointer transition-all shadow-xl shadow-neutral-700 disabled:bg-neutral-400 disabled:shadow-none flex items-center justify-center gap-3 active:scale-[0.98]"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Confirmar Presença <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 className="w-12 h-12 text-green-500" />
                </div>
                <h3 className="text-3xl font-serif text-neutral-300 mb-4">
                  Confirmação Enviada!
                </h3>
                <p className="text-neutral-400 mb-10 max-w-sm mx-auto">
                  Sua resposta foi registrada. Mal podemos esperar por este
                  momento especial!
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="cursor-pointer px-10 bg-neutral-700 py-4 border border-neutral-200 rounded-full text-neutral-300 hover:text-neutral-700 hover:bg-neutral-50 transition-colors font-medium"
                >
                  Fazer outra confirmação
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

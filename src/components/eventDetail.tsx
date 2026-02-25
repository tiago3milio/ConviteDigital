import { MapPin, Calendar, Clock, Info } from "lucide-react";
import { motion } from "motion/react";

export function EventDetails() {
  const details = [
    {
      icon: <Calendar className="w-8 h-8 text-amber-500" />,
      title: "Data",
      content: "Domingo, 08 de Março",
      subContent: "",
    },
    {
      icon: <Clock className="w-8 h-8 text-amber-500" />,
      title: "Horário",
      content: "Início às 21h",
    },
    {
      icon: <MapPin className="w-8 h-8 text-amber-500" />,
      title: "Localização",
      content: "Bragança",
      subContent: "Rua conde de Ariães 48, 1º andar",
    },
    {
      icon: <Info className="w-8 h-8 text-amber-500" />,
      title: "Observação",
      content: "Sua presença é essencial",
      subContent: "Confirme até 07/03",
    },
  ];

  return (
    <section className="bg-neutral-800 py-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-white font-serif text- mb-4 tracking-tight">
            O Grande Momento
          </h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {details.map((detail, index) => (
            <motion.div
              key={detail.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group flex flex-col items-center text-center p-8 bg-neutral-900 rounded-3xl transition-transform duration-300 hover:-translate-y-2 border border-neutral-700 shadow-sm"
            >
              <div className="mb-6 p-4 bg-transparente rounded-2xl shadow-sm border border-neutral-800 transform transition-transform group-hover:scale-110">
                {detail.icon}
              </div>
              <h3 className="text-sm font-semibold text-neutral-300 uppercase tracking-widest mb-3">
                {detail.title}
              </h3>
              <p className="text-xl font-medium text-neutral-400 mb-2">
                {detail.content}
              </p>
              <p className="text-sm text-neutral-500 font-light">
                {detail.subContent}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 w-full h-[400px] relative rounded-3xl overflow-hidden bg-transparent shadow-2xl border-2 border-neutral-700"
        >
           <iframe className="bg-neutral-800"
            width="100%"
            height="398"
            src={`https://maps.google.com/maps?q=${encodeURIComponent("Rua conde de Ariães 48, 1º andar, Bragança")}&output=embed`}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Mapa do local"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}

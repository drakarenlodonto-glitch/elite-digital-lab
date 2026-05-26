import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  MapPin,
  ScanLine,
  ShieldCheck,
  MessageCircle,
  ChevronRight,
  Star,
  Cpu,
  Layers3,
  BadgeDollarSign,
  Send,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";

const logoSrc = "/assets/logo.png";

const galleryImages = [
  { src: "/assets/encia-vestibular.jpeg", title: "Caracterización de encía", type: "Estética gingival", note: "Caso real" },
  { src: "/assets/encia-lingual.jpeg", title: "Restauración sobre modelo", type: "Diseño y acabado", note: "Caso real" },
  { src: "/assets/caracterizacion-encia.jpeg", title: "Estratificación estética", type: "Alta caracterización", note: "Caso real" },
  { src: "/assets/emax-crista.jpeg", title: "Unidades de E.max ", type: "Restauración estética", note: "Caso real" },
  { src: "/assets/modelo-funcional.jpeg", title: "Modelo funcional 3D", type: "Trabajo digital", note: "Modelo real" },
  { src: "/assets/dos-guardas.jpeg", title: "Guardas miorrelajantes", type: "Acrílico y ajuste", note: "Caso real" },
];

function InstagramIcon({ className = "h-4 w-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="18" height="18" x="3" y="3" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

function Button({ children, className = "", variant = "solid", ...props }) {
  const base = "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold transition focus:outline-none focus:ring-2 focus:ring-lime-300 focus:ring-offset-2 focus:ring-offset-slate-950";
  const styles = variant === "outline" ? "border border-white/20 bg-white/10 text-white hover:bg-white/15" : "bg-white text-slate-950 hover:bg-lime-100";
  return <button className={`${base} ${styles} ${className}`} {...props}>{children}</button>;
}

function Card({ children, className = "" }) {
  return <div className={`rounded-3xl border shadow-sm ${className}`}>{children}</div>;
}

function buildWhatsAppLink(number, message) {
  const cleanNumber = String(number || "").replace(/\D/g, "");
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message || "")}`;
}

export default function App() {
  const whatsappNumber = "+528683516566";
  const whatsappMessage = "Hola, me gustaría recibir información sobre los servicios de Elite Digital Lab.";
  const whatsappLink = buildWhatsAppLink(whatsappNumber, whatsappMessage);
  const instagramUrl = "https://www.instagram.com/elitedigitallab.dental";
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Avenida%20de%20las%20Rosas%2053%20Colonia%20Jardin%2087330%20H.%20Matamoros%20Tamaulipas";

  const services = [
    { name: "Unidad de zirconia", price: "$1,500 MXN", detail: "Escaneo a domicilio gratis" },
    { name: "Unidad de disilicato fresada", price: "$1,550 MXN", detail: "Escaneo a domicilio gratis" },
    { name: "Incrustación de zirconia", price: "$1,500 MXN", detail: "Restauración indirecta" },
    { name: "Incrustación de disilicato fresada", price: "$1,600 MXN", detail: "Alta estética" },
    { name: "Corona sobre implante", price: "$1,800 MXN", detail: "Cotización según caso" },
    { name: "Provisional de PMMA", price: "$400 MXN", detail: "Por unidad" },
    { name: "Guarda miorrelajante", price: "$2,000 MXN", detail: "Diseño y fabricación" },
    { name: "Modelos 3D", price: "$250 MXN", detail: "Impresión de modelos" },
    { name: "Encerado digital", price: "$200 MXN", detail: "Por unidad" },
    { name: "Escaneo intraoral a domicilio", price: "$500 MXN", detail: "Envío de archivo STL" },
    { name: "Guía quirúrgica", price: "$2,000 MXN", detail: "1 a 2 unidades" },
  ];

  const benefits = [
    "Escaneo a domicilio en trabajos seleccionados",
    "Comunicación cercana para indicaciones, color, material y ajustes",
    "Atención al detalle en anatomía, caracterización y acabado",
    "Flujo digital organizado para doctores y clínicas dentales",
  ];

  const process = [
    { title: "Recibimos tu caso", text: "Nos compartes indicaciones, fotografías, color, material y archivos digitales. También podemos apoyarte con escaneo intraoral o de modelos.", icon: ScanLine },
    { title: "Diseñamos con precisión", text: "Cuidamos anatomía, contactos, estética, función y detalles personalizados para cada paciente.", icon: Cpu },
    { title: "Entregamos con calidad", text: "Preparamos el trabajo final y damos seguimiento para que el caso llegue listo, claro y confiable.", icon: ShieldCheck },
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(153,220,51,0.20),transparent_34%),radial-gradient(circle_at_top_right,rgba(0,55,102,0.42),transparent_32%)]" />

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <a href="#inicio" className="flex items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-white p-2 shadow-lg shadow-blue-950/30">
            <img src={logoSrc} alt="Elite Digital Lab" className="h-full w-full object-contain" />
          </div>
          <div>
            <p className="text-lg font-bold tracking-wide">Elite Digital Lab</p>
            <p className="text-xs text-cyan-100/70">Diseño · Escaneo · Laboratorio dental digital</p>
          </div>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-slate-200 md:flex">
          <a href="#servicios" className="hover:text-lime-300">Servicios</a>
          <a href="#casos" className="hover:text-lime-300">Casos reales</a>
          <a href="#proceso" className="hover:text-lime-300">Proceso</a>
          <a href="#contacto" className="hover:text-lime-300">Contacto</a>
        </nav>
        <a href={whatsappLink} target="_blank" rel="noreferrer"><Button>WhatsApp <MessageCircle className="ml-2 h-4 w-4" /></Button></a>
      </header>

      <main id="inicio">
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-10 md:grid-cols-2 md:pt-20">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-lime-300/20 bg-white/10 px-4 py-2 text-sm text-lime-100 backdrop-blur">
              <Star className="h-4 w-4 text-lime-300" /> Precisión digital para resultados funcionales y estéticos
            </div>
            <h1 className="max-w-2xl text-5xl font-black leading-tight tracking-tight md:text-7xl">Laboratorio dental digital para doctores que buscan precisión, estética y confianza.</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200/85">En Elite Digital Lab trabajamos con flujo digital, diseño cuidadoso, escaneo y atención cercana para ayudarte a entregar casos funcionales, estéticos y confiables.</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href={whatsappLink} target="_blank" rel="noreferrer"><Button className="bg-gradient-to-r from-lime-300 to-cyan-300 px-8 text-slate-950 hover:opacity-90">Cotizar mi caso <ChevronRight className="ml-2 h-5 w-5" /></Button></a>
              <a href="#servicios"><Button variant="outline" className="px-8">Ver servicios y precios</Button></a>
            </div>
            <div className="mt-10 grid max-w-lg grid-cols-3 gap-4">
              <div><p className="text-3xl font-black text-lime-300">Digital</p><p className="text-xs text-slate-300">Escaneo y diseño</p></div>
              <div><p className="text-3xl font-black text-cyan-300">Estético</p><p className="text-xs text-slate-300">Detalle y acabado</p></div>
              <div><p className="text-3xl font-black text-sky-300">Cercano</p><p className="text-xs text-slate-300">Seguimiento real</p></div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="relative">
            <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-lime-400/20 to-blue-500/10 blur-2xl" />
            <Card className="relative overflow-hidden border-white/10 bg-white/10 shadow-2xl backdrop-blur-xl">
              <div className="p-4 md:p-6">
                <div className="relative h-[520px] overflow-hidden rounded-[1.5rem] bg-slate-900">
                  <img src="/assets/hero-caracterizacion.jpeg" alt="Caracterización dental Elite Digital Lab" className="h-full w-full object-cover opacity-95" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm backdrop-blur"><Layers3 className="h-4 w-4 text-lime-300" />Caso real · Caracterización estética</div>
                    <h2 className="text-3xl font-black">Detalle, anatomía y acabado en cada caso.</h2>
                    <p className="mt-3 max-w-md text-sm leading-6 text-slate-200">Trabajos elaborados con enfoque en estética dental, función y comunicación con el doctor.</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </section>

        <section id="servicios" className="bg-white px-6 py-20 text-slate-950">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-3xl"><p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-eliteBlue">Servicios y precios</p><h2 className="text-4xl font-black md:text-5xl">Soluciones digitales para doctores exigentes.</h2><p className="mt-4 text-slate-600">Precios en MXN. Los trabajos urgentes tienen costo adicional y algunos servicios pueden variar según indicaciones o complejidad del caso.</p></div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => <Card key={service.name} className="border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl"><div className="p-6"><div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-50 text-eliteBlue"><BadgeDollarSign className="h-6 w-6" /></div><p className="text-lg font-black">{service.name}</p><p className="mt-2 text-xl font-black text-eliteBlue">{service.price}</p><p className="mt-2 text-sm text-slate-500">{service.detail}</p></div></Card>)}
            </div>
          </div>
        </section>

        <section id="casos" className="bg-slate-50 px-6 py-20 text-slate-950">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-eliteBlue">Casos reales</p><h2 className="text-4xl font-black md:text-5xl">Resultados que hablan por el laboratorio.</h2><p className="mt-4 max-w-2xl text-slate-600">Una muestra de trabajos reales realizados en Elite Digital Lab: restauraciones, modelos, guardas y caracterización estética.</p></div><a href={instagramUrl} target="_blank" rel="noreferrer"><Button variant="outline" className="border-slate-300 bg-white text-slate-950 hover:bg-slate-100"><InstagramIcon className="mr-2 h-4 w-4" />Ver Instagram<ExternalLink className="ml-2 h-4 w-4" /></Button></a></div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{galleryImages.map((item) => <Card key={item.src} className="group overflow-hidden border-slate-200 bg-white"><div className="h-72 overflow-hidden bg-slate-200"><img src={item.src} alt={item.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /></div><div className="p-6"><p className="text-sm font-bold uppercase tracking-widest text-eliteGreen">{item.note}</p><h3 className="mt-2 text-xl font-black">{item.title}</h3><p className="mt-1 text-slate-600">{item.type}</p></div></Card>)}</div>
          </div>
        </section>

        <section id="proceso" className="px-6 py-20">
          <div className="mx-auto max-w-7xl"><div className="mb-12 text-center"><p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-lime-300">Proceso</p><h2 className="text-4xl font-black md:text-5xl">Un flujo claro de inicio a entrega.</h2></div><div className="grid gap-6 md:grid-cols-3">{process.map((item, index) => { const Icon = item.icon; return <Card key={item.title} className="border-white/10 bg-white/10 text-white backdrop-blur"><div className="p-8"><div className="mb-6 flex items-center justify-between"><div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-lime-300 to-cyan-300 text-slate-950"><Icon className="h-7 w-7" /></div><p className="text-5xl font-black text-white/10">0{index + 1}</p></div><h3 className="text-2xl font-black">{item.title}</h3><p className="mt-4 leading-7 text-slate-300">{item.text}</p></div></Card>; })}</div></div>
        </section>

        <section className="bg-slate-50 px-6 py-20 text-slate-950"><div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2"><div><p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-eliteBlue">Por qué elegirnos</p><h2 className="text-4xl font-black md:text-5xl">Cuidamos tu caso como parte de tu equipo.</h2><p className="mt-5 leading-8 text-slate-600">Sabemos que detrás de cada trabajo hay un doctor, un paciente y una expectativa importante. Por eso buscamos que el proceso sea claro, profesional y confiable.</p></div><div className="grid gap-4">{benefits.map((benefit) => <div key={benefit} className="flex items-start gap-4 rounded-3xl bg-white p-5 shadow-sm"><CheckCircle2 className="mt-1 h-6 w-6 flex-none text-eliteGreen" /><p className="font-semibold text-slate-700">{benefit}</p></div>)}</div></div></section>

        <section id="contacto" className="px-6 py-20"><div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.1fr_0.9fr]"><div className="rounded-[2.5rem] bg-gradient-to-br from-lime-300 to-cyan-300 p-8 text-slate-950 shadow-2xl shadow-cyan-500/20 md:p-14"><h2 className="text-4xl font-black md:text-5xl">¿Listo para enviar tu próximo caso?</h2><p className="mt-5 max-w-2xl text-lg text-slate-800">Escríbenos por WhatsApp y con gusto te orientamos con materiales, indicaciones, escaneo, diseño digital o tiempos de entrega.</p><div className="mt-8 flex flex-col gap-4 sm:flex-row"><a href={whatsappLink} target="_blank" rel="noreferrer"><Button className="bg-eliteBlue px-8 text-white hover:bg-[#002849]"><MessageCircle className="mr-2 h-5 w-5" />Enviar WhatsApp</Button></a><a href="#servicios"><Button variant="outline" className="border-slate-950/20 bg-white/30 px-8 text-slate-950 hover:bg-white/50"><Send className="mr-2 h-5 w-5" />Ver lista de precios</Button></a></div></div><Card className="border-white/10 bg-white/10 text-white backdrop-blur"><div className="p-8 md:p-10"><p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-lime-300">Ubicación</p><h3 className="text-3xl font-black">Elite Digital Lab</h3><div className="mt-6 space-y-5 text-slate-200"><p className="flex gap-3"><MapPin className="h-5 w-5 flex-none text-lime-300" /> Avenida de las Rosas #53, Colonia Jardín, C.P. 87330, H. Matamoros, Tamaulipas.</p><p className="flex gap-3"><Phone className="h-5 w-5 flex-none text-lime-300" /> WhatsApp: +52 868 351 6566</p><p className="flex gap-3"><InstagramIcon className="h-5 w-5 flex-none text-lime-300" /> Instagram: @elitedigitallab.dental</p></div><div className="mt-8 grid gap-3 sm:grid-cols-2"><a href={mapsUrl} target="_blank" rel="noreferrer"><Button className="w-full"><MapPin className="mr-2 h-4 w-4" />Abrir mapa</Button></a><a href={instagramUrl} target="_blank" rel="noreferrer"><Button variant="outline" className="w-full"><InstagramIcon className="mr-2 h-4 w-4" />Instagram</Button></a></div></div></Card></div></section>
      </main>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-400"><p>© 2026 Elite Digital Lab. Laboratorio dental digital.</p></footer>
    </div>
  );
}

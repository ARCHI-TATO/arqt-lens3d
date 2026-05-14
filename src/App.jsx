import { motion } from "framer-motion";

export default function App() {
  const products = [
    {
      title: "Llaveros Personalizados",
      desc: "Diseños únicos impresos en alta precisión.",
      image:
        "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Maquetas Arquitectónicas",
      desc: "Visualización profesional para arquitectura y urbanismo.",
      image:
        "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Impresión 3D Premium",
      desc: "Acabados limpios y tecnología de alta calidad.",
      image:
        "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-widest">
            ARQT_LENS3D
          </h1>

          <div className="hidden md:flex gap-10 text-sm uppercase tracking-wide text-white/70">
            <a href="#productos" className="hover:text-white transition">
              Productos
            </a>

            <a href="#proceso" className="hover:text-white transition">
              Proceso
            </a>

            <a href="#contacto" className="hover:text-white transition">
              Contacto
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center text-center px-6">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1800&auto=format&fit=crop"
            className="w-full h-full object-cover opacity-20"
          />

          <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 max-w-5xl">
          <p className="uppercase tracking-[0.5em] text-white/50 mb-6 text-sm">
            Arquitectura + Tecnología + Diseño
          </p>

          <h1 className="text-6xl md:text-8xl font-black leading-none mb-8">
            IMPRESIÓN
            <br />
            3D PREMIUM
          </h1>

          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-10">
            Transformamos ideas digitales en objetos reales con precisión,
            diseño y estética cinematográfica.
          </p>

          <div className="flex flex-col md:flex-row gap-5 justify-center">
            <button className="bg-white text-black shadow-[0_0_40px_rgba(255,255,255,0.15)] px-8 py-4 rounded-full font-semibold hover:scale-105 transition duration-300">
              Cotizar ahora
            </button>

            <button className="border border-white/30 px-8 py-4 rounded-full hover:bg-white hover:text-black transition duration-300">
              Ver catálogo
            </button>
          </div>
        </div>
      </section>

      {/* PRODUCTOS */}
      <section id="productos" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <p className="text-white/40 uppercase tracking-[0.4em] mb-4 text-sm">
              Productos Destacados
            </p>

            <h2 className="text-5xl md:text-7xl font-black">
              Diseño que se puede tocar
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:scale-[1.03] hover:border-white/20 transition duration-500 shadow-2xl"
              >
                <div className="overflow-hidden">
                  <img
                    src={product.image}
                    className="h-80 w-full object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3">
                    {product.title}
                  </h3>

                  <p className="text-white/60 leading-relaxed">
                    {product.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRECISION */}
      <section className="py-40 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <p className="uppercase tracking-[0.4em] text-white/40 mb-4 text-sm">
            Precisión Milimétrica
          </p>

          <h2 className="text-6xl md:text-8xl font-black leading-tight mb-10">
            Cada capa.
            <br />
            Cada detalle.
          </h2>

          <p className="max-w-3xl mx-auto text-xl text-white/60 leading-relaxed">
            Creamos piezas impresas en 3D con acabados limpios, precisión
            profesional y una estética moderna orientada al diseño y la
            arquitectura.
          </p>
        </div>
      </section>

      {/* PROCESO */}
      <section
        id="proceso"
        className="py-32 px-6 bg-zinc-100 text-black rounded-t-[4rem]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <p className="uppercase tracking-[0.4em] text-black/40 mb-4 text-sm">
              Cómo Trabajamos
            </p>

            <h2 className="text-5xl md:text-7xl font-black">
              Proceso Creativo
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Envías tu idea",
              "Modelado 3D",
              "Impresión de precisión",
              "Entrega final",
            ].map((step, index) => (
              <div
                key={index}
                className="p-10 rounded-3xl border border-black/10 bg-white"
              >
                <div className="text-7xl font-black text-black/10 mb-6">
                  0{index + 1}
                </div>

                <h3 className="text-2xl font-bold leading-tight">
                  {step}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 px-6 text-center bg-black">
        <div className="max-w-5xl mx-auto">
          <p className="uppercase tracking-[0.4em] text-white/40 mb-4 text-sm">
            Lleva tu idea al siguiente nivel
          </p>

          <h2 className="text-6xl md:text-8xl font-black leading-tight mb-10">
            Convierte tu diseño
            <br />
            en algo real.
          </h2>

          <p className="text-xl text-white/60 mb-12 max-w-3xl mx-auto">
            Desde llaveros personalizados hasta maquetas arquitectónicas y
            productos exclusivos impresos en 3D.
          </p>

          <button className="bg-white text-black px-10 py-5 rounded-full text-lg font-semibold hover:scale-105 transition duration-300">
            Solicitar cotización
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        id="contacto"
        className="border-t border-white/10 py-10 px-6"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="font-bold text-xl tracking-widest">
              ARQT_LENS3D
            </h3>

            <p className="text-white/40 mt-2">
              Arquitectura + Impresión 3D + Diseño Visual
            </p>
          </div>

          <div className="flex gap-6 text-white/60">
            <a href="#">Instagram</a>
            <a href="#">TikTok</a>
            <a href="#">WhatsApp</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
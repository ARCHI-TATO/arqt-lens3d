export default function App() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-10 py-6 border-b border-gray-800">
        <h1 className="text-3xl font-bold">
          ARQT_LENS3D
        </h1>

        <div className="flex items-center gap-8">

  <div className="flex items-center gap-8">

  <a
    href="https://wa.me/51998508424"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-gray-300 transition"
  >
    Contacto
  </a>

  <a
    href="https://www.instagram.com/arqt_lens3d?igsh=MTI4ZjN3YWUyc21vdg=="
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-gray-300 transition"
  >
    Instagram
  </a>

  <a
    href="https://www.tiktok.com/@arqtato?is_from_webapp=1&sender_device=pc"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-gray-300 transition"
  >
    TikTok
  </a>

  </div>

</div>
      </nav>

     {/* HERO */}

<section
  className="min-h-screen text-white flex items-center justify-center text-center px-6 relative overflow-hidden"
  style={{
    backgroundImage: "url('/hero-bg.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>

  {/* Overlay oscuro */}
  <div className="absolute inset-0 bg-black/70"></div>

  {/* Contenido */}
  <div className="relative z-10 max-w-5xl">

    <p className="tracking-[10px] text-gray-300 text-sm mb-8">
      PRECISIÓN • DISEÑO • IMPRESIÓN 3D
    </p>

    <h1 className="text-6xl md:text-8xl font-black leading-tight mb-8">
      Convierte tu diseño
      <br />
      en algo real.
    </h1>

    <p className="text-gray-300 text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
      Maquetas arquitectónicas, renders y productos impresos en 3D
      con acabados premium y precisión profesional.
    </p>

    <div className="flex justify-center gap-6 flex-wrap">

      <a
        href="https://wa.me/51998508424"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-black px-10 py-5 rounded-full text-lg font-semibold hover:bg-gray-300 transition"
      >
        Solicitar cotización
      </a>

      <a
        href="https://www.instagram.com/arqt_lens3d"
        target="_blank"
        rel="noopener noreferrer"
        className="border border-white px-10 py-5 rounded-full text-lg hover:bg-white hover:text-black transition"
      >
        Ver Instagram
      </a>

    </div>

  </div>

</section>

      {/* PROCESO */}
      <section className="bg-white text-black py-32 px-10">
        <p className="text-center tracking-[10px] text-gray-500 mb-6">
          CÓMO TRABAJAMOS
        </p>

        <h2 className="text-6xl font-extrabold text-center mb-20">
          Proceso Creativo
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            "Envías tu idea",
            "Modelado 3D",
            "Impresión de precisión",
            "Entrega final",
          ].map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-3xl p-10 h-[230px] flex flex-col justify-between"
            >
              <span className="text-7xl font-extrabold text-gray-200">
                0{index + 1}
              </span>

              <h3 className="text-3xl font-bold">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* DETALLE */}
      <section className="bg-black text-white py-40 px-10 text-center">
        <p className="tracking-[10px] text-gray-500 mb-6">
          PRECISIÓN MILIMÉTRICA
        </p>

        <h2 className="text-7xl font-extrabold leading-tight mb-10">
          Cada capa.
          <br />
          Cada detalle.
        </h2>

        <p className="max-w-3xl mx-auto text-gray-400 text-2xl leading-relaxed">
          Creamos piezas impresas en 3D con acabados limpios,
          precisión profesional y una estética moderna.
        </p>
      </section>

      {/* PRODUCTOS */}
      <section className="bg-black text-white py-32 px-10">
        <p className="tracking-[10px] text-gray-500 text-center mb-6">
          PRODUCTOS DESTACADOS
        </p>

        <h2 className="text-7xl font-extrabold text-center mb-20">
          Diseño que se puede tocar
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="bg-[#111] rounded-3xl overflow-hidden border border-gray-800">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
              className="h-[350px] w-full object-cover"
            />

            <div className="p-8">
              <h3 className="text-4xl font-bold mb-4">
                Llaveros Personalizados
              </h3>

              <p className="text-gray-400 text-lg">
                Diseños únicos impresos en alta precisión.
              </p>
            </div>
          </div>

          <div className="bg-[#111] rounded-3xl overflow-hidden border border-gray-800">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
              className="h-[350px] w-full object-cover"
            />

            <div className="p-8">
              <h3 className="text-4xl font-bold mb-4">
                Maquetas Arquitectónicas
              </h3>

              <p className="text-gray-400 text-lg">
                Visualización profesional para arquitectura.
              </p>
            </div>
          </div>

          <div className="bg-[#111] rounded-3xl overflow-hidden border border-gray-800">
            <img
              src="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1200&auto=format&fit=crop"
              className="h-[350px] w-full object-cover"
            />

            <div className="p-8">
              <h3 className="text-4xl font-bold mb-4">
                Impresión 3D Premium
              </h3>

              <p className="text-gray-400 text-lg">
                Acabados limpios y tecnología de alta calidad.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
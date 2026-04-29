import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Política de Cookies | PlastIndustrial Group",
};

export default function Cookies() {
  return (
    <>
      <Header />
      <main className="bg-white pt-36 pb-24">
        <div className="section-container max-w-3xl">

          {/* Page header */}
          <div className="mb-14 pb-10 border-b border-gray-100">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-brand-700" />
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-700">
                Legal
              </span>
            </div>
            <h1 className="text-4xl font-bold text-brand-900 tracking-tight">Política de Cookies</h1>
          </div>

          <div className="prose-legal">

            <section>
              <h2>1. ¿Qué son las cookies?</h2>
              <p>Las cookies son pequeños archivos de texto que los sitios web depositan en el dispositivo del usuario cuando este los visita. Permiten al sitio web recordar información sobre la visita, como el idioma preferido y otras opciones, con el fin de facilitar la próxima visita y hacer el sitio más útil.</p>
            </section>

            <section>
              <h2>2. Cookies utilizadas en este sitio web</h2>
              <table>
                <thead>
                  <tr><th>Nombre</th><th>Tipo</th><th>Finalidad</th><th>Duración</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>lang</code></td>
                    <td>Técnica / Preferencia</td>
                    <td>Almacena el idioma seleccionado por el usuario (es / en) para mantener la preferencia entre sesiones.</td>
                    <td>Persistente (localStorage)</td>
                  </tr>
                </tbody>
              </table>
              <p>Actualmente este sitio web <strong>no utiliza cookies de terceros, cookies analíticas ni cookies publicitarias</strong>.</p>
            </section>

            <section>
              <h2>3. Base jurídica</h2>
              <p>La cookie <code>lang</code> es una cookie de preferencia estrictamente necesaria para el correcto funcionamiento de la selección de idioma. De acuerdo con el artículo 22.2 de la LSSI-CE, este tipo de cookies están exentas de la obligación de obtener consentimiento previo.</p>
            </section>

            <section>
              <h2>4. Cómo gestionar o eliminar las cookies</h2>
              <p>Puede eliminar la preferencia de idioma almacenada en cualquier momento borrando los datos del sitio web desde la configuración de su navegador:</p>
              <ul>
                <li><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Borrar datos de navegación</li>
                <li><strong>Firefox:</strong> Opciones → Privacidad y seguridad → Cookies y datos del sitio</li>
                <li><strong>Safari:</strong> Preferencias → Privacidad → Gestionar datos del sitio web</li>
                <li><strong>Edge:</strong> Configuración → Privacidad, búsqueda y servicios → Borrar datos de exploración</li>
              </ul>
              <p>Tenga en cuenta que si elimina o bloquea estas cookies, algunas funciones del sitio web (como la selección de idioma) pueden no funcionar correctamente.</p>
            </section>

            <section>
              <h2>5. Actualizaciones de esta política</h2>
              <p>PLASTINDUSTRIAL GROUP, S.L. puede modificar esta Política de Cookies en función de nuevas exigencias legislativas o de cambios en el sitio web. Recomendamos revisar esta página periódicamente.</p>
            </section>

            <section>
              <h2>6. Contacto</h2>
              <p>Para cualquier consulta relacionada con el uso de cookies en este sitio web, puede contactar con nosotros en:</p>
              <ul>
                <li>Correo electrónico: <a href="mailto:oriolgali@galireyesbe.com">oriolgali@galireyesbe.com</a></li>
                <li>Dirección: C/ Empordà, 39, CP 08192, Sant Quirze del Vallès (Barcelona)</li>
              </ul>
            </section>

            <p className="text-xs text-gray-400 mt-12">Última actualización: julio de 2025</p>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}

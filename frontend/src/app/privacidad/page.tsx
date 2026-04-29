import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Política de Privacidad | PlastIndustrial Group",
};

export default function Privacidad() {
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
            <h1 className="text-4xl font-bold text-brand-900 tracking-tight">Política de Privacidad</h1>
          </div>

          <div className="prose-legal">

            <section>
              <h2>1. Responsable del tratamiento</h2>
              <table>
                <tbody>
                  <tr><td>Responsable</td><td>PLASTINDUSTRIAL GROUP, S.L.</td></tr>
                  <tr><td>NIF</td><td>B22485338</td></tr>
                  <tr><td>Domicilio</td><td>C/ Empordà, 39, CP 08192, Sant Quirze del Vallès (Barcelona)</td></tr>
                  <tr><td>Contacto</td><td>oriolgali@galireyesbe.com</td></tr>
                  <tr><td>Teléfono</td><td>+34 609 73 21 50</td></tr>
                </tbody>
              </table>
            </section>

            <section>
              <h2>2. Datos personales que tratamos</h2>
              <p>En función de la forma en que interactúe con nuestro Sitio Web, podemos tratar los siguientes datos:</p>
              <ul>
                <li><strong>Datos de contacto:</strong> nombre, dirección de correo electrónico y número de teléfono, cuando nos los facilite voluntariamente a través del formulario de contacto o por correo electrónico.</li>
                <li><strong>Datos de navegación:</strong> dirección IP, tipo de navegador, páginas visitadas y tiempo de permanencia, recogidos de forma automática mediante cookies técnicas.</li>
              </ul>
            </section>

            <section>
              <h2>3. Finalidad y base jurídica del tratamiento</h2>
              <table>
                <thead>
                  <tr><th>Finalidad</th><th>Base jurídica</th></tr>
                </thead>
                <tbody>
                  <tr><td>Atender consultas y solicitudes de información</td><td>Interés legítimo / consentimiento del interesado</td></tr>
                  <tr><td>Gestión de la relación comercial</td><td>Ejecución de un contrato</td></tr>
                  <tr><td>Envío de comunicaciones comerciales</td><td>Consentimiento expreso</td></tr>
                  <tr><td>Análisis del tráfico web</td><td>Consentimiento (cookies analíticas)</td></tr>
                </tbody>
              </table>
            </section>

            <section>
              <h2>4. Conservación de los datos</h2>
              <p>Los datos se conservarán durante el tiempo necesario para cumplir la finalidad para la que fueron recogidos y durante los plazos legalmente establecidos. En el caso de consultas comerciales, los datos se mantendrán mientras exista una relación activa o hasta que el interesado solicite su supresión.</p>
            </section>

            <section>
              <h2>5. Destinatarios</h2>
              <p>PLASTINDUSTRIAL GROUP, S.L. no cede datos personales a terceros, salvo obligación legal o cuando sea estrictamente necesario para la prestación del servicio contratado (p. ej., proveedores de alojamiento web). En ningún caso se realizarán transferencias internacionales de datos.</p>
            </section>

            <section>
              <h2>6. Derechos del interesado</h2>
              <p>En cualquier momento puede ejercer los siguientes derechos dirigiéndose a <strong>oriolgali@galireyesbe.com</strong>, indicando el derecho que desea ejercer y adjuntando copia de su documento de identidad:</p>
              <ul>
                <li><strong>Acceso:</strong> conocer qué datos personales tratamos sobre usted.</li>
                <li><strong>Rectificación:</strong> solicitar la corrección de datos inexactos.</li>
                <li><strong>Supresión:</strong> solicitar la eliminación de sus datos cuando ya no sean necesarios.</li>
                <li><strong>Oposición:</strong> oponerse al tratamiento de sus datos en determinadas circunstancias.</li>
                <li><strong>Portabilidad:</strong> recibir sus datos en un formato estructurado y de uso común.</li>
                <li><strong>Limitación:</strong> solicitar la restricción del tratamiento de sus datos.</li>
              </ul>
              <p>Asimismo, tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) en <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>.</p>
            </section>

            <section>
              <h2>7. Seguridad</h2>
              <p>PLASTINDUSTRIAL GROUP, S.L. aplica las medidas técnicas y organizativas adecuadas para garantizar un nivel de seguridad apropiado al riesgo, conforme al artículo 32 del Reglamento General de Protección de Datos (RGPD).</p>
            </section>

            <p className="text-xs text-gray-400 mt-12">Última actualización: julio de 2025</p>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}

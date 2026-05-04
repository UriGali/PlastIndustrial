import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Aviso Legal | PlastIndustrial Group",
  description:
    "Aviso Legal de PlastIndustrial Group, S.L. Información legal sobre el titular del sitio web, condiciones de uso, propiedad intelectual y responsabilidad.",
  alternates: {
    canonical: "https://plastindustrial.com/aviso-legal",
  },
};

export default function AvisoLegal() {
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
            <h1 className="text-4xl font-bold text-brand-900 tracking-tight">Aviso Legal</h1>
          </div>

          <div className="prose-legal">

            <section>
              <h2>1. Identificación del titular</h2>
              <p>En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se facilitan los siguientes datos identificativos:</p>
              <table>
                <tbody>
                  <tr><td>Razón social</td><td>PLASTINDUSTRIAL GROUP, S.L.</td></tr>
                  <tr><td>NIF</td><td>B22485338</td></tr>
                  <tr><td>Domicilio social</td><td>C/ Empordà, 39, CP 08192, Sant Quirze del Vallès (Barcelona)</td></tr>
                  <tr><td>Correo electrónico</td><td>oriolgali@galireyesbe.com</td></tr>
                  <tr><td>Teléfono</td><td>+34 609 73 21 50</td></tr>
                  <tr><td>Datos registrales</td><td>Sección 8, Hoja B 639014, Inscripción A 1 (21.07.2025)</td></tr>
                </tbody>
              </table>
            </section>

            <section>
              <h2>2. Objeto y ámbito de aplicación</h2>
              <p>El presente Aviso Legal regula el acceso y uso del sitio web <strong>www.plastindustrial.com</strong> (en adelante, "el Sitio Web"), titularidad de PLASTINDUSTRIAL GROUP, S.L. El acceso y uso del Sitio Web implica la aceptación plena y sin reservas de las condiciones aquí establecidas.</p>
            </section>

            <section>
              <h2>3. Condiciones de uso</h2>
              <p>El usuario se compromete a hacer un uso correcto del Sitio Web de conformidad con la ley, la buena fe, el orden público, los usos del tráfico y el presente Aviso Legal. El usuario responderá frente a PLASTINDUSTRIAL GROUP, S.L. o frente a terceros de cualquier daño o perjuicio que pudiera causarse como consecuencia del incumplimiento de estas condiciones.</p>
              <p>Queda expresamente prohibido el uso del Sitio Web con fines ilícitos o contrarios a las presentes condiciones, que resulten lesivos de los intereses o derechos de terceros, o que de cualquier forma puedan dañar, inutilizar o deteriorar el Sitio Web.</p>
            </section>

            <section>
              <h2>4. Propiedad intelectual e industrial</h2>
              <p>Todos los contenidos del Sitio Web —incluyendo, sin limitación, textos, imágenes, gráficos, logotipos, iconos, código fuente, diseño gráfico y estructura— son propiedad de PLASTINDUSTRIAL GROUP, S.L. o de sus licenciantes, y están protegidos por la normativa española e internacional sobre propiedad intelectual e industrial.</p>
              <p>Queda prohibida la reproducción, distribución, comunicación pública, transformación o cualquier otra actividad que se pueda realizar con los contenidos del Sitio Web sin contar con la autorización previa y por escrito del titular.</p>
            </section>

            <section>
              <h2>5. Responsabilidad</h2>
              <p>PLASTINDUSTRIAL GROUP, S.L. no garantiza la disponibilidad, continuidad ni infalibilidad del funcionamiento del Sitio Web, y no se responsabiliza de los daños o perjuicios causados por la falta de disponibilidad o de continuidad del mismo.</p>
              <p>El Sitio Web puede contener enlaces a sitios web de terceros. PLASTINDUSTRIAL GROUP, S.L. no asume ninguna responsabilidad sobre los contenidos, informaciones o servicios que aparezcan en dichos sitios, que tendrán exclusivamente carácter informativo.</p>
            </section>

            <section>
              <h2>6. Legislación aplicable y jurisdicción</h2>
              <p>Las presentes condiciones se rigen por la legislación española vigente. Para la resolución de cualquier conflicto derivado del acceso o uso del Sitio Web, las partes se someten a los Juzgados y Tribunales de Barcelona, con renuncia expresa a cualquier otro fuero que pudiera corresponderles.</p>
            </section>

            <p className="text-xs text-gray-400 mt-12">Última actualización: julio de 2025</p>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}

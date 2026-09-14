const capabilities = [
  "Onboarding digital y KYC/KYB", "Cuentas y saldos", "Transferencias entre usuarios",
  "Pagos y cobros", "Integración con bancos y PSP", "Cuentas virtuales / CVU / CLABE u otros esquemas según el mercado",
  "Tarjetas físicas y virtuales mediante proveedores", "QR y medios de pago locales", "Wallet fiat + cripto",
  "Compra, venta y transferencia de activos digitales mediante proveedores habilitados", "Pagos cross-border",
  "Conversión de monedas y conexión con proveedores de FX", "Backoffice y gestión de usuarios",
  "Conciliación de operaciones", "Reporting y trazabilidad", "APIs para integrar la wallet con sus sistemas actuales"
];
const layers = ["Wallet / Web / App", "Onboarding · KYC · Pagos · Transferencias · Fiat + Cripto", "APIs y capa de integración", "Core · Bancos · PSP · FX · KYC/AML · Custodia · Proveedores externos"];
const steps = ["Analizamos la operación actual", "Definimos la arquitectura necesaria", "Integramos los módulos y proveedores", "Lanzamos nuevas capacidades progresivamente"];

export function WalletLanding() {
  return <main className="wallet-landing">
    <section className="product-hero section wallet-hero">
      <a className="product-back" href="/#soluciones">← Todas las soluciones</a>
      <div className="illustrated-hero-grid"><div>
      <p className="eyebrow">Wallet digital</p>
      <h1>Convierta su ecosistema en una <span>experiencia financiera propia</span></h1>
      <p className="product-description"><strong>Desarrollamos e integramos wallets digitales adaptadas a su modelo de negocio</strong>, conectando pagos, transferencias, cuentas, proveedores financieros y activos digitales desde una infraestructura modular.</p>
      <p className="wallet-intro">Para empresas, Fintechs y entidades que buscan incorporar servicios financieros a su operación sin depender de una solución cerrada.</p>
      <a className="button" href="/#contacto">Agendar un diagnóstico</a>
      </div><img className="product-art" src="/assets/wallet-illustration.png" width="1536" height="1024" alt="Ilustración de una wallet digital con tarjeta y módulos conectados" fetchPriority="high" /></div>
    </section>

    <section className="section wallet-split">
      <div className="section-heading"><h2>Una wallet diseñada alrededor de su negocio</h2></div>
      <div className="wallet-prose"><p>Si su empresa ya tiene clientes, una wallet puede convertirse en una nueva capa de servicios dentro de su ecosistema.</p><p>En Action Fintech diseñamos la arquitectura según la operación, los mercados y las integraciones que necesita cada proyecto. Podemos implementar una solución completa o incorporar módulos sobre infraestructura existente.</p><p className="wallet-emphasis"><strong>No adaptamos su negocio a una wallet prediseñada. Construimos la wallet alrededor de su negocio.</strong></p></div>
    </section>

    <section className="section ecosystem" id="capacidades">
      <div className="section-heading"><p className="eyebrow">Capacidades</p><h2>¿Qué podemos integrar?</h2></div>
      <ul className="wallet-capabilities">{capabilities.map((item, i) => <li key={item}><span aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>{item}</li>)}</ul>
    </section>

    <section className="section wallet-assets">
      <p className="eyebrow">Wallet fiat + cripto</p>
      <div className="wallet-split"><div className="section-heading"><h2>Una sola experiencia para distintos tipos de activos</h2></div>
      <div className="wallet-prose"><p>Cuando el modelo de negocio lo requiere, podemos integrar infraestructura <strong>fiat + cripto</strong> dentro de una misma experiencia.</p><p>La arquitectura puede conectar cuentas tradicionales, activos digitales, proveedores de custodia, exchanges, on/off ramps y diferentes rieles de pago mediante APIs.</p><p>Esto permite desarrollar experiencias donde el usuario pueda operar con distintos activos sin que la empresa tenga que construir toda la infraestructura desde cero.</p></div></div>
    </section>

    <section className="section experience wallet-markets">
      <div className="wallet-split"><div className="section-heading"><h2>Preparada para operar en distintos mercados</h2></div><div className="wallet-prose"><p>Una wallet que busca escalar regionalmente necesita mucho más que una aplicación.</p><p>Cada país puede requerir diferentes bancos, PSP, mecanismos de identificación, monedas, medios de pago y proveedores.</p><p>Por eso trabajamos con una arquitectura modular que permite <strong>incorporar nuevos mercados e integraciones progresivamente</strong>, sin tener que reemplazar toda la plataforma.</p></div></div>
      <p className="wallet-market-claim"><strong>Una wallet. Múltiples proveedores. Diferentes mercados.</strong></p>
    </section>

    <section className="section wallet-architecture">
      <div className="section-heading"><h2>La integración es parte del producto</h2><p className="product-description">La verdadera complejidad de una wallet está detrás de la interfaz.</p></div>
      <ol className="wallet-layers" aria-label="Arquitectura de la wallet, de la interfaz a los proveedores">{layers.map((layer, i) => <li key={layer}><span className="wallet-layer-number" aria-hidden="true">0{i + 1}</span><strong>{layer}</strong>{i < layers.length - 1 && <span className="wallet-layer-arrow" aria-hidden="true">↓</span>}</li>)}</ol>
      <p className="product-description">Action Fintech desarrolla y orquesta esa infraestructura para que los distintos componentes funcionen como un único ecosistema.</p>
    </section>

    <section className="section ecosystem">
      <div className="wallet-split"><div className="section-heading"><h2>No necesita reemplazar lo que ya funciona</h2></div><div className="wallet-prose"><p>Si su empresa ya cuenta con un core, CRM, sistema transaccional, proveedor de pagos o infraestructura propia, podemos integrarnos sobre esa base.</p><p>La implementación puede realizarse por etapas:</p></div></div>
      <ol className="wallet-steps">{steps.map((step, i) => <li key={step}><span aria-hidden="true">0{i + 1}</span><strong>{step}</strong></li>)}</ol>
      <p className="product-description">Esto reduce la dependencia de soluciones monolíticas y permite evolucionar la plataforma a medida que cambia el negocio.</p>
    </section>

    <section className="section">
      <div className="section-heading"><h2>¿Para quién desarrollamos wallets?</h2></div>
      <ul className="wallet-audiences">
        <li>Empresas que ya cuentan con una base de clientes y quieren incorporar servicios financieros.</li>
        <li>Fintechs y entidades financieras que necesitan lanzar o modernizar su wallet.</li>
        <li>Retailers, marketplaces y plataformas que buscan desarrollar soluciones de <strong>embedded finance</strong>.</li>
        <li>Empresas que necesitan una wallet para pagos, cobros o movimientos internos.</li>
        <li>Proyectos que buscan integrar <strong>fiat + cripto</strong>.</li>
        <li>Compañías con operaciones regionales que necesitan conectar diferentes proveedores y medios de pago.</li>
      </ul>
    </section>

    <section className="section ecosystem wallet-closing">
      <div className="section-heading"><h2>Más que una wallet, infraestructura financiera</h2></div>
      <div className="wallet-prose"><p>Una aplicación puede cambiar. Un proveedor también.</p><p>Por eso diseñamos la arquitectura para que cada componente pueda evolucionar sin condicionar todo el negocio.</p></div>
      <p className="product-modules"><strong>Wallets · Pagos · APIs · Core · KYC/AML · Fiat + Cripto · Cross-Border · Integraciones</strong></p>
      <h3>La tecnología financiera debería adaptarse a su negocio. No al revés.</h3>
      <a className="button" href="/#contacto">Hablemos de su proyecto</a>
    </section>
  </main>;
}

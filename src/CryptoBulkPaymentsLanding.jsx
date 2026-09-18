function Heading({ label, children }) {
  return <div className="section-heading">{label && <p className="eyebrow">{label}</p>}<h2>{children}</h2></div>;
}

export function CryptoBulkPaymentsLanding() {
  const capabilities = [
    ["Gestión centralizada", "Organice desde un único entorno las instrucciones necesarias para ejecutar pagos masivos en activos digitales."],
    ["Ejecución automatizada", "Procese múltiples transferencias sobre blockchain y reduzca tareas manuales dentro de la operación."],
    ["Alta velocidad y escala", "Prepare la infraestructura para grandes volúmenes de pagos que requieren rapidez y capacidad operativa."],
  ];

  const useCases = [
    "Pagos a usuarios",
    "Pagos a proveedores",
    "Pagos a partners",
    "Distribución de fondos",
    "Otras operaciones con transferencias masivas de activos digitales",
  ];

  return <main className="wallet-landing crypto-payments-landing">
    <section className="product-hero section wallet-hero">
      <a className="product-back" href="/#soluciones">← Todas las soluciones</a>
      <div className="illustrated-hero-grid"><div>
        <p className="eyebrow">Pagos Masivos en Cripto</p>
        <h1>Envíe múltiples pagos en cripto <span>de forma inmediata y a escala.</span></h1>
        <p className="product-description">Infraestructura de alta velocidad para empresas que necesitan ejecutar grandes volúmenes de transferencias de activos digitales.</p>
        <a className="button" href="/#contacto">Quiero conocer la solución</a>
      </div><img className="product-art" src="/assets/crypto-bulk-payments-illustration.png" width="1536" height="1024" alt="Ilustración de una infraestructura central que distribuye múltiples pagos digitales" fetchPriority="high" /></div>
    </section>

    <section className="section">
      <div className="wallet-split">
        <Heading label="Infraestructura empresarial">Grandes volúmenes, una operación conectada</Heading>
        <div className="wallet-prose">
          <p>Desarrollamos una infraestructura de pagos masivos en cripto de alta velocidad, diseñada para empresas que necesitan ejecutar grandes volúmenes de transferencias de activos digitales de forma rápida y automatizada.</p>
          <p>La solución permite centralizar la gestión de pagos y ejecutar múltiples transacciones sobre blockchain, reduciendo procesos manuales y tiempos operativos.</p>
        </div>
      </div>
    </section>

    <section className="section ecosystem" id="capacidades">
      <Heading label="Capacidades">Una base para automatizar pagos en cripto</Heading>
      <div className="product-features crypto-capabilities">{capabilities.map(([title, description], index) => <article key={title}><span className="eyebrow">0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
    </section>

    <section className="section crypto-use-cases">
      <div className="wallet-split">
        <Heading label="Casos de uso">Una solución para diferentes flujos de distribución</Heading>
        <div className="wallet-prose"><p>Puede aplicarse a operaciones que requieran transferencias masivas de activos digitales.</p></div>
      </div>
      <ul className="wallet-capabilities">{useCases.map((item, index) => <li key={item}><span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ul>
    </section>

    <section className="section experience wallet-markets">
      <div className="wallet-split">
        <Heading label="Automatización">Menos procesos manuales. Más capacidad operativa.</Heading>
        <div className="wallet-prose"><p>Centralice la gestión, automatice la ejecución y prepare su operación para distribuir activos digitales con mayor velocidad y escala.</p></div>
      </div>
    </section>

    <section className="section wallet-closing">
      <Heading label="Próximo paso">Diseñemos su infraestructura de pagos masivos</Heading>
      <p className="product-description">Analizamos el volumen, los destinatarios y el flujo operativo para definir una solución adaptada a su empresa.</p>
      <a className="button payments-final-cta" href="/#contacto">Quiero conocer la solución</a>
    </section>
  </main>;
}

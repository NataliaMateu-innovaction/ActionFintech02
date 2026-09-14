import content from "./payments-content.json";

const lines = (index) => content[index].split(/\r?\n/).map(line => line.trim()).filter(Boolean);
function Paragraphs({ items }) {
  return <div className="wallet-prose">{items.map((text, index) => <p key={index}>{text}</p>)}</div>;
}
function Heading({ label, children }) {
  return <div className="section-heading">{label && <p className="eyebrow">{label}</p>}<h2>{children}</h2></div>;
}

export function PaymentsLanding() {
  const integrations = lines(2);
  const architecture = lines(3);
  const operation = lines(5);
  const management = lines(6);
  const closing = lines(11);
  return <main className="wallet-landing payments-landing">
    <section className="product-hero section wallet-hero">
      <a className="product-back" href="/#soluciones">← Todas las soluciones</a>
      <div className="illustrated-hero-grid"><div>
      <p className="eyebrow">Pagos cross-border</p>
      <h1>Conecte su operación de <span>pagos internacionales</span></h1>
      <p className="product-description">{lines(0)[0]}</p>
      <p className="wallet-intro">{lines(0)[1]}</p>
      <a className="button" href="/#contacto">Agendar un diagnóstico</a>
      </div><img className="product-art" src="/assets/payments-illustration.png" width="1536" height="1024" alt="Ilustración de una red de pagos que conecta América Latina y China" fetchPriority="high" /></div>
    </section>

    <section className="section">
      <div className="wallet-split"><Heading label="LATAM → China">Sus pagos, en una operación conectada</Heading><Paragraphs items={lines(1).slice(0, -1)}/></div>
      <p className="payments-statement">{lines(1).at(-1)}</p>
    </section>

    <section className="section ecosystem" id="capacidades">
      <Heading label="Integraciones">La arquitectura que su operación necesita</Heading>
      <div className="payments-intro"><Paragraphs items={integrations.slice(0, 2)}/></div>
      <ul className="wallet-capabilities">{integrations.slice(2).map((text, i) => <li key={text}><span aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>{text.replace(/^-\s*/, "")}</li>)}</ul>
    </section>

    <section className="section wallet-architecture">
      <Heading label="Orquestación financiera">Múltiples proveedores. Una infraestructura.</Heading>
      <div className="payments-intro"><Paragraphs items={architecture.slice(0, 2)}/></div>
      <ol className="wallet-layers" aria-label="Arquitectura de pagos internacionales">{architecture.slice(2, -1).filter(text => text !== "↓").map((text, i, layers) => <li key={text}><span className="wallet-layer-number" aria-hidden="true">0{i + 1}</span><strong>{text}</strong>{i < layers.length - 1 && <span className="wallet-layer-arrow" aria-hidden="true">↓</span>}</li>)}</ol>
      <p className="product-description">{architecture.at(-1)}</p>
    </section>

    <section className="section experience wallet-markets">
      <div className="wallet-split"><Heading label="China y América Latina">Preparada para un escenario financiero en evolución</Heading><Paragraphs items={lines(4)}/></div>
    </section>

    <section className="section">
      <Heading label="De punta a punta">Desde el origen del pago hasta su conciliación</Heading>
      <p className="product-description">{operation[0]}</p>
      <ol className="payments-process">{operation.slice(1).map((text, i) => <li key={text}><span aria-hidden="true">0{i + 1}</span><div><h3>{["Origen de la operación", "Validación y aprobación", "Conexión con proveedores", "Seguimiento del pago", "Conciliación e integración"][i]}</h3><p>{text}</p></div></li>)}</ol>
    </section>

    <section className="section ecosystem">
      <Heading label="Gestión y control">Toda la información, en un único entorno</Heading>
      <div className="payments-intro"><Paragraphs items={management.slice(0, 2)}/></div>
      <div className="payments-management">{management.slice(2).filter((_, i) => i % 2 === 0).map((title, i) => <article key={title}><h3>{title}</h3><p>{management[3 + i * 2]}</p></article>)}</div>
    </section>

    <section className="section wallet-split">
      <Heading label="Fiat + cripto">Diferentes rieles, una arquitectura flexible</Heading><Paragraphs items={lines(7)}/>
    </section>

    <section className="section ecosystem">
      <div className="wallet-split"><Heading label="Alcance regional">Una base para conectar nuevos mercados</Heading><Paragraphs items={lines(8).slice(0, -1)}/></div>
      <p className="payments-statement">{lines(8).at(-1)}</p>
    </section>

    <section className="section wallet-split">
      <Heading label="Para quién">Empresas con una operación internacional</Heading><Paragraphs items={lines(9)}/>
    </section>

    <section className="section ecosystem wallet-split">
      <Heading label="Nuestro rol">El socio tecnológico de su operación</Heading><Paragraphs items={lines(10)}/>
    </section>

    <section className="section wallet-closing">
      <Heading label="Próximo paso">Diseñemos su infraestructura cross-border</Heading>
      <Paragraphs items={closing.slice(0, 4)}/>
      <a className="button payments-final-cta" href="/#contacto">Analizar mi operación cross-border</a>
      <p className="eyebrow payments-signature">Action Fintech</p>
      <h3>{closing.at(-1)}</h3>
    </section>
  </main>;
}

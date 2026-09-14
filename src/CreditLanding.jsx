import content from "./credit-content.json";

const lines = index => content[index].split(/\r?\n/).map(line => line.trim()).filter(Boolean);
function Copy({ items }) {
  return <div className="wallet-prose">{items.map((text, i) => <p key={i}>{text}</p>)}</div>;
}
function Heading({ label, children }) {
  return <div className="section-heading"><p className="eyebrow">{label}</p><h2>{children}</h2></div>;
}
function ListSection({ index, label, title, soft = false }) {
  const items = lines(index);
  const start = items.findIndex(text => text.startsWith("- "));
  const end = items.findLastIndex(text => text.startsWith("- "));
  return <section className={`section ${soft ? "ecosystem" : ""}`}>
    <Heading label={label}>{title}</Heading>
    <div className="payments-intro"><Copy items={items.slice(0, start)}/></div>
    <ul className="wallet-capabilities">{items.slice(start, end + 1).map((text, i) => <li key={text}><span aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>{text.replace(/^-\s*/, "")}</li>)}</ul>
    <p className="product-description">{items.at(-1)}</p>
  </section>;
}
function Flow({ items, label }) {
  const layers = items.filter(text => text !== "↓");
  return <ol className="wallet-layers" aria-label={label}>{layers.map((text, i) => <li key={text}><span className="wallet-layer-number" aria-hidden="true">0{i + 1}</span><strong>{text}</strong>{i < layers.length - 1 && <span className="wallet-layer-arrow" aria-hidden="true">↓</span>}</li>)}</ol>;
}

export function CreditLanding() {
  const cycle = lines(2);
  const scoring = lines(4);
  const reporting = lines(10);
  const architecture = lines(11);
  return <main className="wallet-landing credit-landing">
    <section className="product-hero section wallet-hero">
      <a className="product-back" href="/#soluciones">← Todas las soluciones</a>
      <p className="eyebrow">Créditos digitales</p>
      <h1>Conecte todo el <span>ciclo del crédito</span></h1>
      <p className="product-description">{lines(0)[0]}</p>
      <p className="wallet-intro">{lines(0)[1]}</p>
      <p className="credit-hero-claim">{lines(0)[2]}</p>
      <a className="button" href="/#contacto">Agendar un diagnóstico</a>
    </section>

    <section className="section">
      <div className="wallet-split"><Heading label="Transformación digital">La evolución de una operación que ya existe</Heading><Copy items={lines(1).slice(0, -1)}/></div>
      <p className="payments-statement">{lines(1).at(-1)}</p>
    </section>

    <section className="section ecosystem" id="capacidades">
      <Heading label="De punta a punta">Cada etapa del crédito, conectada</Heading>
      <p className="product-description">{cycle[0]}</p>
      <ol className="credit-cycle">{cycle.slice(1).filter((_, i) => i % 2 === 0).map((title, i) => <li key={title}><span aria-hidden="true">0{i + 1}</span><h3>{title.replace(/^\d+\.\s*/, "")}</h3><p>{cycle[2 + i * 2]}</p></li>)}</ol>
    </section>

    <ListSection index={3} label="Onboarding digital" title="Un inicio digital, con control sobre la originación"/>

    <section className="section ecosystem">
      <Heading label="Scoring y decisión">Su lógica de riesgo, integrada a la operación</Heading>
      <div className="payments-intro"><Copy items={scoring.slice(0, 3)}/></div>
      <Flow items={scoring.slice(3, -1)} label="Ejemplo de flujo de evaluación crediticia"/>
      <p className="product-description">{scoring.at(-1)}</p>
    </section>

    <ListSection index={5} label="Core de créditos" title="El centro de su operación financiera"/>

    <section className="section experience wallet-markets wallet-split">
      <Heading label="Desembolsos">De la aprobación al movimiento de dinero</Heading><Copy items={lines(6)}/>
    </section>

    <ListSection index={7} label="Cobranza y cartera" title="Una gestión conectada hasta el recupero"/>

    <section className="section ecosystem">
      <div className="wallet-split"><Heading label="CRM financiero">Una visión completa de cada cliente</Heading><Copy items={lines(8).slice(0, 2)}/></div>
      <p className="payments-statement credit-journey">{lines(8)[2]}</p>
      <div className="payments-intro"><Copy items={lines(8).slice(3)}/></div>
    </section>

    <ListSection index={9} label="Automatización e IA" title="Capacidades que se integran a su operación"/>

    <section className="section ecosystem">
      <Heading label="Reporting y trazabilidad">Visibilidad sobre cada etapa del negocio</Heading>
      <div className="payments-intro"><Copy items={reporting.slice(0, 2)}/></div>
      <div className="payments-management">{reporting.slice(2).filter((_, i) => i % 2 === 0).map((title, i) => <article key={title}><h3>{title}</h3><p>{reporting[3 + i * 2]}</p></article>)}</div>
    </section>

    <section className="section">
      <Heading label="Arquitectura modular">Conserve lo que funciona. Conecte lo que necesita.</Heading>
      <div className="payments-intro"><Copy items={architecture.slice(0, 3)}/></div>
      <Flow items={architecture.slice(3, -1)} label="Arquitectura modular de créditos digitales"/>
      <p className="product-description">{architecture.at(-1)}</p>
    </section>

    <ListSection index={12} label="Modelos y verticales" title="Distintos negocios. Una arquitectura adaptable." soft/>

    <section className="section">
      <Heading label="Una operación integrada">Más que una app, infraestructura para crecer</Heading>
      <div className="payments-intro"><Copy items={lines(13).slice(0, 2)}/></div>
      <p className="payments-statement">{lines(13)[2]}</p>
      <div className="payments-intro"><Copy items={lines(13).slice(3)}/></div>
    </section>

    <section className="section ecosystem wallet-split">
      <Heading label="Experiencia financiera">Tecnología construida sobre procesos reales</Heading><Copy items={lines(14)}/>
    </section>

    <section className="section wallet-closing">
      <Heading label="Próximo paso">Diseñemos la evolución de su operación de crédito</Heading>
      <Copy items={lines(15).slice(0, 2)}/>
      <a className="button payments-final-cta" href="/#contacto">Analizar mi operación de crédito</a>
      <p className="eyebrow payments-signature">Action Fintech</p>
    </section>
  </main>;
}

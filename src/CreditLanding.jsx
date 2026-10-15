import content from "./credit-content.json";
import { ArrowDown, ArrowLeft } from "lucide-react";
import { HeroVideo } from "./HeroVideo";

function Copy({ items, className = "wallet-prose" }) {
  return <div className={className}>{items.map((text) => <p key={text}>{text}</p>)}</div>;
}

function Heading({ label, children }) {
  return <div className="section-heading">{label && <p className="eyebrow">{label}</p>}<h2>{children}</h2></div>;
}

export function CreditLanding() {
  const { hero, problem, core, openCore, cycle, automation, ecosystem, closing } = content;

  return <main className="wallet-landing credit-landing">
    <section className="product-hero section wallet-hero">
      <a className="product-back" href="/#soluciones"><ArrowLeft aria-hidden="true" /> Todas las soluciones</a>
      <div className="illustrated-hero-grid">
        <div>
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1>Digitalice toda su <span>operación de crédito</span></h1>
          <Copy items={hero.paragraphs} className="credit-hero-copy" />
          <p className="credit-hero-claim">{hero.claim}</p>
          <div className="credit-hero-mifos" aria-label="Core financiero basado en Mifos X y Apache Fineract">
            <img src="/assets/logos/mifos-logo-flat.png" alt="Mifos" />
            <span>Core financiero abierto<br /><strong>sobre Apache Fineract</strong></span>
          </div>
          <a className="button" href="/#contacto">{hero.cta}</a>
        </div>
        <HeroVideo name="credit-hero" label="Animación del ciclo del crédito conectado al core Mifos X sobre Apache Fineract: captación, onboarding, scoring, firma, desembolso, cobranza y renovación" />
      </div>
    </section>

    <section className="section credit-problem">
      <div className="wallet-split">
        <Heading label="Operación integrada">{problem.title}</Heading>
        <Copy items={problem.paragraphs} />
      </div>
    </section>

    <section className="section ecosystem credit-core" id="capacidades">
      <div className="credit-core-heading">
        <div>
          <p className="eyebrow">Core financiero</p>
          <h2>{core.title}</h2>
        </div>
        <div className="mifos-logo-panel">
          <span>Implementación e integración</span>
          <img className="mifos-logo" src="/assets/logos/mifos-logo-flat.png" alt="Mifos" />
          <strong>Apache Fineract</strong>
        </div>
      </div>
      <div className="payments-intro"><Copy items={core.paragraphs} /></div>
      <h3 className="credit-subheading">¿Qué permite centralizar?</h3>
      <div className="credit-core-grid">
        {core.capabilities.map((item, index) => <article key={item.title}>
          <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </article>)}
      </div>
    </section>

    <section className="section credit-open-core">
      <div className="wallet-split">
        <Heading label="Flexible y API-first">{openCore.title}</Heading>
        <Copy items={[openCore.paragraph]} />
      </div>
      <p className="payments-statement">{openCore.claim}</p>
    </section>

    <section className="section ecosystem credit-connected-cycle">
      <Heading label="De punta a punta">{cycle.title}</Heading>
      <ol className="credit-architecture" aria-label="Ciclo conectado de una operación de crédito">
        {cycle.steps.map((step, index) => <li className={step.startsWith("CORE") ? "credit-architecture-core" : ""} key={step}>
          <span className="credit-architecture-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
          <strong>{step}</strong>
          {step.startsWith("CORE") && <img className="credit-cycle-mifos" src="/assets/logos/mifos-logo-flat.png" alt="" aria-hidden="true" />}
          {index < cycle.steps.length - 1 && <span className="credit-architecture-arrow" aria-hidden="true"><ArrowDown /></span>}
        </li>)}
      </ol>
      <p className="credit-integrations">{cycle.integrations}</p>
    </section>

    <section className="section credit-automation">
      <div className="wallet-split">
        <Heading label="Automatización e IA">{automation.title}</Heading>
        <Copy items={automation.paragraphs} />
      </div>
    </section>

    <section className="section ecosystem credit-ecosystem">
      <Heading label="Implementación e integración">{ecosystem.title}</Heading>
      <div className="payments-intro"><Copy items={ecosystem.paragraphs} /></div>
      <ul className="credit-components" aria-label="Componentes de la solución">
        {ecosystem.components.map((component) => <li key={component}>{component}</li>)}
      </ul>
    </section>

    <section className="section wallet-closing credit-closing">
      <Heading label={closing.eyebrow}>{closing.title}</Heading>
      <ul className="credit-attributes" aria-label="Atributos de la arquitectura">
        {closing.attributes.map((attribute) => <li key={attribute}>{attribute}</li>)}
      </ul>
      <p className="credit-positioning">{closing.positioning}</p>
      <p className="credit-closing-claim">{closing.claim}</p>
      <a className="button payments-final-cta" href="/#contacto">{closing.cta}</a>
      <p className="eyebrow payments-signature">Action Fintech</p>
    </section>
  </main>;
}

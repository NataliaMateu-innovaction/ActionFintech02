import { useEffect, useState } from "react";
import { WalletLanding } from "./WalletLanding";
import { PaymentsLanding } from "./PaymentsLanding";
import { CreditLanding } from "./CreditLanding";

const modules = ["Core", "Onboarding", "Scoring", "Wallet", "Payments", "CRM", "Reporting", "Fiat + Crypto"];
const reasons = [
  ["01", "Arquitectura modular", "Active cada capacidad cuando su operación la necesita."],
  ["02", "Integración con sistemas existentes", "Conectamos la nueva infraestructura sin borrar lo que ya funciona."],
  ["03", "Módulos probados en producción", "Componentes preparados para procesos financieros reales."],
  ["04", "Menor vendor lock-in", "Capas abiertas y decisiones tecnológicas reversibles."],
  ["05", "Experiencia financiera real", "Tecnología diseñada alrededor de la operación, no de la demo."],
  ["06", "Preparada para LATAM", "Flexibilidad para integraciones y marcos regulatorios locales."],
];

const products = {
  "/soluciones/wallet-digital": {
    name: "Wallet digital", title: "Una wallet conectada a su negocio.",
    description: "Construya una experiencia de cuentas digitales y movimientos de dinero sobre una infraestructura modular, integrada a su operación.",
    features: [["Cuentas digitales", "Organice cuentas, saldos y movimientos desde una base común."], ["Onboarding integrado", "Conecte el alta de usuarios con los procesos de validación de su operación."], ["Pagos y transferencias", "Integre los servicios de movimiento de dinero que su negocio necesita."]],
    modules: "Wallet · Onboarding · Core · Payments · APIs"
  },
  "/soluciones/pagos": {
    name: "Pagos cross-border", title: "Conecte su operación más allá de las fronteras.",
    description: "Diseñe sus flujos de pagos internacionales con integraciones adaptadas a los mercados, proveedores y procesos de su negocio.",
    features: [["Orquestación de pagos", "Conecte proveedores y organice cada etapa del flujo de pago."], ["Trazabilidad operativa", "Centralice estados y movimientos para acompañar el seguimiento de las operaciones."], ["Integraciones a medida", "Vincule bancos, proveedores de pagos y servicios de validación según cada mercado."]],
    modules: "Payments · Middleware · Compliance · Reporting · APIs"
  },
  "/soluciones/creditos-digitales": {
    name: "Créditos digitales", title: "Conecte cada etapa de su operación de crédito.",
    description: "Integre originación, evaluación y gestión de créditos en una arquitectura que acompaña las reglas y los procesos de su negocio.",
    features: [["Originación digital", "Organice solicitudes y documentación en un flujo conectado con su operación."], ["Scoring y evaluación", "Integre fuentes de información y criterios de evaluación según su modelo de crédito."], ["Gestión y cobranza", "Conecte el seguimiento de la cartera, los pagos y los procesos de cobranza."]],
    modules: "Onboarding · Scoring · Core · Collections · Reporting"
  }
};

function ProductLanding({ product }) {
  useEffect(() => { document.title = `${product.name} | Action Fintech`; }, [product]);
  if (product.name === "Wallet digital") return <><Header/><WalletLanding/><Footer/></>;
  if (product.name === "Pagos cross-border") return <><Header/><PaymentsLanding/><Footer/></>;
  if (product.name === "Créditos digitales") return <><Header/><CreditLanding/><Footer/></>;
  return <><Header/><main>
    <section className="product-hero section">
      <a className="product-back" href="/#soluciones">← Todas las soluciones</a>
      <p className="eyebrow">{product.name}</p>
      <h1>{product.title}</h1>
      <p className="product-description">{product.description}</p>
      <div className="actions"><a className="button" href="/#contacto">Agendar un diagnóstico</a><a className="button button--outline" href="#capacidades">Explorar capacidades</a></div>
    </section>
    <section className="section product-capabilities" id="capacidades">
      <div className="section-heading"><p className="eyebrow">Capacidades</p><h2>Los componentes de su próxima solución.</h2></div>
      <div className="product-features">{product.features.map(([title, description], i) => <article key={title}><span className="eyebrow">0{i + 1}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
    </section>
    <section className="section ecosystem"><div className="split-heading"><div><p className="eyebrow">Arquitectura modular</p><h2>Conectada desde<br/><span>la base.</span></h2></div><div><p className="product-description">Combinamos los módulos y las integraciones según el alcance de su operación.</p><p className="product-modules">{product.modules}</p><a className="button button--outline" href="/#plataforma">Conocer la plataforma</a></div></div></section>
    <section className="section product-next"><p className="eyebrow">Conversemos</p><h2>Diseñemos su solución de {product.name.toLowerCase()}.</h2><a className="button" href="/#contacto">Agendar un diagnóstico</a></section>
  </main><Footer/></>;
}

function Logo() {
  return <img className="brand-logo" src="/assets/action-fintech-logo.png" alt="Action Fintech" />;
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <a href="/#inicio" className="logo-link" aria-label="Action Fintech — inicio"><Logo /></a>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="site-nav">{open ? "Cerrar" : "Menú"}</button>
      <nav id="site-nav" className={open ? "is-open" : ""} aria-label="Navegación principal">
        <a href="/#soluciones" onClick={() => setOpen(false)}>Soluciones</a>
        <a href="/#plataforma" onClick={() => setOpen(false)}>Plataforma</a>
        <a href="/#integraciones" onClick={() => setOpen(false)}>Integraciones</a>
        <a href="/#recursos" onClick={() => setOpen(false)}>Recursos</a>
        <a href="/#nosotros" onClick={() => setOpen(false)}>Nosotros</a>
      </nav>
      <a className="button header-cta" href="/#contacto">Agendar un diagnóstico</a>
    </header>
  );
}

function Hero() {
  return <section className="hero" id="inicio">
    <div className="hero-visual" aria-hidden="true"><img src="/assets/action-fintech-hero.png" alt="" /></div>
    <div className="hero-copy reveal" style={{ width: '100%', maxWidth: '800px' }}>
      <p className="eyebrow">Tecnología financiera modular</p>
      <h1 style={{ textWrap: 'balance', wordBreak: 'break-word' }}>Construimos la <span style={{ display: 'inline' }}>infraestructura financiera que</span> su negocio necesita.</h1>
      <p className="hero-claim">La tecnología se adapta a su negocio.<br />No al revés.</p>
      <div className="actions"><a className="button" href="/#contacto">Agendar un diagnóstico</a><a className="button button--outline" href="/#soluciones">Conocer nuestras soluciones</a></div>
    </div>
    <div className="hero-module-label hero-label-one">APIs <small>OPEN &amp; SECURE</small></div>
    <div className="hero-module-label hero-label-two">PAYMENTS <small>REAL-TIME</small></div>
    <div className="hero-module-label hero-label-three">LENDING <small>&amp; CREDIT</small></div>
  </section>;
}

function Solutions() {
  return <section className="solutions section" id="soluciones">
    <div className="section-heading reveal"><p className="eyebrow">Soluciones</p><h2>Infraestructura financiera<br />para operar y crecer<span className="blue-dot">.</span></h2></div>
    <div className="solution-flow reveal">
      <article className="solution solution--featured"><span className="index">01</span><h3>Wallet<br />digital</h3><p>Cuentas digitales, custodia segura y experiencia omnicanal.</p><a className="button button--outline" href="/soluciones/wallet-digital">Conocer Wallet digital <span aria-hidden="true"> →</span></a></article>
      <article className="solution"><span className="index">02</span><h3>Pagos<br />cross-border</h3><p>Pagos internacionales en tiempo real con trazabilidad y cumplimiento.</p><a className="button button--outline" href="/soluciones/pagos">Conocer Pagos <span aria-hidden="true"> →</span></a></article>
      <article className="solution"><span className="index">03</span><h3>Créditos<br />digitales</h3><p>Originación, scoring y gestión de créditos 100% digitales.</p><a className="button button--outline" href="/soluciones/creditos-digitales">Conocer Créditos digitales <span aria-hidden="true"> →</span></a></article>
      <div className="flow-line" aria-hidden="true"><i></i><i></i><i></i></div>
    </div>
  </section>;
}

function Ecosystem() {
  const items = ["Wallet", "Payments", "Lending", "Core", "Onboarding", "CRM", "Compliance", "APIs"];
  return <section className="ecosystem section" id="plataforma">
    <div className="split-heading reveal"><h2>Una infraestructura.<br /><span>Múltiples posibilidades.</span></h2><p>No vendemos una suite cerrada. Diseñamos una arquitectura que se adapta a la operación, las integraciones y la evolución de cada negocio.</p></div>
    <div className="orbit-system reveal" aria-label="Sistema modular conectado"><div className="orbit-core"><strong>Action</strong><span>financial infrastructure</span></div>{items.map((item, i) => <div key={item} className={`orbit-node node-${i + 1}`}><span>{String(i + 1).padStart(2, "0")}</span>{item}</div>)}</div>
  </section>;
}

function Architecture() {
  const layers = [["01","Canales","Web · PWA · Mobile · APIs"],["02","Módulos funcionales","Wallet · Onboarding · Scoring · CRM · Payments · Collections · Reporting"],["03","Middleware + APIs abiertas","Orquestación · Integraciones · Connectors"],["04","Core / Sub-ledger","Mifos X · Apache Fineract · Core existente"],["05","Infraestructura + Seguridad","Cloud · On-premise · Hybrid · Security · Compliance"]];
  return <section className="architecture section"><div className="section-heading reveal"><p className="eyebrow">Arquitectura modular</p><h2>Cinco capas. Una operación conectada.</h2></div><div className="architecture-stack reveal">{layers.map(([n,title,text],i) => <article className={`layer layer-${i+1}`} key={n}><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div><b>OPEN</b></article>)}</div></section>;
}

function Integrations() {
  const items = ["Banks","PSPs","KYC / AML","Credit bureaus","Digital signature","Exchanges / Digital assets","Financial APIs"];
  return <section className="integrations section" id="integraciones"><div className="section-heading reveal"><p className="eyebrow">Integraciones</p><h2>La capacidad de integrar<br />también es infraestructura.</h2></div><div className="topology reveal"><div className="topology-center"><small>OPEN LAYER</small><strong>Middleware<br />+ APIs</strong><span>Action Fintech</span></div><div className="integration-list">{items.map((x,i)=><div key={x}><span>{String(i+1).padStart(2,"0")}</span>{x}</div>)}</div></div></section>;
}

function MatureModules() {
  return <section className="mature section" id="recursos"><div className="split-heading reveal"><div><p className="eyebrow">Módulos maduros</p><h2>Capacidades listas<br />para combinarse.</h2></div><p>Una base tecnológica común, distintas configuraciones para cada modelo de negocio y etapa de crecimiento.</p></div><div className="module-index reveal">{modules.map((name,i)=><div key={name}><span>{String(i+1).padStart(2,"0")}</span><strong>{name}</strong><small>{i%2===0?"CORE CAPABILITY":"CONNECTED MODULE"}</small></div>)}</div></section>;
}

function Experience() {
  return <section className="experience section" id="nosotros"><div className="section-heading reveal"><p className="eyebrow">Experiencia</p><h2>Tecnología desarrollada<br />para operaciones reales.</h2></div><div className="experience-grid reveal"><div className="experience-statement"><p>Diseñamos, integramos y acompañamos infraestructura financiera para contextos donde la continuidad, la trazabilidad y la evolución importan.</p></div><div className="future-proof"><small>ESPACIO PREPARADO PARA</small><span>Clientes</span><span>Casos</span><span>Métricas verificadas</span><p>La evidencia se incorpora cuando está validada.</p></div></div></section>;
}

function WhyUs() {
  return <section className="why section"><div className="section-heading reveal"><p className="eyebrow">Por qué Action Fintech</p><h2>Diseñada para evolucionar.<br />Preparada para operar.</h2></div><div className="reasons reveal">{reasons.map(([n,title,desc])=><article key={n}><span>{n}</span><h3>{title}</h3><p>{desc}</p></article>)}</div></section>;
}

function Contact() {
  const [status,setStatus]=useState(""); const [errors,setErrors]=useState({});
  const submit=(event)=>{event.preventDefault();const data=new FormData(event.currentTarget);const next={};["nombre","email","empresa","necesidad"].forEach(k=>{if(!String(data.get(k)||"").trim())next[k]="Completá este campo."});if(data.get("email")&&!/^\S+@\S+\.\S+$/.test(data.get("email")))next.email="Ingresá un email corporativo válido.";setErrors(next);if(!Object.keys(next).length){setStatus("Gracias. Recibimos tu consulta y coordinaremos el diagnóstico.");event.currentTarget.reset();}};
  return <section className="contact section" id="contacto"><div className="contact-copy reveal"><p className="eyebrow">Próximo paso</p><h2>Su negocio no debería adaptarse a las limitaciones de su software.</h2><p>Construyamos una infraestructura financiera que pueda evolucionar con él.</p></div><form className="contact-form reveal" onSubmit={submit} noValidate><label>Nombre<input name="nombre" aria-invalid={!!errors.nombre}/>{errors.nombre&&<span>{errors.nombre}</span>}</label><label>Email corporativo<input name="email" type="email" aria-invalid={!!errors.email}/>{errors.email&&<span>{errors.email}</span>}</label><label>Empresa<input name="empresa" aria-invalid={!!errors.empresa}/>{errors.empresa&&<span>{errors.empresa}</span>}</label><label>¿Qué necesita construir?<textarea name="necesidad" rows="3" aria-invalid={!!errors.necesidad}></textarea>{errors.necesidad&&<span>{errors.necesidad}</span>}</label><button className="button" type="submit">Agendar un diagnóstico</button>{status&&<p className="form-success" role="status">{status}</p>}</form></section>;
}

function Footer(){return <footer><Logo/><p>Infraestructura financiera modular para operaciones reales.</p><nav aria-label="Navegación del pie"><a href="/#soluciones">Soluciones</a><a href="/#plataforma">Plataforma</a><a href="/#integraciones">Integraciones</a><a href="/#recursos">Recursos</a><a href="/#nosotros">Nosotros</a><a href="/#contacto">Contacto</a><a href="/#privacidad">Privacidad</a><a href="/#terminos">Términos</a></nav><small>© 2026 Action Fintech. Todos los derechos reservados.</small></footer>}

export function App(){const product = products[window.location.pathname.replace(/\/$/, "")]; useEffect(()=>{const observer=new IntersectionObserver(entries=>entries.forEach(e=>e.isIntersecting&&e.target.classList.add("is-visible")),{threshold:.12});document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));return()=>observer.disconnect()},[]);if(product) return <ProductLanding product={product}/>; return <><Header/><main><Hero/><Solutions/><Ecosystem/><Architecture/><Integrations/><MatureModules/><Experience/><WhyUs/><Contact/></main><Footer/></>}


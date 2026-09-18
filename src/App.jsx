import { useEffect, useState, useRef } from "react";
import { usePointerMotion } from "./usePointerMotion";
import { WalletLanding } from "./WalletLanding";
import { PaymentsLanding } from "./PaymentsLanding";
import { CreditLanding } from "./CreditLanding";
import { CryptoBulkPaymentsLanding } from "./CryptoBulkPaymentsLanding";
import { BlogLanding } from "./BlogLanding";
import { BlogPost } from "./BlogPost";
import { Terms } from "./Terms";
import { LinksLanding } from "./LinksLanding";

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
  },
  "/soluciones/pagos-masivos-cripto": {
    name: "Pagos Masivos en Cripto", title: "Pagos en cripto, inmediatos y a escala.",
    description: "Ejecute múltiples transferencias de activos digitales desde una infraestructura centralizada, rápida y automatizada.",
    features: [],
    modules: "Digital Assets · Blockchain · Payments · Automation · APIs"
  }
};

function ProductLanding({ product }) {
  useEffect(() => { document.title = `${product.name} | Action Fintech`; }, [product]);
  if (product.name === "Wallet digital") return <><Header/><WalletLanding/><Footer/></>;
  if (product.name === "Pagos cross-border") return <><Header/><PaymentsLanding/><Footer/></>;
  if (product.name === "Créditos digitales") return <><Header/><CreditLanding/><Footer/></>;
  if (product.name === "Pagos Masivos en Cripto") return <><Header/><CryptoBulkPaymentsLanding/><Footer/></>;
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
        <a href="/blog" onClick={() => setOpen(false)}>Blog</a>
        <a href="/#contacto" onClick={() => setOpen(false)}>Contacto</a>
      </nav>
      <a className="button header-cta" href="/#contacto">Agendar un diagnóstico</a>
    </header>
  );
}

function Hero() {
  return <section className="hero" id="inicio">
    <div className="hero-visual" aria-hidden="true"><video src="/assets/hero_vide02-stable.mp4" autoPlay loop muted playsInline /></div>
    <div className="hero-copy reveal">
      <p className="eyebrow">Tecnología financiera modular</p>
      <h1>Construimos <span>la infraestructura financiera que</span> su negocio<br />necesita.</h1>
      <p className="hero-claim">La tecnología se adapta a su negocio.<br />No al revés.</p>
      <div className="actions"><a className="button" href="/#contacto">Agendar un diagnóstico</a><a className="button button--outline" href="/#soluciones">Conocer nuestras soluciones</a></div>
    </div>
  </section>;
}

function Solutions() {
  return <section className="solutions section" id="soluciones">
    <div className="section-heading reveal"><p className="eyebrow">Soluciones</p><h2>Infraestructura financiera<br />para operar y crecer<span className="blue-dot">.</span></h2></div>
    <div className="solution-flow reveal">
      <article className="solution solution--featured"><span className="index">01</span><h3>Wallet<br />digital</h3><p>Cuentas digitales, custodia segura y experiencia omnicanal.</p><a className="button button--outline" href="/soluciones/wallet-digital">Conocer Wallet digital <span aria-hidden="true"> →</span></a></article>
      <article className="solution"><span className="index">02</span><h3>Pagos<br />cross-border</h3><p>Pagos internacionales en tiempo real con trazabilidad y cumplimiento.</p><a className="button button--outline" href="/soluciones/pagos">Conocer Pagos <span aria-hidden="true"> →</span></a></article>
      <article className="solution"><span className="index">03</span><h3>Créditos<br />digitales</h3><p>Originación, scoring y gestión de créditos 100% digitales.</p><a className="button button--outline" href="/soluciones/creditos-digitales">Conocer Créditos digitales <span aria-hidden="true"> →</span></a></article>
      <article className="solution"><span className="index">04</span><h3>Pagos masivos<br />en cripto</h3><p>Múltiples transferencias de activos digitales, automatizadas y a escala.</p><a className="button button--outline" href="/soluciones/pagos-masivos-cripto">Conocer solución <span aria-hidden="true"> →</span></a></article>
      <div className="flow-line" aria-hidden="true"><i></i><i></i><i></i><i></i></div>
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
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 364; // width (340) + gap (24)
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const clients = [
    {
      name: "Nación Bursatil",
      logo: "/assets/logos/case-logo-1.png",
      url: "https://nacionbursatil.com.ar/",
      description: "Manejo estratégico de la página web, optimización de procesos mediante automatización e incorporación de inteligencia artificial para potenciar la eficiencia operativa."
    },
    {
      name: "CrediExpress",
      logo: "/assets/logos/case-logo-2.png",
      url: "https://crediexpress.com.ar/",
      description: "Onboarding digital optimizado, integración del motor de reglas y sistemas de Crediexpress, vinculación con los lenders y monitoreo integral del ciclo del préstamo."
    },
    {
      name: "Zenziya",
      logo: "/assets/logos/case-logo-3.png",
      url: "https://zenziya.com/",
      description: "Servicio de instalación y configuración de MIFOS, adaptado al entorno operativo del cliente."
    },
    {
      name: "Templaris",
      logo: "/assets/logos/case-logo-4.png",
      url: "https://templaris.com/",
      description: "Implementación de MIFOS y ejecución del proceso de migración desde sistemas legacy hacia la plataforma MIFOS, asegurando continuidad y consistencia."
    }
  ];

  return (
    <section className="experience section" id="nosotros">
      <div className="section-heading reveal">
        <p className="eyebrow">Experiencia</p>
        <h2>Tecnología desarrollada<br />para operaciones reales.</h2>
      </div>
      <div className="experience-header reveal">
        <div className="experience-statement">
          <p>Diseñamos, integramos y acompañamos infraestructura financiera para contextos donde la continuidad, la trazabilidad y la evolución importan. Hemos logrado más de 30 clientes satisfechos, transformando la forma en que bancos, fintechs y empresas financieras ofrecen servicios digitales.</p>
        </div>
        <div className="carousel-controls">
          <button onClick={() => scroll('left')} aria-label="Anterior">←</button>
          <button onClick={() => scroll('right')} aria-label="Siguiente">→</button>
        </div>
      </div>
      <div className="clients-carousel reveal" ref={scrollRef}>
        {clients.map(client => (
          <article className="client-card" key={client.name}>
            <div className="client-logo-wrapper">
              <img src={client.logo} alt={client.name} />
            </div>
            <div className="client-info">
              <h3>{client.name}</h3>
              <p>{client.description}</p>
              <a href={client.url} target="_blank" rel="noreferrer" className="client-link">Conocer caso →</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function WhyUs() {
  return <section className="why section"><div className="section-heading reveal"><p className="eyebrow">Por qué Action Fintech</p><h2>Diseñada para evolucionar.<br />Preparada para operar.</h2></div><div className="reasons reveal">{reasons.map(([n,title,desc])=><article key={n}><span>{n}</span><h3>{title}</h3><p>{desc}</p></article>)}</div></section>;
}

function Contact() {
  useEffect(() => {
    const scriptId = "leadconnector-form-embed";
    if (document.getElementById(scriptId)) return;

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return <section className="contact section" id="contacto">
    <div className="contact-copy reveal"><p className="eyebrow">Contacto</p><h2>Su negocio no debería adaptarse a las limitaciones de su software.</h2><p className="contact-description">Construyamos una infraestructura financiera que pueda evolucionar con él.</p><ContactDetails/></div>
    <div className="contact-form contact-form--crm reveal"><iframe src="https://api.leadconnectorhq.com/widget/form/ks3XvcUDjQkggdVqgiT5" id="inline-ks3XvcUDjQkggdVqgiT5" data-layout="{'id':'INLINE'}" data-trigger-type="alwaysShow" data-trigger-value="" data-activation-type="alwaysActivated" data-activation-value="" data-deactivation-type="neverDeactivate" data-deactivation-value="" data-form-name="Form Contacto Web Action Fintech" data-height="468" data-layout-iframe-id="inline-ks3XvcUDjQkggdVqgiT5" data-form-id="ks3XvcUDjQkggdVqgiT5" title="Form Contacto Web Action Fintech" /></div>
  </section>;
}

function ContactDetails() {
  return <div className="contact-details" aria-label="Datos de contacto">
      <article><p className="eyebrow">Teléfono</p><a href="tel:+541178268352">+54 11 7826-8352</a><span>Atención comercial</span></article>
      <article><p className="eyebrow">Email</p><a href="mailto:ventas@actionfintech.com">ventas@actionfintech.com</a><span>Consultas y proyectos</span></article>
      <article><p className="eyebrow">Redes sociales</p><div className="contact-socials"><a href="https://www.linkedin.com/company/actionfintech/" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a><a href="https://www.instagram.com/actionfintech/" target="_blank" rel="noreferrer">Instagram <span aria-hidden="true">↗</span></a><a href="https://wa.me/5491178268352" target="_blank" rel="noreferrer">WhatsApp <span aria-hidden="true">↗</span></a></div></article>
    </div>;
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>Infraestructura financiera modular para operaciones reales.</p>
          <div className="footer-group">
            <span>Empresas del Grupo</span>
            <div className="footer-group-logos">
              <img src="/assets/innovactionGroup.png" alt="Innovaction Group" />
              <img src="/assets/LogoDappsFactory.png" alt="Dapps Factory" />
            </div>
          </div>
        </div>
        <div className="footer-nav">
          <h3>Soluciones</h3>
          <a href="/soluciones/wallet-digital">Wallet digital</a>
          <a href="/soluciones/pagos">Pagos cross-border</a>
          <a href="/soluciones/creditos-digitales">Créditos digitales</a>
          <a href="/soluciones/pagos-masivos-cripto">Pagos masivos en cripto</a>
        </div>
        <div className="footer-nav">
          <h3>Compañía</h3>
          <a href="/#plataforma">Plataforma</a>
          <a href="/#integraciones">Integraciones</a>
          <a href="/#nosotros">Nosotros</a>
          <a href="/blog">Blog</a>
          <a href="/#contacto">Contacto</a>
        </div>
        <div className="footer-nav">
          <h3>Conectar</h3>
          <a href="https://www.linkedin.com/company/actionfintech/" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
          <a href="https://www.instagram.com/actionfintech/" target="_blank" rel="noreferrer">Instagram <span aria-hidden="true">↗</span></a>
          <a href="https://wa.me/5491178268352" target="_blank" rel="noreferrer">WhatsApp <span aria-hidden="true">↗</span></a>
          <a href="mailto:ventas@actionfintech.com">Email <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <div className="footer-bottom">
        <small>© 2026 Action Fintech. Todos los derechos reservados.</small>
        <div className="footer-legal">
          <a href="/terminos#politica-de-privacidad">Privacidad</a>
          <a href="/terminos">Términos</a>
        </div>
      </div>
    </footer>
  );
}

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Mostrar cuando baja 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  if (!isVisible) return null;

  return (
    <button 
      onClick={scrollToTop} 
      className="scroll-to-top"
      aria-label="Volver arriba"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19V5M5 12l7-7 7 7"/>
      </svg>
    </button>
  );
}

export function App(){
  usePointerMotion();
  const path = window.location.pathname.replace(/\/$/, "");
  const product = products[path]; 
  useEffect(()=>{const observer=new IntersectionObserver(entries=>entries.forEach(e=>e.isIntersecting&&e.target.classList.add("is-visible")),{threshold:.12});document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));return()=>observer.disconnect()},[]);
  
  if(product) return <ProductLanding product={product}/>; 
  if(path === "/links") return <LinksLanding/>;
  if(path === "/blog") return <><Header/><BlogLanding/><Footer/></>;
  if(path.startsWith("/blog/")) return <><Header/><BlogPost blogId={path.split("/blog/")[1]}/><Footer/></>;
  if(path === "/terminos") return <><Header/><Terms/><Footer/><ScrollToTopButton/></>;
  
  return <><Header/><main><Hero/><Solutions/><Ecosystem/><Architecture/><Integrations/><MatureModules/><Experience/><WhyUs/><Contact/></main><Footer/><ScrollToTopButton/></>
}

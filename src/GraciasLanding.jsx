import { useEffect } from "react";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export function GraciasLanding() {
  useEffect(() => {
    document.title = "Gracias por contactarnos | Action Fintech";
  }, []);

  return (
    <main>
      <section className="product-hero section" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ marginBottom: '24px', color: 'var(--brand)' }}>
          <CheckCircle2 size={48} strokeWidth={2} />
        </div>
        <p className="eyebrow">Mensaje enviado</p>
        <h1>Gracias por<br/><span>contactarnos.</span></h1>
        <p className="product-description" style={{ maxWidth: '600px' }}>
          Hemos recibido su información correctamente. Nuestro equipo revisará los detalles y un especialista se pondrá en contacto con usted a la brevedad para agendar su diagnóstico.
        </p>
        <div className="actions" style={{ marginTop: '32px' }}>
          <a className="button" href="/">
            <ArrowLeft size={16} strokeWidth={2.5} style={{ marginRight: '8px' }} />
            Volver al inicio
          </a>
        </div>
      </section>
    </main>
  );
}

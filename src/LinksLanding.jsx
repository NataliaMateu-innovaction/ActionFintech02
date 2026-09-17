import { useEffect } from "react";
import { Globe, Calendar, Wallet, ArrowRightLeft, Coins, FileText } from "lucide-react";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";

export function LinksLanding() {
  useEffect(() => {
    document.title = "Action Fintech | Links";
    // Force a specific background color for the body when on this page
    const originalBackground = document.body.style.background;
    document.body.style.background = "#f4f6fa"; // match the --soft color
    return () => {
      document.body.style.background = originalBackground;
    };
  }, []);

  const links = [
    { label: "WhatsApp Horacio Lampe", url: "https://wa.me/5491153290792", icon: <FaWhatsapp size={20} /> },
    { label: "PRESENTACIÓN ACTION FINTECH 2026", url: "https://canva.link/actionfintech-2026", icon: <FileText size={20} strokeWidth={2.5} /> },
    { label: "Sitio Web Action Fintech | Core Bancario", url: "https://www.actionfintech.com/", icon: <Globe size={20} strokeWidth={2.5} /> },
    { label: "Instagram Action Fintech", url: "https://www.instagram.com/actionfintech", icon: <FaInstagram size={20} /> },
    { label: "PRESENTACIÓN DAPPSFACTORY 2026", url: "https://canva.link/dappsfactory-2026", icon: <FileText size={20} strokeWidth={2.5} /> },
    { label: "Sitio Web DappsFactory | RWA y Blockchain", url: "https://dappsfactory.io", icon: <Globe size={20} strokeWidth={2.5} /> },
    { label: "Instagram DappsFactory", url: "https://www.instagram.com/dappsfactory/", icon: <FaInstagram size={20} /> },
  ];

  const socialLinks = []; // Empty, as we put them all in the main list to show their text labels

  return (
    <div className="links-page">
      <div className="links-container">
        <div className="links-header">
          <div className="links-avatar-wrapper">
            <img src="/assets/LogoDappsFactory.png" alt="DappsFactory Logo" className="links-logo" />
            <img src="/assets/innovactionGroup.png" alt="Innovaction Group Logo" className="links-logo mother-logo" />
            <img src="/assets/action-fintech-logo.png" alt="Action Fintech Logo" className="links-logo" />
          </div>
          <h1>Innovaction Group</h1>
          <p>Tecnología para transformar negocios.<br/>Fintech, Blockchain, IA e integraciones para empresas en LATAM.</p>
        </div>
        
        <div className="links-list">
          {links.map((link, i) => (
            <a key={i} href={link.url} className="link-button">
              <span className="link-icon-wrapper">{link.icon}</span>
              <span className="link-text">{link.label}</span>
            </a>
          ))}
        </div>

        <div className="social-links-list">
          {socialLinks.map((link, i) => (
            <a key={i} href={link.url} className="social-icon-button" aria-label={link.label} target="_blank" rel="noopener noreferrer">
              <span>{link.icon}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

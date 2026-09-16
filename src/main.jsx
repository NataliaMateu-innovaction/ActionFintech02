import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import "./styles.css";
import "./motion.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <a className="whatsapp-floating" href="https://wa.me/5491178268352" target="_blank" rel="noopener noreferrer" aria-label="Contactar a Action Fintech por WhatsApp (abre en otra pestaña)" title="Escribinos por WhatsApp">
      <img src="/assets/whatsapp.svg" alt="" width="30" height="30" />
    </a>
  </React.StrictMode>,
);

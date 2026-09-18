# Prototype Instructions

Do not show floating APIs, Payments, or Lending labels over the main hero video; keep the video clear of those overlays.

Keep the main hero video frame stationary: no CSS zoom, float, or translation on the video. The user noticed vibration and wants a stable frame while the video plays.

Use subtle mouse-responsive depth and lighting on product images/cards to avoid a flat appearance. Keep text readable and navigation stable; enable pointer motion only for fine pointers with hover, and disable animation when reduced motion is requested.

Product landings should include purpose-made imagery to break up text. The user prioritizes visual quality and prefers waiting for generation availability over reusing the home hero as a makeshift substitute. Use the dedicated wallet, payments, and credit illustrations in public/assets with their full composition preserved and responsive placement beside/below hero copy.

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

## Product navigation
On desktop, keep the home contact copy/details column and CRM form visually equal in height. Use a compact headline and spacing, with social links aligned near the form bottom; stack naturally on mobile.
Official Instagram: https://www.instagram.com/actionfintech/. Show a fixed, always-visible WhatsApp icon linking to https://wa.me/5491178268352 on home and every product landing, including mobile.
Keep home contact details (phone, email, LinkedIn and WhatsApp) beneath the contact headline and supporting copy in the left column beside the CRM form, rather than in a separate full-width row, to keep the page compact.

Each product in the solutions section (Wallet digital, Pagos cross-border, Créditos digitales) must have a button linking to its own dedicated landing page. Preserve the site's current visual style across these pages.

## Wallet landing content
The Wallet digital landing uses the complete Spanish copy supplied by the user on 2026-09-14, including all 16 integration capabilities, fiat + crypto, regional markets, the four-layer architecture, four implementation stages, target audiences, and closing positioning. Primary CTA: Agendar un diagnóstico. Closing CTA: Hablemos de su proyecto. Both link to the existing contact section. Preserve qualifiers about providers and market-specific availability.

## Payments landing content
The Pagos cross-border landing uses the user's full supplied Spanish copy, stored in src/payments-content.json, with a LATAM-China focus. Preserve all 16 integrations, provider and regulatory conditions, and the distinction that Action Fintech supplies technology and is not a bank, exchange house, or remittance provider. CTAs: Agendar un diagnóstico and Analizar mi operación cross-border, linked to the existing contact section.

## Credit landing content
The Créditos digitales landing uses the complete Spanish copy supplied by the user, stored in src/credit-content.json. Preserve all eight credit lifecycle stages, onboarding, scoring example, core, disbursements, collection, CRM, automation and AI, reporting, modular architecture, verticals and experience. CTAs: Agendar un diagnóstico and Analizar mi operación de crédito; both link to the existing contact section.

## Crypto bulk payments landing
The fourth home solution is `Pagos Masivos en Cripto`. Keep its home card concise: multiple digital-asset transfers, automated and at scale. Its dedicated landing expands the user-supplied positioning: high-speed enterprise infrastructure for large transaction volumes, centralized payment management, automated blockchain execution, fewer manual processes, and use cases including users, suppliers, partners and fund distribution. CTA: `Quiero conocer la solución`, linked to the existing contact section.

## Innovaction Group landing
Build the parent-company website in a separate `innovactionGroup/` directory within this project, as requested by the user. The confirmed public brand name is `Innovaction Group`. The final domain is `innovaction.com.ar`; the user identified `https://innovaction.com.ar/index.html` as the final website location. Do not use `innovactiongroup.com.ar`. These name and domain decisions were confirmed on 2026-09-17. Other marketing details remain pending confirmation.
The user confirmed the founding dates: Innovaction in 2002, Action Fintech in 2016, and DAppsFactory in 2020. International experience means clients and projects developed in Latin America and the United States; it does not establish offices or a physical presence there. Approved factual wording: `Clientes y proyectos en Latinoamérica y Estados Unidos`.
The latest user clarification supersedes the earlier business-unit wording: publicly present Action Fintech and DappsFactory as `empresas de Innovaction Group`, retaining their own identities. They are the commercial and visual protagonists. Present the group, its history, and these companies first.
Innovaction directly offers three complementary capabilities: custom AI development adapted to business processes, MuleSoft integrations (systems, applications, APIs and data), and dedicated technology teams. Describe these briefly; AI is not a third company or unit. Do not create separate service landings.
Audience: medium and large companies, financial institutions, and organizations modernizing infrastructure, integrating systems, or automating operations. Attribute any case, membership, association, or accreditation to the correct group company; publish only confirmed evidence.
General Innovaction Group commercial phone: +54 11-7079-2777 (`tel:+541170792777`). Use this general contact for routing inquiries. Use the current group logo prominently alongside the two company logos and links to their websites. Commercial presentation files have not yet been provided; do not invent links. Do not infer WhatsApp availability from this phone number.

Use the user-supplied innovactionGroup/logo_dark-original.svg for the DappsFactory logo on the dark company panel. Keep its wrapper transparent, without a white box.

Use the user-supplied `innovactionGroup/public/assets/video_hero.mp4` as the Innovaction Group hero video. Keep the video frame stationary and use `innovaction-hero.png` as its poster/fallback. Use the original company imagery `action-fintech-hero.png` and `dapss-hero.jpg` in the Action Fintech and DappsFactory company panels.


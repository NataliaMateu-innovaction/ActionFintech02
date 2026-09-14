# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

## Product navigation
Each product in the solutions section (Wallet digital, Pagos cross-border, Créditos digitales) must have a button linking to its own dedicated landing page. Preserve the site's current visual style across these pages.

## Wallet landing content
The Wallet digital landing uses the complete Spanish copy supplied by the user on 2026-09-14, including all 16 integration capabilities, fiat + crypto, regional markets, the four-layer architecture, four implementation stages, target audiences, and closing positioning. Primary CTA: Agendar un diagnóstico. Closing CTA: Hablemos de su proyecto. Both link to the existing contact section. Preserve qualifiers about providers and market-specific availability.

## Payments landing content
The Pagos cross-border landing uses the user's full supplied Spanish copy, stored in src/payments-content.json, with a LATAM-China focus. Preserve all 16 integrations, provider and regulatory conditions, and the distinction that Action Fintech supplies technology and is not a bank, exchange house, or remittance provider. CTAs: Agendar un diagnóstico and Analizar mi operación cross-border, linked to the existing contact section.

## Credit landing content
The Créditos digitales landing uses the complete Spanish copy supplied by the user, stored in src/credit-content.json. Preserve all eight credit lifecycle stages, onboarding, scoring example, core, disbursements, collection, CRM, automation and AI, reporting, modular architecture, verticals and experience. CTAs: Agendar un diagnóstico and Analizar mi operación de crédito; both link to the existing contact section.

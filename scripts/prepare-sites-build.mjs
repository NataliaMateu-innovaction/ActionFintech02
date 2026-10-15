#!/usr/bin/env node
import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const index = path.join(dist, "client", "index.html");
const worker = path.join(root, "worker", "index.js");
const hosting = path.join(root, ".openai", "hosting.json");

for (const file of [index, worker, hosting]) {
  if (!existsSync(file)) throw new Error("Missing Sites build input: " + file);
}

mkdirSync(path.join(dist, "server"), { recursive: true });
mkdirSync(path.join(dist, ".openai"), { recursive: true });

const creditRoute = path.join(dist, "client", "soluciones", "creditos-digitales");
const creditUrl = "https://actionfintech.com/soluciones/creditos-digitales";
const creditImage = "https://actionfintech.com/assets/credit-illustration.png";
let creditHtml = readFileSync(index, "utf8");

const replacements = [
  [/<title>.*?<\/title>/, "<title>Créditos digitales | Action Fintech</title>"],
  [/<meta name="description" content="[^"]*"\s*\/>/, '<meta name="description" content="Digitalice toda su operación de crédito con Mifos X, Apache Fineract, canales digitales, automatización e integraciones." />'],
  [/<link rel="canonical" href="[^"]*"\s*\/>/, `<link rel="canonical" href="${creditUrl}" />`],
  [/<meta property="og:url" content="[^"]*"\s*\/>/, `<meta property="og:url" content="${creditUrl}" />`],
  [/<meta property="og:title" content="[^"]*"\s*\/>/, '<meta property="og:title" content="Digitalice toda su operación de crédito | Action Fintech" />'],
  [/<meta property="og:description" content="[^"]*"\s*\/>/, '<meta property="og:description" content="Core financiero + canales digitales + integraciones en una misma arquitectura." />'],
  [/<meta property="og:image" content="[^"]*"\s*\/>/, `<meta property="og:image" content="${creditImage}" />`],
  [/<meta property="og:image:secure_url" content="[^"]*"\s*\/>/, `<meta property="og:image:secure_url" content="${creditImage}" />`],
  [/<meta property="og:image:alt" content="[^"]*"\s*\/>/, '<meta property="og:image:alt" content="Arquitectura conectada para una operación de crédito digital" />'],
  [/<meta name="twitter:url" content="[^"]*"\s*\/>/, `<meta name="twitter:url" content="${creditUrl}" />`],
  [/<meta name="twitter:title" content="[^"]*"\s*\/>/, '<meta name="twitter:title" content="Digitalice toda su operación de crédito | Action Fintech" />'],
  [/<meta name="twitter:description" content="[^"]*"\s*\/>/, '<meta name="twitter:description" content="Core financiero + canales digitales + integraciones en una misma arquitectura." />'],
  [/<meta name="twitter:image" content="[^"]*"\s*\/>/, `<meta name="twitter:image" content="${creditImage}" />`],
  [/<meta name="twitter:image:alt" content="[^"]*"\s*\/>/, '<meta name="twitter:image:alt" content="Arquitectura conectada para una operación de crédito digital" />'],
];

for (const [pattern, value] of replacements) creditHtml = creditHtml.replace(pattern, value);
mkdirSync(creditRoute, { recursive: true });
writeFileSync(path.join(creditRoute, "index.html"), creditHtml);

copyFileSync(worker, path.join(dist, "server", "index.js"));
copyFileSync(hosting, path.join(dist, ".openai", "hosting.json"));

console.log("Prepared Sites build: dist/server/index.js and dist/.openai/hosting.json");

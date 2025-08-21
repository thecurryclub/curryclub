// fetch-images.mjs
// Usage: node fetch-images.mjs images-manifest.json
// Note: Ensure you have network access and `npm i node-fetch@3` installed.

import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';

const manifestPath = process.argv[2] || 'images-manifest.json';
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
const outDir = path.join('public', 'images', 'products');
fs.mkdirSync(outDir, { recursive: true });

function pickBest(urls) {
  // prefer direct CDN links (images.unsplash.com / images.pexels.com)
  for (const u of urls) {
    if (/images\.unsplash\.com|images\.pexels\.com/.test(u)) return u;
  }
  // fallback to first page URL (may not download)
  return urls[0];
}

for (const item of manifest.items) {
  const file = path.join(outDir, `${item.slug}.webp`);
  if (!item.suggested_urls?.length) {
    console.warn(`Skipping ${item.name} — no suggested_urls`);
    continue;
  }
  const url = pickBest(item.suggested_urls);
  console.log(`Downloading ${item.name} -> ${file}\n  ${url}`);
  const res = await fetch(url);
  if (!res.ok) {
    console.error(`Failed: ${res.status} ${res.statusText}`);
    continue;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(file, buf);
}
console.log('Done.');

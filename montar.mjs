/* Ensamblador de Apaño: cuerpos/*.html + partes/ → páginas completas */
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const raiz = dirname(fileURLToPath(import.meta.url));
const cab = readFileSync(join(raiz, 'partes/cab.html'), 'utf8').trim();
const pie = readFileSync(join(raiz, 'partes/pie.html'), 'utf8').trim();
const FUENTES = '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n'
  + '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500..800&family=Inter:wght@400;500;600;700&display=swap">\n'
  + '<link rel="stylesheet" href="base.css">';
const SCRIPTS = '<script src="datos.js"></script>\n<script src="app.js"></script>';

const ficheros = readdirSync(join(raiz, 'cuerpos')).filter(f => f.endsWith('.html')).sort();
const informe = [];
for (const f of ficheros) {
  const bruto = readFileSync(join(raiz, 'cuerpos', f), 'utf8');
  const m = bruto.match(/^\s*<!--\s*titulo:\s*([^|]+?)\s*\|\s*desc:\s*([^>]*?)\s*-->/);
  const titulo = m ? m[1].trim() : f.replace('.html', '');
  const desc = m ? m[2].trim() : '';
  const cuerpo = (m ? bruto.slice(m[0].length) : bruto).trim();
  const tras = cuerpo.replace(/^<style[\s\S]*?<\/style>\s*/i, '');
  if (!/^<main[\s>]/.test(tras)) informe.push(`AVISO  ${f}: no empieza por <main>`);
  if (/<!doctype|<html|<head>|<body>/i.test(cuerpo)) informe.push(`AVISO  ${f}: contiene esqueleto propio`);
  const hex = cuerpo.replace(/(href|aria-controls|id|for|data-[a-z-]+)="#?[^"]*"/g, '').replace(/['"`]#[a-zA-Z][\w-]*/g, '')
    .match(/#[0-9a-fA-F]{3,8}\b/g);
  if (hex) informe.push(`AVISO  ${f}: color(es) literal(es) ${[...new Set(hex)].slice(0, 6).join(' ')}`);

  let salida;
  if (f === 'index.html') {
    salida = [`<title>${titulo}</title>`, '<meta name="claude:viewport-fit-sides" content="cover">', FUENTES, SCRIPTS, cab, cuerpo, pie].join('\n');
    writeFileSync(join(raiz, 'vista-index.html'),
      '<!doctype html>\n<html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">'
      + '<style>:root{color-scheme:light}body{margin:0}[hidden]{display:none!important}</style></head>\n<body>\n' + salida + '\n</body></html>\n');
  } else {
    salida = ['<!doctype html>', '<html lang="es">', '<head>', '<meta charset="utf-8">',
      '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">',
      `<title>${titulo} · Apaño</title>`, desc ? `<meta name="description" content="${desc.replace(/"/g, '&quot;')}">` : '',
      FUENTES, SCRIPTS, '</head>', '<body>', cab, cuerpo, pie, '</body>', '</html>'].filter(Boolean).join('\n');
  }
  writeFileSync(join(raiz, f), salida + '\n');
  informe.push(`ok     ${f.padEnd(18)} ${String(salida.split('\n').length).padStart(5)} líneas  ${titulo}`);
}
const paginas = new Set(ficheros);
for (const f of ficheros) {
  const txt = readFileSync(join(raiz, f), 'utf8');
  const rotos = [...new Set([...txt.matchAll(/href="([^"#?:]+\.html)/g)].map(x => x[1]))].filter(h => !paginas.has(h));
  if (rotos.length) informe.push(`ROTO   ${f}: enlaza a ${rotos.join(', ')}`);
}
console.log(informe.join('\n'));
console.log(`\n${ficheros.length} páginas montadas.`);

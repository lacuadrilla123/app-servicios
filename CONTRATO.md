# CONTRATO DE CONSTRUCCIÓN — «Apaño» (rediseño completo)

## Qué es
**Apaño** es una app web de **servicios entre personas** al estilo de **Wallapop o Vinted**, pero para servicios de todo tipo (electricista, paseo de perros, clases, mudanzas, peluquería a domicilio, cuidado de mayores, diseño…). Particulares y profesionales publican anuncios; otros los contratan y pagan con **Pago protegido** (el dinero se retiene hasta que el cliente confirma que el servicio se ha hecho).

El cliente rechazó la versión anterior por parecer «una web de mierda». Esta tiene que parecer **una app de consumo de primera**: visual, táctil, rápida, con mucho mimo en el detalle. Piensa en Wallapop, Vinted, Airbnb: fichas con imagen grande, redondeados, botones tipo píldora, hojas deslizantes en móvil, microinteracciones. **Primero el móvil** (390 px), luego escritorio.

## Requisito legal y de producto que manda sobre todo lo demás
**Nadie menor de 18 años puede usar Apaño.**
- La primera visita muestra una **puerta de edad** (ya la pinta `app.js`; tú no la toques).
- Para **escribir, publicar o pagar** hay que estar **dado de alta y con la identidad verificada** con DNI, NIE o pasaporte y selfie. Usa siempre `A.exige('contactar'|'publicar'|'pagar')` antes de esas acciones (devuelve `false` y abre la hoja que explica qué falta), o pon `data-exige="contactar"` en el botón o enlace.
- Mirar anuncios y guardar favoritos sí se puede sin cuenta.
- En todo texto que lo mencione: solo mayores de 18, documento verificado, nunca se publica el número del documento, el documento solo lo ve el equipo de verificación.

## Lo que escribes
Solo el **fragmento de cuerpo** en `cuerpos/<nombre>.html`:
1. Primera línea: `<!-- titulo: Título corto | desc: Una frase de descripción -->`
2. Opcional: **un** `<style>` con clases prefijadas por tu página (`.pg-buscar-…`, `.pg-reg-…`).
3. `<main id="contenido">` … `</main>` — obligatorio, con `id="contenido"`.
4. Opcional: **un** `<script>` al final que defina `A.pagina = function(){ … }`. `app.js` lo llama al arrancar con los datos cargados. No uses `DOMContentLoaded`.
Nada de `<!doctype>`, `<html>`, `<head>`, `<body>`, cabecera, barra inferior ni pie: los pone el ensamblador (`partes/cab.html` y `partes/pie.html`; léelos para saber qué hay ya).

## Reglas duras
1. **Usa `base.css`**, no lo modifiques. Colores SIEMPRE con variables (`var(--marca)`, `var(--sup)`, `var(--tinta-2)`…). Ningún hex literal en tu CSS o HTML (los únicos colores literales permitidos son los `c1`/`c2`/`av` que ya vienen en `datos.js`).
2. **Nada externo**: ni imágenes de internet, ni fuentes, ni librerías, ni fetch. Iconos: `A.icono(nombre)` / `A.icCat(categoria)` o `<svg>` inline con `stroke="currentColor"`. **Nunca emojis como iconos.**
3. **Imágenes de anuncios**: usa SIEMPRE `A.portada(anuncio)` (portada ilustrada; mañana puede ser foto real y no tendrás que cambiar nada). Para las fichas de listado usa `A.tarjeta(anuncio)` tal cual dentro de un contenedor `.anuncios` o `.carril`.
4. **Responsive**: nada se desborda a 375 px. Tablas dentro de `.tabla-env`. En móvil hay barra inferior fija (`.tabbar`, 64 px): no tapes contenido; los botones fijos inferiores propios deben ir por encima de ella (`bottom: calc(var(--barra) + env(safe-area-inset-bottom,0px))` solo en `max-width:860px`).
5. **Visible al cargar**: nada queda en `opacity:0` esperando scroll. Para revelados usa la clase `rev`.
6. **Transiciones cuidadas**: hover, pulsación (`:active` con `scale`), cambios de paso, aparición de paneles, `var(--ease)`. Respeta `prefers-reduced-motion` (ya hay regla global). Nada en bucle salvo el `.esqueleto` de carga.
7. **Accesible**: `<button>` para acciones, `<a href>` para navegar, `aria-label` en botones de solo icono, `label` con `for` en cada campo, `aria-invalid` en errores.
8. **Formularios**: nada sale de la página. Todo `submit` con `preventDefault()`. Los pagos son simulados y debe decirse.
9. **Contenido real**: usa `datos.js`. Español de España, tono cercano pero claro, como una app buena (tuteo). Nada de «lorem ipsum». Importes coherentes al céntimo.
10. Correos y webs inventados acaban en `.example`. No uses nombres de empresas reales.

## Componentes que YA existen (úsalos)
- Estructura: `.contenedor` (+`.estrecho` `.medio`), `.seccion`, `.col`, `.fila`, `.g4…g32`, `.crecer`, `.min0`, `.entre`, `.rejilla .r2 .r3 .r4`, `.con-lateral` (contenido + lateral 360 px), `.con-lateral-izq` (lateral 260 px + contenido), `.pegajoso`, `.separador`
- Listados: `.anuncios` (rejilla 2→3→4 columnas; `.anuncios.anchos` llega a 5), `.carril` (fila deslizable en móvil), `.cats` + `.cat` + `.cat-ico` (tira de categorías con icono)
- Tipografía: `.titular .h1 .h2 .h3`, `.sec .ter`, `.xs .sm .md .lg`, `.negrita .gruesa`, `.cifra`, `.num`, `.etiqueta`, `.entradilla`, `.recorte` (+`.recorte-1/-3`), `.enlace`, `.cabecera-seccion`
- Botones: `.btn` (+`.btn-sec .btn-suave .btn-tinta .btn-sol .btn-peligro .btn-p .btn-g .btn-bloque`), `.ico-btn`
- Distintivos: `.insignia` (+`-marca -ok -avisa -mal -sol -tinta`)
- Avatar: `A.avatar(usuario, 'avatar-p'|'avatar-g'|'avatar-xg')` — lleva el tick verde si la identidad está verificada
- Tarjeta de anuncio: `A.tarjeta(anuncio)`; portada: `A.portada(anuncio, {texto:true})` dentro de un contenedor con `position:relative` y tamaño (la portada es `position:absolute; inset:0` dentro de `.tarjeta-img`; fuera de ella dale tú tamaño con un envoltorio `aspect-ratio`)
- Bloques: `.bloque` (+`.bloque-sup .bloque-marca .bloque-sombra`)
- Avisos: `.aviso` (+`-marca -ok -avisa -mal`)
- Formularios: `.campo`, `.ent` (input/select/textarea de 50 px), `.ayuda`, `.error`, `.opcion` (radio/checkbox en caja), `.casilla` (checkbox con texto), `.interruptor` (con `role="switch" aria-checked` y opcional `data-conmuta="Nombre"`), `.seg` (control segmentado, botones con `aria-pressed`), `.subida` (zona de arrastrar archivos)
- Chips: `.chips` > `.chip` (`aria-pressed`)
- Pestañas: `<div class="pestanas" data-pestanas>` con `<button class="pestana" role="tab" aria-controls="ID" aria-selected>`; paneles `<div id="ID" role="tabpanel">`. Los gestiona `app.js` (ids `[a-z0-9-]+`, se reflejan en el hash). Si las creas por JS, llama luego a `A.pestanas(raiz)`.
- Progreso por pasos: `<div class="progreso"><span class="hecho"></span><span class="activo"></span><span></span></div>`
- Acordeón: `<details class="acordeon"><summary>Pregunta</summary><div class="acordeon-cuerpo">…</div></details>`
- Tablas: `.tabla-env` > `table.tabla` (celda numérica `.der`)
- Carga: `.esqueleto`
- Revelado: `.rev`

## API de `app.js` (cargado antes que tu script)
- `A.$`, `A.$$`
- Formatos: `A.eur(n)`, `A.eur0(n)`, `A.num(n)`, `A.fecha(iso)`, `A.fechaCorta(iso)`, `A.hora(iso)`, `A.hace(iso)`, `A.km(km)`, `A.precio(a)` (HTML con `<small>`), `A.precioTxt(a)` (texto plano)
- Iconos: `A.icono('corazon'|'buzon'|'lupa'|'mas'|'casa'|'persona'|'escudo'|'check'|'ubicacion'|'estrella'|'cerrar'|'luna', tamaño)`, `A.icCat(idCategoria, tamaño)`, `A.estrellas(4.8, tamaño)`
- `A.avatar(u, clase)`, `A.portada(a, {texto})`, `A.tarjeta(a)`, `A.verificado(u)`
- Favoritos: `A.favs()`, `A.esFav(id)`; cualquier botón con `data-fav="sX"` alterna favorito solo (y sincroniza todos los botones del mismo anuncio)
- Avisos: `A.avisa('texto')`, `A.avisa('texto','mal')`; atributo `data-avisa="texto"`; `data-copia="texto"`
- Diálogo / hoja inferior en móvil: `A.dialogo(html, {ancho, alAbrir:(capa,cerrar)=>{}})`; dentro usa `<div class="dialogo-cuerpo">`; cierra con `[data-cerrar]`, Esc o tocando fuera; `A.cerrarDialogo()`
- Sesión: `A.sesion()` (usuario o `null`), `A.perfil()`, `A.PERFILES`, `A.cambiaPerfil(id)`, `A.abreCuenta()`
- Permisos: `A.puede('contactar'|'publicar'|'pagar'|'favoritos'|'moderar'|'admin'|'cuenta')`, `A.exige(accion)`; atributos `data-exige="publicar"`, `data-solo="moderar"` (elimina el nodo si no puede) y `data-rol="moderador,admin"` (elimina si el rol no está; sin sesión el rol es `anonimo`)
- Persistencia: `A.guarda(k,v)`, `A.lee(k,def)`, `A.borra(k)` (localStorage tolerante)
- Validaciones: `A.docValido(dni|nie)` (letra de control real), `A.pasaporteValido`, `A.emailValido`, `A.movilValido`, `A.ibanValido` (módulo 97), `A.tarjetaPago.formatea/marca/luhn/limpia` (tarjeta bancaria; no confundir con `A.tarjeta`, que es la ficha de anuncio), `A.edad(nacISO)` (edad a 17/11/2026)
- Contratación: `A.pedido.leer()` → `{s, cantidad, extra, fecha, nota}`, `A.pedido.guardar(p)`, `A.pedido.calcula(p)` → `{a, base, prot, total}` (Pago protegido = 5 % + 0,99 €)
- `A.errores` (array de errores capturados)

## Datos (`datos.js`, global `A`)
`A.HOY` = '2026-11-17' · `A.CATEGORIAS` (15: id, n, c1, c2, sub[]) · `A.ICONOS` · `A.USUARIOS` (id, n, corto, tipo particular|profesional|interno, rol usuario|moderador|admin, av, nac, doc, docNum, ciudad, barrio, km, alta, estado verificado|pendiente, ver{email,tel,dni,selfie}, val, resenas, hechos, responde, bio, idiomas[]) · `A.ANUNCIOS` (30: id, t, u, cat, sub, precio, unidad, estado activo|pausado, dest, urg, fecha, vistas, favs, modo, desc, incluye[], dispo, zona) · `A.RESENAS` (a, de, s, nota, f, t) · `A.CHATS` (del usuario u1: con, s, rolYo, sinLeer, ult, estado, msgs[{de:'yo'|'ella'|'él'|'sistema', tipo:'txt'|'oferta'|'reserva', t, importe, concepto, h}]) · `A.PEDIDOS` · `A.MONEDERO` · `A.VERIFICACIONES` (cola de DNI con `senales[{t:'ok'|'avisa'|'mal', m}]`) · `A.REPORTES` · `A.ACTIVIDAD`
Destacados y Pro: `A.DESTACADOS` (4 opciones: id, n, precio, dias, efecto, multi, sitios[], popular) · `A.BOOSTS` (destacados activos/terminados con impresiones, visitas, contactos y `antes`) · `A.SERIE_S3` (visitas diarias) · `A.PRO` (precioMes, precioAnio, incluye[], limitesParticular) · `A.NOTIFICACIONES` (tipo, t, d, f, leida, enlace)
Atajos: `A.usuario(id)`, `A.anuncio(id)`, `A.categoria(id)`, `A.anunciosDe(uid)`, `A.activos()`, `A.resenasDe(uid)`, `A.edad(nac)`
**Nunca muestres `docNum` completo en páginas públicas.** En la cuenta del propio usuario o en moderación, enmascarado: `43•••••6N`.

## Páginas (para enlazar entre ellas)
`index.html` · `buscar.html` (admite `?q=` y `?cat=`) · `anuncio.html?id=s1` · `perfil.html?id=u2` · `subir.html` · `chat.html` (admite `?c=c1` o `?con=u3&s=s5`) · `favoritos.html` · `servicios.html` (mis contrataciones y mis ventas) · `pago.html` (contratar con Pago protegido) · `monedero.html` · `registro.html` · `entrar.html` · `cuenta.html` (anclas `#perfil #verificacion #seguridad #notificaciones #privacidad`) · `admin.html` (moderación) · `destacar.html?id=s3` (comprar y seguir destacados de un anuncio propio) · `pro.html` (suscripción Apaño Pro) · `notificaciones.html` · `ayuda.html` (anclas `#seguridad #reportar`) · `como-funciona.html` (anclas `#verificacion #pago`) · `legal.html` (anclas `#condiciones #privacidad #identidad #cookies`) · `404.html`

## Calidad que se espera
El cliente es **diseñador**. Mira composición, ritmo, jerarquía y detalle. Densidad de app buena: nada de huecos enormes ni de bloques todos iguales. Jerarquía clara: precio y título mandan en una ficha; la acción principal es una píldora grande y obvia. Usa la marca (violeta) con intención y el amarillo solo para destacar. En móvil, las acciones principales al alcance del pulgar.
Comprueba tu trabajo en el navegador: hay un servidor en `http://127.0.0.1:8899/` que sirve esta carpeta. Ejecuta `node montar.mjs` en la carpeta para regenerar las páginas (es inocuo: reconstruye todas a partir de `cuerpos/`) y abre tu página. El navegador cachea `app.js`/`base.css`: si no ves cambios, recarga con `?r=` y un número. Prueba también el JS con `node --check` sobre un temporal que borres después. **Abre siempre una pestaña propia del navegador, no cambies el tamaño de las de otros y cierra la tuya al terminar.** No modifiques `base.css`, `app.js`, `datos.js` ni `partes/`: si necesitas algo de ahí, dilo en tu informe final.

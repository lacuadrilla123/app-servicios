/* APAÑO — núcleo compartido: puerta de edad, sesión y permisos, componentes, avisos, utilidades */
(function(){
  const A = window.A = window.A || {};
  const $  = (s,r)=> (r||document).querySelector(s);
  const $$ = (s,r)=> Array.from((r||document).querySelectorAll(s));
  A.$ = $; A.$$ = $$;
  const quieto = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- registro de errores ---------- */
  A.errores = [];
  addEventListener('error', e => { A.errores.push((e.message||'error') + ' @' + (e.lineno||'?')) });

  /* ---------- almacén tolerante ---------- */
  A.guarda = (k,v)=>{ try{ localStorage.setItem('apano.'+k, JSON.stringify(v)) }catch(e){} };
  A.lee = (k,d)=>{ try{ const v = localStorage.getItem('apano.'+k); return v==null ? d : JSON.parse(v) }catch(e){ return d } };
  A.borra = k=>{ try{ localStorage.removeItem('apano.'+k) }catch(e){} };
  { const t = A.lee('tema', null); if(t) document.documentElement.setAttribute('data-theme', t) }

  /* ---------- formatos ---------- */
  const fEur  = new Intl.NumberFormat('es-ES',{style:'currency',currency:'EUR'});
  const fEur0 = new Intl.NumberFormat('es-ES',{style:'currency',currency:'EUR',maximumFractionDigits:0});
  A.eur  = n => fEur.format(n);
  A.eur0 = n => Number.isInteger(n) ? fEur0.format(n) : fEur.format(n);
  A.num  = n => new Intl.NumberFormat('es-ES').format(n);
  A.fecha = s => new Date(s).toLocaleDateString('es-ES',{day:'numeric',month:'short',year:'numeric'});
  A.fechaCorta = s => new Date(s).toLocaleDateString('es-ES',{day:'numeric',month:'short'});
  A.hora = s => new Date(s).toLocaleTimeString('es-ES',{hour:'2-digit',minute:'2-digit'});
  A.hace = s => {
    const d = Math.floor((new Date(A.HOY+'T12:00') - new Date(s.length>10 ? s : s+'T12:00'))/86400000);
    if(d<=0) return 'hoy'; if(d===1) return 'ayer'; if(d<7) return 'hace '+d+' días';
    if(d<30){ const s2 = Math.floor(d/7); return 'hace '+s2+(s2===1?' semana':' semanas') }
    const m = Math.floor(d/30); return 'hace '+m+(m===1?' mes':' meses');
  };
  A.km = k => k < 1 ? Math.round(k*1000)+' m' : k.toLocaleString('es-ES',{maximumFractionDigits:1})+' km';
  const UNI = {hora:'/h', servicio:'', sesión:'/sesión', clase:'/clase', paseo:'/paseo', día:'/día', 'm²':'/m²', mes:'/mes', foto:'/foto'};
  A.precio = a => a.unidad==='desde'
    ? '<small>desde </small>'+A.eur0(a.precio)
    : A.eur0(a.precio)+(UNI[a.unidad] ? '<small> '+UNI[a.unidad]+'</small>' : '');
  A.precioTxt = a => (a.unidad==='desde' ? 'desde ' : '') + A.eur0(a.precio) + (UNI[a.unidad] ? ' '+UNI[a.unidad] : '');

  /* ---------- iconos de interfaz ---------- */
  const IC = {
    corazon:'M12 20.5s-7.5-4.6-7.5-10.3A4.2 4.2 0 0 1 12 7.7a4.2 4.2 0 0 1 7.5 2.5c0 5.7-7.5 10.3-7.5 10.3z',
    buzon:'M4 5.5h16v11H8.5L4 20z',
    lupa:'M10.8 17.6a6.8 6.8 0 1 0 0-13.6 6.8 6.8 0 0 0 0 13.6zM20 20l-4.3-4.3',
    mas:'M12 5v14M5 12h14',
    casa:'M3.5 11 12 4l8.5 7M6 9.4V20h12V9.4',
    persona:'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4.5 20.5c.8-3.6 3.8-5.5 7.5-5.5s6.7 1.9 7.5 5.5',
    escudo:'M12 3 4.5 6v5.6c0 4.4 3.1 8.2 7.5 9.4 4.4-1.2 7.5-5 7.5-9.4V6z',
    check:'M5 12.5l4.2 4.2L19 7',
    ubicacion:'M12 21s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11zM12 12.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4z',
    estrella:'M12 3.4l2.6 5.4 5.9.8-4.3 4.1 1 5.9L12 16.8l-5.2 2.8 1-5.9L3.5 9.6l5.9-.8z',
    cerrar:'M6 6l12 12M18 6 6 18',
    luna:'M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z'
  };
  A.icono = (n, t, extra) => `<svg width="${t||20}" height="${t||20}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${extra||''}><path d="${IC[n]||A.ICONOS[n]||''}"/></svg>`;
  A.icCat = (id, t) => `<svg width="${t||24}" height="${t||24}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${A.ICONOS[id]}"/></svg>`;

  /* ---------- estrellas ---------- */
  A.estrellas = (v, t) => {
    t = t || 13; let s = '<span class="estrellas" aria-hidden="true">';
    for(let i=1;i<=5;i++) s += `<svg width="${t}" height="${t}" viewBox="0 0 24 24" fill="${v>=i-.25?'currentColor':'none'}" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="${IC.estrella}"/></svg>`;
    return s + '</span>';
  };

  /* ---------- avatar ---------- */
  A.iniciales = n => n.split(/\s+/).filter(Boolean).slice(0,2).map(p=>p[0]).join('').toUpperCase();
  A.verificado = u => !!(u && u.estado==='verificado' && u.ver && u.ver.dni && u.ver.selfie);
  A.avatar = (u, clase) => {
    if(!u) return '';
    const tick = A.verificado(u) ? `<span class="tick" title="Identidad verificada con documento">${A.icono('check',12,'stroke-width="3"')}</span>` : '';
    const foto = (A.lee('cuenta-'+u.id, {}) || {}).foto;
    const fondo = foto && /^data:image\//.test(foto) ? `;background:var(--sup-2) url('${foto}') center/cover` : '';
    return `<span class="avatar ${clase||''}" style="--av:${u.av}${fondo}" aria-hidden="true">${fondo ? '' : A.iniciales(u.n)}${tick}</span>`;
  };

  /* ---------- portada ilustrada (sustituible por foto: a.foto) ---------- */
  A.hash = s => { let h = 0; for(const c of String(s)) h = (h*31 + c.charCodeAt(0)) >>> 0; return h };
  A.portada = (a, op) => {
    op = op || {};
    if(a.foto) return `<img src="${a.foto}" alt="" loading="lazy">`;
    const c = A.categoria(a.cat); const h = A.hash(a.id);
    const v = ['','v2','v3'][h % 3];
    const giro = (h % 24) - 12;
    return `<span class="portada ${v}" style="--c1:${c.c1};--c2:${c.c2}" aria-hidden="true">
      <svg class="p-gran" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" style="transform:rotate(${giro}deg)"><path d="${A.ICONOS[a.cat]}"/></svg>
      <span class="p-aro"></span>
      <svg class="p-icono" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="${A.ICONOS[a.cat]}"/></svg>
      ${op.texto ? `<span class="p-txt">${a.sub}</span>` : ''}
    </span>`;
  };

  /* ---------- tarjeta de anuncio ---------- */
  A.favs = () => A.lee('favs', ['s5','s14']);
  A.esFav = id => A.favs().includes(id);
  A.tarjeta = (a, op) => {
    op = op || {};
    const u = A.usuario(a.u);
    const sellos = [a.dest ? '<span class="insignia insignia-sol">Destacado</span>' : '', a.urg ? '<span class="insignia insignia-tinta">Hoy</span>' : ''].join('');
    return `<article class="tarjeta ${op.clase||''}">
      <div class="tarjeta-img">
        ${A.portada(a, {texto:true})}
        <div class="tarjeta-sello">${sellos}</div>
        <button class="tarjeta-fav" type="button" data-fav="${a.id}" aria-pressed="${A.esFav(a.id)}" aria-label="Guardar en favoritos">${A.icono('corazon',19)}</button>
      </div>
      <div class="col g4">
        <div class="tarjeta-precio">${A.precio(a)}</div>
        <a class="tarjeta-titulo recorte cubre" href="anuncio.html?id=${a.id}">${a.t}</a>
        <div class="tarjeta-meta">${A.avatar(u,'avatar-p')}<span class="recorte recorte-1">${u.corto} · ${A.km(u.km)}</span></div>
      </div>
    </article>`;
  };

  /* ---------- sesión, perfiles y permisos ---------- */
  A.PERFILES = [
    {id:'u1',  et:'Laura B. · usuaria verificada'},
    {id:'u2',  et:'Toni M. · profesional verificado'},
    {id:'u17', et:'Pau R. · DNI en revisión'},
    {id:'m1',  et:'Nuria P. · moderación'},
    {id:'m2',  et:'Óscar V. · administración'},
    {id:'',    et:'Sin cuenta'}
  ];
  A.perfil = () => A.lee('perfil', 'u1');
  A.sesion = () => { const p = A.perfil(); return p ? (A.usuario(p) || null) : null };
  A.cambiaPerfil = id => { A.guarda('perfil', id); location.reload() };
  A.puede = p => {
    const s = A.sesion(); if(!s) return false;
    const ok = A.verificado(s);
    const mapa = {
      cuenta:true, ver:true,
      contactar:ok, publicar:ok, pagar:ok, favoritos:true,
      moderar:['moderador','admin'].includes(s.rol), admin:s.rol==='admin'
    };
    return !!mapa[p];
  };
  /* Llamar antes de cualquier acción que exige ser adulto verificado. Devuelve true si se puede seguir. */
  A.exige = (accion) => {
    const s = A.sesion();
    const que = {contactar:'escribir a nadie', publicar:'publicar anuncios', pagar:'contratar servicios'}[accion] || 'hacer esto';
    if(!s){
      A.dialogo(`<div class="dialogo-cuerpo col g16" style="padding-top:24px;text-align:center;align-items:center">
        <span class="puerta-18" style="width:72px;height:72px;font-size:1.8rem;border-radius:22px">18</span>
        <h2 class="h2">Necesitas una cuenta verificada</h2>
        <p class="sec">Para ${que} en Apaño hay que darse de alta y presentar el DNI, NIE o pasaporte. Así sabemos que todos los que están aquí son mayores de edad y quienes dicen ser.</p>
        <a class="btn btn-bloque btn-g" href="registro.html">Crear cuenta</a>
        <a class="btn btn-sec btn-bloque" href="entrar.html">Ya tengo cuenta</a>
      </div>`);
      return false;
    }
    if(!A.verificado(s)){
      A.dialogo(`<div class="dialogo-cuerpo col g16" style="padding-top:24px">
        <span class="insignia insignia-avisa" style="align-self:flex-start">Identidad en revisión</span>
        <h2 class="h2">Aún no puedes ${que}</h2>
        <p class="sec">Estamos revisando tu documento. Suele tardar menos de 2 horas. Mientras tanto puedes mirar anuncios y guardar favoritos.</p>
        <a class="btn btn-bloque" href="cuenta.html#verificacion">Ver el estado de mi verificación</a>
      </div>`);
      return false;
    }
    return true;
  };

  /* ---------- puerta de edad (primera visita) ---------- */
  function puertaEdad(){
    if(document.documentElement.dataset.sinPuerta === '1') return;
    const bloqueo = A.lee('menor', null);
    if(bloqueo && Date.now() - bloqueo < 24*3600*1000) return pintaBloqueo();
    if(A.lee('mayor', null)) return;
    const p = document.createElement('div');
    p.className = 'puerta'; p.setAttribute('role','dialog'); p.setAttribute('aria-modal','true'); p.setAttribute('aria-labelledby','puerta-t');
    p.innerHTML = `<div class="puerta-caja">
      <span class="logo" style="font-size:2rem">apa<span class="n">ñ</span>o<span class="punto">.</span></span>
      <span class="puerta-18">18</span>
      <h1 class="h1" id="puerta-t">Apaño es solo para mayores de edad</h1>
      <p class="sec" style="max-width:36ch">Para entrar tienes que confirmar que tienes 18 años o más. Al darte de alta lo comprobaremos con tu documento de identidad.</p>
      <div class="col g10" style="width:100%;max-width:340px;margin-top:6px">
        <button class="btn btn-g btn-bloque" id="puerta-si" type="button">Tengo 18 años o más</button>
        <button class="btn btn-sec btn-bloque" id="puerta-no" type="button">Soy menor de 18</button>
      </div>
      <p class="ayuda" style="max-width:40ch">Si mientes sobre tu edad, tu cuenta se cerrará en cuanto revisemos el documento. Más información en <a class="enlace" href="legal.html#condiciones">las condiciones</a>.</p>
    </div>`;
    document.body.appendChild(p);
    document.body.style.overflow = 'hidden';
    $('#puerta-si', p).focus();
    $('#puerta-si', p).addEventListener('click', ()=>{
      A.guarda('mayor', Date.now());
      p.style.transition = 'opacity .35s'; p.style.opacity = '0';
      setTimeout(()=>{ p.remove(); document.body.style.overflow = '' }, 360);
    });
    $('#puerta-no', p).addEventListener('click', ()=>{ A.guarda('menor', Date.now()); p.remove(); pintaBloqueo() });
  }
  function pintaBloqueo(){
    const p = document.createElement('div');
    p.className = 'puerta'; p.setAttribute('role','alertdialog'); p.setAttribute('aria-modal','true');
    p.innerHTML = `<div class="puerta-caja">
      <span class="puerta-18">18</span>
      <h1 class="h1">No puedes usar Apaño</h1>
      <p class="sec" style="max-width:38ch">Apaño es solo para mayores de 18 años. Hemos bloqueado el acceso desde este dispositivo durante 24 horas.</p>
      <p class="ayuda" style="max-width:38ch">Si necesitas un servicio, pide a una persona adulta de tu familia que lo contrate.</p>
      <button class="btn btn-sec btn-p" id="puerta-reset" type="button" style="margin-top:18px">Restablecer (solo en esta demostración)</button>
    </div>`;
    document.body.appendChild(p);
    document.body.style.overflow = 'hidden';
    $('#puerta-reset', p).addEventListener('click', ()=>{ A.borra('menor'); A.borra('mayor'); location.reload() });
  }
  A.puertaEdad = puertaEdad;

  /* ---------- avisador ---------- */
  A.avisa = (texto, tipo) => {
    let c = $('.avisador');
    if(!c){ c = document.createElement('div'); c.className = 'avisador'; c.setAttribute('aria-live','polite'); document.body.appendChild(c) }
    const t = document.createElement('div'); t.className = 'tostada';
    const ic = tipo==='mal' ? A.icono('cerrar',16) : A.icono('check',16);
    t.innerHTML = `<span style="opacity:.7;display:inline-flex">${ic}</span><span>${texto}</span>`;
    c.appendChild(t);
    setTimeout(()=>{ t.classList.add('fuera'); setTimeout(()=>t.remove(), 280) }, 3000);
  };

  /* ---------- diálogo / hoja ---------- */
  A.dialogo = (html, op) => {
    op = op || {};
    const capa = document.createElement('div');
    capa.className = 'capa'; capa.setAttribute('role','dialog'); capa.setAttribute('aria-modal','true');
    capa.innerHTML = `<div class="dialogo" ${op.ancho?`style="max-width:${op.ancho}px"`:''}>
      <div style="position:relative"><button class="ico-btn" data-cerrar aria-label="Cerrar" style="position:absolute;right:10px;top:10px;z-index:2">${A.icono('cerrar',18)}</button></div>
      ${html}</div>`;
    const cerrar = ()=>{ capa.remove(); document.removeEventListener('keydown', esc); document.body.style.overflow='' };
    const esc = e => { if(e.key==='Escape') cerrar() };
    capa.addEventListener('click', e => { if(e.target===capa || e.target.closest('[data-cerrar]')) cerrar() });
    document.addEventListener('keydown', esc);
    document.body.appendChild(capa); document.body.style.overflow='hidden';
    const f = capa.querySelector('input,select,textarea,a.btn,button.btn'); if(f) f.focus();
    A.cerrarDialogo = cerrar;
    if(op.alAbrir) op.alAbrir(capa, cerrar);
    return cerrar;
  };

  /* ---------- menú de la cuenta ---------- */
  A.abreCuenta = () => {
    const s = A.sesion(), pid = A.perfil();
    const tema = document.documentElement.getAttribute('data-theme');
    const selector = `<div style="padding:16px 20px 20px;border-top:1px solid var(--linea)" class="col g8">
      <label class="etiqueta" for="selPerfil">Demostración · entrar como</label>
      <select class="ent" id="selPerfil">${A.PERFILES.map(p=>`<option value="${p.id}" ${p.id===pid?'selected':''}>${p.et}</option>`).join('')}</select>
      <p class="ayuda">Cada perfil ve la app con sus permisos. Sin cuenta o sin DNI verificado no se puede escribir, publicar ni pagar.</p>
    </div>`;
    const fila = (h, ic, t, extra) => `<a href="${h}" class="fila g12" style="padding:13px 20px;font-weight:600;border-top:1px solid var(--linea)">${ic}<span class="crecer">${t}</span>${extra||''}</a>`;
    let cuerpo;
    if(!s){
      cuerpo = `<div class="dialogo-cuerpo col g12" style="padding-top:26px">
        <h2 class="h2">Hola</h2><p class="sec">Entra o crea tu cuenta. Te pediremos el DNI para comprobar que eres mayor de edad.</p>
        <a class="btn btn-bloque" href="registro.html">Crear cuenta</a><a class="btn btn-sec btn-bloque" href="entrar.html">Entrar</a></div>`;
    } else {
      const est = A.verificado(s) ? '<span class="insignia insignia-ok">Identidad verificada</span>'
        : '<span class="insignia insignia-avisa">DNI en revisión</span>';
      cuerpo = `<div class="dialogo-cuerpo fila g12" style="padding-top:26px">
          ${A.avatar(s,'avatar-g')}
          <div class="col g4 crecer"><strong class="lg" style="font-family:var(--display)">${s.n}</strong>${est}</div>
        </div>
        <nav>
          ${s.rol==='usuario' ? fila('perfil.html?id='+s.id, A.icono('persona'), 'Mi perfil público') : ''}
          ${s.rol==='usuario' ? fila('servicios.html', A.icono('casa'), 'Mis servicios y contrataciones') : ''}
          ${s.rol==='usuario' ? fila('monedero.html', A.icono('escudo'), 'Monedero', `<span class="num sec">${A.eur(A.MONEDERO.saldo)}</span>`) : ''}
          ${s.rol==='usuario' ? fila('destacar.html', A.icono('estrella'), 'Destacar mis anuncios', A.BOOSTS && A.BOOSTS.some(b=>b.u===s.id && b.estado==='activo') ? '<span class="insignia insignia-sol">Activo</span>' : '') : ''}
          ${s.rol==='usuario' ? fila('pro.html', A.icono('check'), 'Apaño Pro', A.lee('pro', false) ? '<span class="insignia insignia-marca">Pro</span>' : '<span class="xs ter">Para profesionales</span>') : ''}
          ${fila('notificaciones.html', A.icono('buzon'), 'Notificaciones')}
          ${fila('cuenta.html', A.icono('persona'), 'Mi cuenta y verificación')}
          ${A.puede('moderar') ? fila('admin.html', A.icono('escudo'), 'Moderación', '<span class="insignia insignia-mal">'+A.VERIFICACIONES.filter(v=>v.estado==='pendiente').length+'</span>') : ''}
          <button type="button" id="cambiaTema" class="fila g12" style="width:100%;padding:13px 20px;font-weight:600;border:0;border-top:1px solid var(--linea);background:none;text-align:left">${A.icono('luna')}<span class="crecer">Tema ${tema==='dark'?'claro':'oscuro'}</span></button>
          <button type="button" id="cierraSesion" class="fila g12" style="width:100%;padding:13px 20px;font-weight:600;border:0;border-top:1px solid var(--linea);background:none;text-align:left;color:var(--mal)">${A.icono('cerrar')}<span class="crecer">Cerrar sesión</span></button>
        </nav>`;
    }
    A.dialogo(cuerpo + selector, {alAbrir:(capa)=>{
      $('#selPerfil',capa).addEventListener('change', e=>A.cambiaPerfil(e.target.value));
      const ct = $('#cambiaTema',capa); if(ct) ct.addEventListener('click', ()=>{ const n = (document.documentElement.getAttribute('data-theme')==='dark' || (!document.documentElement.getAttribute('data-theme') && matchMedia('(prefers-color-scheme: dark)').matches)) ? 'light' : 'dark'; document.documentElement.setAttribute('data-theme', n); A.guarda('tema', n); A.cerrarDialogo() });
      const cs = $('#cierraSesion',capa); if(cs) cs.addEventListener('click', ()=>A.cambiaPerfil(''));
    }});
  };

  /* ---------- cabecera, barra inferior y búsqueda ---------- */
  function cabecera(){
    const s = A.sesion();
    const caja = $('#cuenta');
    const sinLeer = s && s.id==='u1' ? A.CHATS.reduce((n,c)=>n+c.sinLeer,0) : 0;
    $$('[data-punto-buzon]').forEach(el=>{ if(sinLeer){ el.insertAdjacentHTML('beforeend', `<span class="punto-aviso">${sinLeer}</span>`) } });
    const leidas = A.lee('notifs-leidas', []);
    const nNotif = s && s.id==='u1' && A.NOTIFICACIONES ? A.NOTIFICACIONES.filter(n=>!n.leida && !leidas.includes(n.id)).length
      : (s && ['moderador','admin'].includes(s.rol) ? 3 : 0);
    $$('[data-punto-notif]').forEach(el=>{ if(nNotif){ el.insertAdjacentHTML('beforeend', `<span class="punto-aviso">${nNotif}</span>`) } });
    if(caja){
      caja.innerHTML = s
        ? `<button class="ico-btn" id="abreCuenta" aria-label="Tu cuenta: ${s.n}" style="width:auto;padding:3px">${A.avatar(s)}</button>`
        : `<a class="btn btn-sec btn-p solo-escritorio" href="entrar.html">Entrar</a><a class="btn btn-p" href="registro.html">Regístrate</a>
           <button class="ico-btn" id="abreCuenta" aria-label="Perfiles de demostración">${A.icono('persona')}</button>`;
      $('#abreCuenta').addEventListener('click', A.abreCuenta);
    }
    const tu = $('#tab-tu'); if(tu && !s) tu.setAttribute('href','registro.html');
    $$('[data-rol]').forEach(el=>{ if(!el.dataset.rol.split(',').map(x=>x.trim()).includes(s ? s.rol : 'anonimo')) el.remove() });
    $$('[data-solo]').forEach(el=>{ if(!A.puede(el.dataset.solo)) el.remove() });
    // página activa en la barra inferior
    const f = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    $$('.tabbar a').forEach(a=>{ if((a.getAttribute('href')||'').split('?')[0].toLowerCase() === f) a.setAttribute('aria-current','page') });
    // buscadores → buscar.html
    $$('form[data-busqueda]').forEach(fm=>fm.addEventListener('submit', e=>{
      e.preventDefault(); const q = (fm.querySelector('input').value||'').trim();
      location.href = 'buscar.html' + (q ? '?q='+encodeURIComponent(q) : '');
    }));
    const q = new URLSearchParams(location.search).get('q');
    if(q) $$('form[data-busqueda] input').forEach(i=>i.value = q);
  }

  /* ---------- acciones delegadas ---------- */
  function acciones(){
    document.addEventListener('click', e=>{
      const fav = e.target.closest('[data-fav]');
      if(fav){
        e.preventDefault();
        const id = fav.dataset.fav; let l = A.favs();
        const on = !l.includes(id);
        l = on ? [...l, id] : l.filter(x=>x!==id); A.guarda('favs', l);
        $$(`[data-fav="${id}"]`).forEach(b=>b.setAttribute('aria-pressed', on));
        A.avisa(on ? 'Guardado en favoritos' : 'Quitado de favoritos');
        return;
      }
      const av = e.target.closest('[data-avisa]'); if(av){ e.preventDefault(); A.avisa(av.dataset.avisa, av.dataset.tipo) }
      const ex = e.target.closest('[data-exige]'); if(ex && !A.exige(ex.dataset.exige)){ e.preventDefault(); e.stopImmediatePropagation() }
      const cp = e.target.closest('[data-copia]');
      if(cp){ e.preventDefault(); const t = cp.dataset.copia;
        try{ navigator.clipboard.writeText(t).then(()=>A.avisa('Copiado'), ()=>A.avisa('Selecciónalo y cópialo','mal')) }catch(err){ A.avisa('Selecciónalo y cópialo','mal') } }
      const it = e.target.closest('.interruptor[data-conmuta]');
      if(it){ const on = it.getAttribute('aria-checked')!=='true'; it.setAttribute('aria-checked', on); if(it.dataset.conmuta) A.avisa(it.dataset.conmuta+(on?': activado':': desactivado')) }
    }, true);
    $$('form[data-demo]').forEach(f=>f.addEventListener('submit', e=>{ e.preventDefault(); A.avisa(f.dataset.demo || 'Guardado') }));
  }

  /* ---------- pestañas ---------- */
  A.pestanas = raiz => {
    $$('[data-pestanas]', raiz||document).forEach(g=>{ try{
      const bs = $$('.pestana', g); if(!bs.length) return;
      let ind = $('.indicador', g); if(!ind){ ind = document.createElement('span'); ind.className='indicador'; g.appendChild(ind) }
      const mueve = b => { ind.style.width = b.offsetWidth+'px'; ind.style.transform = `translateX(${b.offsetLeft}px)` };
      const activa = (b, hash) => {
        bs.forEach(x=>{ const on = x===b; x.setAttribute('aria-selected', on);
          const p = document.getElementById(x.getAttribute('aria-controls')); if(p){ p.hidden = !on; if(on){ p.classList.remove('panel-pestana'); void p.offsetWidth; p.classList.add('panel-pestana') } } });
        mueve(b);
        const id = b.getAttribute('aria-controls');
        if(hash!==false && b.dataset.hash!=='no' && /^[a-z0-9-]+$/.test(id||'')) try{ history.replaceState(null,'','#'+id) }catch(e){}
      };
      bs.forEach(b=>b.addEventListener('click', ()=>activa(b)));
      const deHash = bs.find(b=>'#'+b.getAttribute('aria-controls')===location.hash);
      activa(deHash || bs.find(b=>b.getAttribute('aria-selected')==='true') || bs[0], false);
      addEventListener('resize', ()=>{ const a = bs.find(b=>b.getAttribute('aria-selected')==='true'); if(a) mueve(a) });
      addEventListener('hashchange', ()=>{ const b = bs.find(x=>'#'+x.getAttribute('aria-controls')===location.hash); if(b) activa(b,false) });
      requestAnimationFrame(()=>{ const a = bs.find(b=>b.getAttribute('aria-selected')==='true'); if(a) mueve(a) });
    }catch(err){ A.errores.push('pestañas: '+err.message) } });
  };

  /* ---------- revelados y contadores ---------- */
  function revelados(){
    if(quieto || !('IntersectionObserver' in window)) return;
    const els = $$('.rev').filter(el=>el.getBoundingClientRect().top > innerHeight - 30);
    els.forEach((el,i)=>{ el.classList.add('armado'); el.style.transitionDelay = ((i%5)*50)+'ms' });
    const o = new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('visible'); o.unobserve(e.target) } }),{rootMargin:'0px 0px -6% 0px'});
    els.forEach(el=>o.observe(el));
  }
  function contadores(){
    $$('[data-cuenta]').forEach(el=>{
      const fin = parseFloat(el.dataset.cuenta), dec = el.dataset.dec|0, suf = el.dataset.suf||'';
      const fmt = v => v.toLocaleString('es-ES',{minimumFractionDigits:dec,maximumFractionDigits:dec}) + suf;
      el.textContent = fmt(fin);
      if(quieto || !('IntersectionObserver' in window)) return;
      const o = new IntersectionObserver(es=>es.forEach(e=>{ if(!e.isIntersecting) return; o.disconnect();
        const t0 = performance.now(); const paso = t=>{ const p = Math.min(1,(t-t0)/900); el.textContent = fmt(fin*(1-Math.pow(1-p,3))); if(p<1) requestAnimationFrame(paso) }; requestAnimationFrame(paso) }),{threshold:.5});
      o.observe(el);
    });
  }

  /* ---------- validaciones ---------- */
  A.docValido = v => {
    v = (v||'').toUpperCase().replace(/[^0-9A-Z]/g,'');
    const L = 'TRWAGMYFPDXBNJZSQVHLCKE';
    if(/^[0-9]{8}[A-Z]$/.test(v)) return L[(+v.slice(0,8))%23] === v[8];
    if(/^[XYZ][0-9]{7}[A-Z]$/.test(v)) return L[(+('XYZ'.indexOf(v[0]) + v.slice(1,8)))%23] === v[8];
    return false;
  };
  A.pasaporteValido = v => /^[A-Z0-9]{6,9}$/.test((v||'').toUpperCase().replace(/\s/g,''));
  A.emailValido = v => /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test((v||'').trim());
  A.movilValido = v => /^(\+34)?[67]\d{8}$/.test((v||'').replace(/[\s-]/g,''));
  A.tarjetaPago = {
    limpia: v => (v||'').replace(/\D/g,''),
    marca(v){ v = this.limpia(v); if(/^4/.test(v)) return 'Visa'; if(/^(5[1-5]|2[2-7])/.test(v)) return 'Mastercard'; if(/^3[47]/.test(v)) return 'American Express'; return '' },
    formatea(v){ v = this.limpia(v).slice(0,19); const g = /^3[47]/.test(v)?[4,6,5]:[4,4,4,4,3]; const o=[]; let i=0; for(const t of g){ if(i>=v.length) break; o.push(v.slice(i,i+t)); i+=t } return o.join(' ') },
    luhn(v){ v = this.limpia(v); if(v.length<12) return false; let s=0,alt=false; for(let i=v.length-1;i>=0;i--){ let d=+v[i]; if(alt){ d*=2; if(d>9) d-=9 } s+=d; alt=!alt } return s%10===0 }
  };
  A.ibanValido = v => {
    v = (v||'').toUpperCase().replace(/\s/g,''); if(!/^[A-Z]{2}\d{2}[A-Z0-9]{10,30}$/.test(v)) return false;
    const r = (v.slice(4)+v.slice(0,4)).replace(/[A-Z]/g, c => c.charCodeAt(0)-55);
    let m = 0; for(const d of r) m = (m*10 + +d) % 97; return m === 1;
  };

  /* ---------- contratación en curso ---------- */
  A.pedido = {
    leer(){ return A.lee('pedido', {s:'s5', cantidad:1, extra:0, fecha:'', nota:''}) },
    guardar(p){ A.guarda('pedido', p); return p },
    calcula(p){
      p = p || this.leer(); const a = A.anuncio(p.s) || A.anuncio('s5');
      const base = Math.round(a.precio * (p.cantidad||1) * 100)/100 + (p.extra||0);
      const prot = Math.round((base*0.05 + 0.99) * 100)/100;   // Pago protegido: 5 % + 0,99 €
      return {a, base, prot, total: Math.round((base+prot)*100)/100};
    }
  };

  /* ---------- arranque ---------- */
  function arranca(){
    const t = A.lee('tema', null); if(t) document.documentElement.setAttribute('data-theme', t);
    cabecera(); acciones();
    if(typeof A.pagina === 'function'){ try{ A.pagina() }catch(err){ A.errores.push('A.pagina: '+err.message); console.error(err) } }
    revelados(); contadores(); A.pestanas();
    puertaEdad();
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', arranca); else arranca();
})();

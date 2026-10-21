/* =====================================================
   ✏️  PERSONALIZA AQUÍ
   ===================================================== */
const CONFIG = {
  // Fecha en que son novios: (año, mes, día). OJO: el mes va de 0 a 11 → julio = 6
  inicio: new Date(2026, 6, 4, 0, 0, 0),

  // 📸 FOTOS: guarda tus imágenes en la carpeta "fotos/" (junto a index.html)
  // y copia una línea por cada foto. Puedes agregar todas las que quieras.
  fotos: [
    { src: "fotos/foto1.jpeg", texto: "la primera vez",   frase: "Ahí supe que contigo todo era más bonito", fecha: "4 de julio" },
    { src: "fotos/foto2.jpeg", texto: "aquella noche",    frase: "Cualquier lugar es perfecto si estás tú", fecha: "" },
    { src: "fotos/foto3.jpeg", texto: "mi risa favorita", frase: "Contigo me río hasta de lo que no tiene gracia", fecha: "" },
    { src: "fotos/foto4.jpeg", texto: "nuestro lugar",    frase: "Contigo hasta lo simple se vuelve especial", fecha: "" },
    { src: "fotos/foto5.jpeg", texto: "contigo",          frase: "Mi plan favorito siempre eres tú", fecha: "" },
    { src: "fotos/foto6.jpeg", texto: "tus ojos",         frase: "Tu mirada es mi lugar favorito", fecha: "" },
    { src: "fotos/foto7.jpeg", texto: "para siempre",     frase: "Y si fuera por mí, que dure toda la vida", fecha: "" }
  ],

  // 🎵 MÚSICA: pon tu canción en la carpeta "musica/" y escribe el nombre aquí
  musica: "musica/cancion.mp3",
  volumen: 0.5,          // de 0 (silencio) a 1 (máximo)

  // 🎮 JUEGOS: guarda estas fotos en la carpeta "juegos/". Para mover una foto de un juego a otro,
  // solo cambia la línea de lugar. Puedes agregar o quitar fotos de cada juego.
  juegos: [
    { id: "rb", nombre: "Roblox", titulo: "Prousito y Prousita",
      frase: "Jugar contigo es hermoso",
      fotos: [
        { src: "juegos/roblox1.jpeg", texto: "logro desbloqueado", frase: "Tú eres mi mejor logro" },
        { src: "juegos/roblox2.jpeg", texto: "partida infinita",   frase: "Contigo no quiero que se acabe el juego" },
        { src: "juegos/roblox3.jpeg", texto: "equipo perfecto",    frase: "Tú y yo somos el mejor equipo" },
        { src: "juegos/roblox4.jpeg", texto: "nuestro mapa",       frase: "Cualquier mapa es lindo si estás tú" },
        { src: "juegos/roblox5.jpeg", texto: "Papita",             frase: "Siempre quiero ser tu prousito" }
      ] },
    { id: "mc", nombre: "Minecraft", titulo: "Nuestro mundo de bloques",
      frase: "Contigo cada día es un mundo nuevo",
      fotos: [
        { src: "juegos/minecraft1.jpeg", texto: "te amo",             frase: "Nunca me cansare de decirtelo Te amo mushote mi amor" },
        { src: "juegos/minecraft2.jpeg", texto: "nuestra casa",       frase: "Contigo construyo mi mundo favorito" },
        { src: "juegos/minecraft3.jpeg", texto: "aventura",           frase: "Cualquier aventura es mejor contigo" },
        { src: "juegos/minecraft4.jpeg", texto: "a salvo",            frase: "Contigo no le temo a ninguna noche" },
        { src: "juegos/minecraft5.jpeg", texto: "mi punto de inicio", frase: "Mi spawn favorito eres tú" },
        { src: "juegos/minecraft6.jpeg", texto: "nuestro tesoro",     frase: "Lo mejor que encontré fuiste tú" }
      ] },
    { id: "ff", nombre: "Free Fire", titulo: "Dúo de insanos",
      frase: "Contigo gano hasta cuando pierdo",
      fotos: [
        { src: "juegos/freefire1.jpeg", texto: "dúo favorito", frase: "Mi compañera de dúo para siempre" },
        { src: "juegos/freefire3.jpeg", texto: "booyah",       frase: "Eres mi victoria favorita" },
        { src: "juegos/freefire2.jpeg", texto: "te cubro",     frase: "Siempre te cuido la espalda" }
      ] }
  ],

  // 🎸 BANDA SONORA: títulos de canciones que le recuerden a ti (escribe las que quieras)
  bandaTexto: "Para mi fan número uno de The Beatles",
  canciones: ["Here Comes the Sun", "Something", "In My Life", "I Will", "Here, There and Everywhere"],

  // 🧍 Nombres que flotan sobre los personajes (el primero es el del traje, el segundo la cerdita). "" = sin nombre
  nombres: ["Crizzk", "VIVI"],

  iniciales: "C&V",     // letras que salen en el sello rojo del sobre

  saludo: "Amor,",
  // Un párrafo por línea. Lo que escribas entre **dos asteriscos** sale resaltado en rosa.
  carta: [
    "Si estás leyendo esto, es porque este mes también decidiste quedarte a mi lado, con toda tu paciencia y tu cariño.",
    "Quería escribirte algo bonito, pero lo único que me sale decirte es que **contigo todo se siente más fácil**. Me haces reír, me calmas y me haces querer ser mejor.",
    "Gracias por ser la mejor en todo, por los mensajes de buenos días, por escucharme, por quererme, por elegirme, por ser atenta y por cuidarme cuando ni yo sé hacerlo.",
    "Un mes más contigo y lo único que quiero es que vengan muchos más. **Quiero seguir sumando días a tu lado mi papita hermosa.**"
  ],
  firma: "Siempre tuyo",

  // 💌 FINAL: la última pantalla de la página
  final: {
    pre:   "Y al final solo queda esto",
    l1:    "Te amo,",
    l2:    "Virginia.",
    sub:   "Hoy, mañana, y toda mi vida.",
    firma: "— Con todo mi amor de tu espositopro💛"
  }
};

const $ = id => document.getElementById(id);
const NS = 'http://www.w3.org/2000/svg';

/* =====================================================
   HUELLA DACTILAR (se dibuja con crestas generadas)
   ===================================================== */
function crearHuella(){
  // Crestas: arcos concéntricos con huecos irregulares, como una huella real
  let d = '';
  const cx = 60, cy = 78;
  for(let i = 1; i <= 15; i++){
    const rx = 5 + i*3.6, ry = 6 + i*4.5;
    const abre = i > 4 ? 0.5 + i*0.02 : 0;             // las exteriores se abren abajo
    const a0 = Math.PI/2 + abre, a1 = Math.PI/2 + 2*Math.PI - abre;
    const x0 = cx + rx*Math.cos(a0), y0 = cy + ry*Math.sin(a0);
    const x1 = cx + rx*Math.cos(a1), y1 = cy + ry*Math.sin(a1);
    d += `M${x0.toFixed(1)} ${y0.toFixed(1)}A${rx} ${ry} 0 1 1 ${x1.toFixed(1)} ${y1.toFixed(1)}`;
  }
  // Remolino central + cresta en "U" inferior
  d += 'M60 70c-5 0-8 4-8 9s4 8 8 8 7-3 7-7';
  d += 'M44 128c8 6 24 6 32 0M36 136c12 9 36 9 48 0';
  ['ridgesBase','ridgesLit'].forEach(id=>{
    const p = document.createElementNS(NS,'path'); p.setAttribute('d', d); $(id).appendChild(p);
  });

  // Marcas del anillo exterior
  const g = $('tickG');
  for(let i = 0; i < 72; i++){
    const a = i * 5 * Math.PI/180, largo = i % 6 === 0;
    const r1 = 147, r2 = largo ? 138 : 142;
    const l = document.createElementNS(NS,'line');
    l.setAttribute('x1', 150 + r1*Math.cos(a)); l.setAttribute('y1', 150 + r1*Math.sin(a));
    l.setAttribute('x2', 150 + r2*Math.cos(a)); l.setAttribute('y2', 150 + r2*Math.sin(a));
    if(largo) l.setAttribute('class','largo');
    g.appendChild(l);
  }
}
crearHuella();

/* --- Mantener presionado --- */
const scan = $('scan'), prog = $('prog'), estado = $('estado'), pct = $('pct'), lock = $('lock');
const TOTAL = 804, DURACION = 2400;
let t0 = 0, raf = 0, listo = false;
const mensajes = [[0,'Leyendo tu huella…'],[.35,'Verificando que eres tú…'],[.7,'Casi listo…'],[.97,'Acceso concedido ♥']];

function pinta(p){
  prog.style.strokeDashoffset = TOTAL * (1 - p);
  scan.style.setProperty('--p', p);
  pct.textContent = Math.round(p*100) + '%';
  estado.textContent = mensajes.filter(m => p >= m[0]).pop()[1];
}
function paso(now){
  const p = Math.min((now - t0)/DURACION, 1);
  pinta(p);
  if(p >= 1) return abrir();
  raf = requestAnimationFrame(paso);
}
function empezar(e){ if(listo) return; e.preventDefault(); scan.classList.add('activo'); t0 = performance.now(); cancelAnimationFrame(raf); raf = requestAnimationFrame(paso); }
function soltar(){ if(listo) return; cancelAnimationFrame(raf); scan.classList.remove('activo'); pinta(0); estado.textContent = 'Mantén presionada tu huella'; }
function abrir(){
  listo = true; scan.classList.add('ok');
  if(navigator.vibrate) navigator.vibrate([60,40,120]);
  setTimeout(()=>{ lock.classList.add('open'); document.body.classList.remove('locked'); explosion(); iniciarMusica(); }, 700);
}
scan.addEventListener('pointerdown', empezar);
['pointerup','pointerleave','pointercancel'].forEach(ev => scan.addEventListener(ev, soltar));
scan.addEventListener('keydown', e => { if(e.key==='Enter'||e.key===' '){ pinta(1); abrir(); }});
scan.addEventListener('contextmenu', e => e.preventDefault());

/* =====================================================
   CONTADOR: cuenta sin parar desde la fecha de inicio
   ===================================================== */
function tick(){
  const ahora = new Date(), s = Math.max(0, Math.floor((ahora - CONFIG.inicio)/1000));
  $('d').textContent = Math.floor(s/86400);
  $('h').textContent = Math.floor(s%86400/3600);
  $('m').textContent = Math.floor(s%3600/60);
  $('s').textContent = s%60;
  // meses cumplidos
  let meses = (ahora.getFullYear()-CONFIG.inicio.getFullYear())*12 + ahora.getMonth()-CONFIG.inicio.getMonth();
  if(ahora.getDate() < CONFIG.inicio.getDate()) meses--;
  $('frase').textContent = ahora.getDate() === CONFIG.inicio.getDate() && meses > 0 ? 'feliz mes, mi amor' : (meses > 0 ? `${meses} ${meses===1?'mes':'meses'} amándote` : 'cada día contigo');
}
$('desde').textContent = 'Desde el ' + CONFIG.inicio.toLocaleDateString('es',{day:'numeric',month:'long',year:'numeric'});
tick(); setInterval(tick, 1000);

/* --- Galería y carta --- */
const fondos = ['linear-gradient(160deg,#c1072f,#4a0014)','linear-gradient(160deg,#25405e,#0b1624)','linear-gradient(160deg,#e8a0b0,#7a2640)','linear-gradient(160deg,#8b1a34,#2a0614)'];
const rot = [-1.5, 1.2, -.8, 1.6];
$('galeria').innerHTML = CONFIG.fotos.map((f,i)=>`
  <figure class="foto" tabindex="0" data-cap="${f.texto}${f.fecha ? ' · ' + f.fecha : ''}" style="--r:${rot[i%4]}deg">
    <span class="cinta"></span>
    <div class="img" style="--g:${fondos[i%4]}"><img src="${f.src}" alt="${f.texto}" loading="lazy" onerror="this.remove()"></div>
    <figcaption>${f.texto}${f.frase ? `<em>${f.frase}</em>` : ''}${f.fecha ? `<small>${f.fecha}</small>` : ''}</figcaption>
  </figure>`).join('');

/* Al hacer clic, la foto se agranda */
const visor = document.createElement('div');
visor.id = 'visor'; visor.innerHTML = '<figure><img alt=""><figcaption></figcaption></figure>';
document.body.appendChild(visor);
document.addEventListener('click', e => {
  const f = e.target.closest('.foto'); if(!f) return;
  const im = f.querySelector('img'); if(!im) return;
  visor.querySelector('img').src = im.src;
  visor.querySelector('figcaption').textContent = f.dataset.cap || '';
  visor.classList.add('abierto');
});
visor.addEventListener('click', () => visor.classList.remove('abierto'));
addEventListener('keydown', e => { if(e.key === 'Escape') visor.classList.remove('abierto'); });

$('sello').textContent = CONFIG.iniciales;

/* Carta abierta: ventana con la hoja, botón X, resaltados y firma */
const resalta = t => t.replace(/\*\*(.+?)\*\*/g, '<em>$1</em>');
const modal = $('modal');
modal.innerHTML = `<article class="hoja-carta">
  <button class="cerrar" type="button" aria-label="Cerrar carta">&times;</button>
  <h3 class="saludo">${CONFIG.saludo}</h3>
  ${CONFIG.carta.map((t,i)=>`<p style="animation-delay:${(.7+i*.9).toFixed(1)}s">${resalta(t)}</p>`).join('')}
  <p class="firma" style="animation-delay:${(.7+CONFIG.carta.length*.9).toFixed(1)}s">&mdash; ${CONFIG.firma}</p>
</article>`;

function abrirCarta(){ modal.classList.add('abierta'); document.body.classList.add('leyendo'); modal.querySelector('.hoja-carta').scrollTop = 0; }
function cerrarCarta(){
  modal.classList.remove('abierta'); document.body.classList.remove('leyendo');
  $('carta').classList.add('leida'); $('toca').textContent = 'toca el sobre para leerla otra vez';
}
modal.querySelector('.cerrar').addEventListener('click', cerrarCarta);
modal.addEventListener('click', e => { if(e.target === modal) cerrarCarta(); });
addEventListener('keydown', e => { if(e.key === 'Escape' && modal.classList.contains('abierta')) cerrarCarta(); });

/* Sobre: se abre la solapa, sube la hoja y aparece la carta */
$('sobre').addEventListener('click', () => {
  const sobre = $('sobre');
  if(sobre.classList.contains('abierto')){ abrirCarta(); return; }
  sobre.classList.add('abierto');
  explosion();
  setTimeout(abrirCarta, 2000);
});
$('latido').addEventListener('click', explosion);

/* =====================================================
   FONDO: corazones con borde rojo brillante, pétalos y brillos
   ===================================================== */
const cv = $('fx'), cx = cv.getContext('2d');
let W, H, parts = [];
const reducido = matchMedia('(prefers-reduced-motion: reduce)').matches;
function medir(){ const r = devicePixelRatio||1; W = innerWidth; H = innerHeight; cv.width = W*r; cv.height = H*r; cx.setTransform(r,0,0,r,0,0); }
addEventListener('resize', medir); medir();

const rnd = (a,b)=>a+Math.random()*(b-a);
function corazon(y){
  return { t:'c', x:rnd(0,W), y: y ?? H+60, s:rnd(14,46), v:rnd(.25,.8), bal:rnd(0,6.28), a:rnd(-.35,.35),
           fase:rnd(0,6.28), o:rnd(.5,.95) };
}
function petalo(y){
  return { t:'p', x:rnd(0,W), y: y ?? -20, v:rnd(.5,1.7), dx:rnd(-.4,.4), s:rnd(6,15), a:rnd(0,6.28), va:rnd(-.04,.04), o:rnd(.35,.85), bal:rnd(0,6.28), c:Math.random()<.6?'#d4143c':'#ffc2cf' };
}
function brillo(y){ return { t:'b', x:rnd(0,W), y: y ?? H+10, v:rnd(.2,.7), s:rnd(1,3), fase:rnd(0,6.28) }; }

const NC = innerWidth<600 ? 12 : 22, NP = innerWidth<600 ? 20 : 36;
for(let i=0;i<NC;i++) parts.push(corazon(rnd(0,H)));
for(let i=0;i<NP;i++) parts.push(petalo(rnd(0,H)));
for(let i=0;i<30;i++) parts.push(brillo(rnd(0,H)));

function explosion(){
  for(let i=0;i<34;i++){ const p = petalo(H*.5); p.x = W/2; p.dx = rnd(-4,4); p.v = rnd(-5,-1); p.boom = 1; p.s += 2; parts.push(p); }
  for(let i=0;i<8;i++){ const c = corazon(H*.6); c.x = W/2 + rnd(-80,80); c.v = rnd(.8,1.6); c.boom = 1; parts.push(c); }
}

// Corazón con trazo rojo brillante, relleno suave y reflejo interior
function dibujaCorazon(s, fase){
  const r = s/2;
  cx.beginPath();
  cx.moveTo(0, r*.9);
  cx.bezierCurveTo(-r*2, -r*.1, -r*.9, -r*1.7, 0, -r*.6);
  cx.bezierCurveTo( r*.9, -r*1.7,  r*2, -r*.1, 0, r*.9);
  cx.closePath();
  const g = cx.createRadialGradient(-r*.4,-r*.5,1,0,0,r*1.6);
  g.addColorStop(0,'rgba(120,6,32,.55)'); g.addColorStop(1,'rgba(30,0,10,.35)');
  cx.fillStyle = g; cx.fill();
  const pulso = 10 + Math.sin(fase)*5;
  cx.shadowColor = '#ff1e4d'; cx.shadowBlur = pulso;
  cx.lineWidth = Math.max(1.6, s/16); cx.strokeStyle = '#ff2d55'; cx.stroke();   // borde rojo que resalta
  cx.shadowBlur = 0; cx.lineWidth = .8; cx.strokeStyle = 'rgba(255,220,228,.75)'; cx.stroke();   // filo claro
}

function dibujar(){
  cx.clearRect(0,0,W,H);
  for(let i = parts.length-1; i>=0; i--){
    const p = parts[i];
    if(p.t==='b'){
      p.y -= p.v; p.fase += .03;
      cx.fillStyle = `rgba(255,215,140,${(Math.sin(p.fase)+1)/2*.8})`; cx.shadowColor = '#ffcf80'; cx.shadowBlur = 8;
      cx.beginPath(); cx.arc(p.x,p.y,p.s,0,6.28); cx.fill(); cx.shadowBlur = 0;
      if(p.y < -10){ p.y = H+10; p.x = rnd(0,W); }
    }
    else if(p.t==='c'){
      p.bal += .012; p.fase += .05; p.y -= p.v; p.x += Math.sin(p.bal)*.5;
      cx.save(); cx.translate(p.x,p.y); cx.rotate(p.a + Math.sin(p.bal)*.15); cx.globalAlpha = p.o;
      dibujaCorazon(p.s, p.fase); cx.restore();
      if(p.y < -80){ if(p.boom){ parts.splice(i,1); } else { p.y = H+60; p.x = rnd(0,W); } }
    }
    else {
      p.bal += .02; p.x += p.dx + Math.sin(p.bal)*.6; p.y += p.v; p.a += p.va;
      if(p.boom){ p.v += .07; if(p.v > 1.7) p.boom = 0, p.extra = 1; }
      cx.save(); cx.translate(p.x,p.y); cx.rotate(p.a); cx.globalAlpha = p.o; cx.fillStyle = p.c;
      cx.beginPath(); cx.ellipse(0,0,p.s,p.s*.6,0,0,6.28); cx.fill(); cx.restore();
      if(p.y > H+30){ if(p.extra){ parts.splice(i,1); } else { p.y = -20; p.x = rnd(0,W); } }
    }
  }
  requestAnimationFrame(dibujar);
}
if(!reducido) dibujar();


/* =====================================================
   MÚSICA DE FONDO (empieza al desbloquear la huella)
   ===================================================== */
const audio = new Audio(CONFIG.musica);
audio.loop = true; audio.volume = 0; audio.preload = 'auto';
const btnMusica = document.createElement('button');
btnMusica.id = 'musica'; btnMusica.type = 'button'; btnMusica.hidden = true;
btnMusica.setAttribute('aria-label','Pausar o reproducir música'); btnMusica.textContent = '♪';
document.body.appendChild(btnMusica);
let fade = 0;
function subirVolumen(){
  clearInterval(fade);
  fade = setInterval(()=>{ audio.volume = Math.min(CONFIG.volumen, audio.volume + .03); if(audio.volume >= CONFIG.volumen) clearInterval(fade); }, 120);
}
function iniciarMusica(){
  btnMusica.hidden = false;
  audio.play().then(()=>{ btnMusica.classList.add('suena'); subirVolumen(); }).catch(()=>{});
}
btnMusica.addEventListener('click', ()=>{
  if(audio.paused){ audio.play(); btnMusica.classList.add('suena'); subirVolumen(); }
  else { audio.pause(); btnMusica.classList.remove('suena'); }
});
audio.addEventListener('error', ()=>{ btnMusica.hidden = true; console.warn('No se encontró la música:', CONFIG.musica); });


/* =====================================================
   DECORACIONES PIXEL (estilo bloques) + BEATLES
   Dibujos propios hechos con cuadritos, flotando a los lados
   ===================================================== */
function pixel(grid, pal){
  const R = grid.length, C = grid[0].length;
  const at = (y,x) => (y>=1 && x>=1 && y<=R && x<=C) ? grid[y-1][x-1] : '.';
  let r = '';
  for(let y=0;y<R+2;y++) for(let x=0;x<C+2;x++){
    const ch = at(y,x);
    const borde = ch==='.' && (at(y-1,x)!=='.'||at(y+1,x)!=='.'||at(y,x-1)!=='.'||at(y,x+1)!=='.');
    if(ch !== '.') r += `<rect x="${x}" y="${y}" width="1.02" height="1.02" fill="${pal[ch]}"/>`;
    else if(borde)  r += `<rect x="${x}" y="${y}" width="1.02" height="1.02" fill="#2a0a12"/>`;
  }
  return `<svg viewBox="0 0 ${C+2} ${R+2}" shape-rendering="crispEdges">${r}</svg>`;
}
function disco(){
  return `<svg class="disco" viewBox="0 0 120 120"><circle cx="60" cy="60" r="58" fill="#120708" stroke="#555" stroke-width="1.5"/>
  <g fill="none" stroke="#3a3032" stroke-width="1.2"><circle cx="60" cy="60" r="50"/><circle cx="60" cy="60" r="42"/><circle cx="60" cy="60" r="34"/><circle cx="60" cy="60" r="26"/></g>
  <path d="M20 40A44 44 0 0 1 52 17" stroke="#fff" stroke-opacity=".25" stroke-width="4" fill="none" stroke-linecap="round"/>
  <circle cx="60" cy="60" r="19" fill="#c1072f"/><text x="60" y="66" text-anchor="middle" font-size="18" fill="#ffe9ee">♥</text><circle cx="60" cy="60" r="2.4" fill="#120708"/></svg>`;
}
const SP = {
  heart:[[".xx..xx.","xhhxxxxx","xhxxxxxs",".xxxxxs.","..xxxs..","...xs..."],{x:'#ff2d55',h:'#ffc2cf',s:'#b3002a'}],
  gem:[["..xxxx..",".xhhxxs.","xhxxxxxs","xxxxxxxs",".xxxxxs.","..xxxs..","...xs..."],{x:'#35d6d0',h:'#c9fffb',s:'#14909a'}],
  flower:[["..rrr..",".rhrrr.","rrryrrr",".rrrrr.","..rrr..","...g...",".gggg..","...g...","...g..."],{r:'#e0123c',h:'#ff8aa0',y:'#ffd24a',g:'#2f9e44'}],
  cake:[["....y....","....w....","wwwwwwwww","wrwrwrwrw","wwwwwwwww","bbbbbbbbb","bsbbbsbbb","bbbbbbbbb"],{y:'#ffd24a',w:'#fff6f4',r:'#e0123c',b:'#c98b5a',s:'#a46b3f'}],
  grass:[["gGggGggg","gggggGgg","dgdgddgd","dDdddDdd","ddddDddd","dDdddddD","ddDdddDd","dddddddd"],{g:'#5fbf3a',G:'#3f8f2a',d:'#8b5a2b',D:'#6b3f1d'}],
  sub:[["......yy........","......yy........","..yyyyyyyyyyyy..",".yyhhyyyyyyyyyy.","yyyoyyoyyoyyyyyg","yyyyyyyyyyyyyyyg",".yyyyyyyyyyyyyy.","..ssssssssssss.."],{y:'#ffd23f',h:'#fff3a6',o:'#7fd0ff',s:'#d9a400',g:'#bfbfbf'}],
  note:[["..xxxx","..xxx.","..x...","..x...","..x...","xxx...","xxx..."],{x:'#e8c27a'}]
};
// lado, arriba %, separación del borde (vw), tamaño del cuadrito (px), animación, duración, retraso, solo-computador
const DECOS = [
  ['heart','l', 9, 2.0, 6,'late', 6.0, 0.0, 0],
  ['grass','l',30, 1.6, 6,'',     7.0,-2.0, 0],
  ['disco','l',52, 1.8, 0,'giro', 0,   0,   1],
  ['flower','l',72, 2.4, 6,'',    6.5,-1.0, 0],
  ['note','l',88,   4.5, 5,'',    5.0,-3.0, 1],
  ['sub','r',10,    1.2, 6,'deriva',9.0, 0,  0],
  ['gem','r',34,    2.4, 7,'giraY',6.0,-1.0, 0],
  ['cake','r',56,   1.8, 6,'',    7.0,-2.5, 0],
  ['heart','r',78,  2.6, 5,'late', 5.5,-1.5, 1],
  ['note','r',90,   4.0, 5,'',    5.5,-0.5, 1]
];
const capa = $('decos');
DECOS.forEach(([n,lado,top,x,px,anim,t,d,pc]) => {
  const el = document.createElement('div');
  const w = n==='disco' ? 90 : (SP[n][0][0].length + 2) * px;
  el.className = 'deco ' + anim + (pc ? ' pc' : '');
  el.style.cssText = `top:${top}%;${lado==='l'?'left':'right'}:${x}vw;--w:${w}px;--t:${t}s;--d:${d}s`;
  el.innerHTML = n==='disco' ? disco() : pixel(SP[n][0], SP[n][1]);
  capa.appendChild(el);
});

/* Sección Beatles */
$('disco-grande').innerHTML = disco();
$('bandaTexto').textContent = CONFIG.bandaTexto;
$('canciones').innerHTML = CONFIG.canciones.map(c => `<span>${c}</span>`).join('');


/* =====================================================
   SECCIONES DE JUEGOS (Minecraft, Roblox, Free Fire)
   ===================================================== */
function insignia(j){
  if(j.id === 'mc') return `<span class="insignia">${j.nombre}</span><div class="vida">${Array(10).fill(pixel(SP.heart[0], SP.heart[1])).join('')}</div>`;
  if(j.id === 'rb') return `<span class="insignia">${j.nombre} · jugadora en línea</span>`;
  return `<span class="insignia">${j.nombre} · booyah ♥</span>`;
}
CONFIG.juegos.forEach(j => {
  const sec = document.createElement('section');
  sec.className = `juego tema-${j.id}`;
  sec.innerHTML = `${insignia(j)}
    <h2 class="h2">${j.titulo}</h2>
    <p class="lead">${j.frase}</p>
    <div class="galeria">${j.fotos.map((f,i)=>`
      <figure class="foto" tabindex="0" data-cap="${f.texto}" style="--r:${rot[i%4]}deg">
        <span class="cinta"></span>
        <div class="img" style="--g:${fondos[i%4]}"><img src="${f.src}" alt="${f.texto}" loading="lazy" onerror="this.remove()"></div>
        <figcaption>${f.texto}${f.frase ? `<em>${f.frase}</em>` : ''}</figcaption>
      </figure>`).join('')}</div>`;
  $('banda').before(sec);
});


/* =====================================================
   NUESTROS PERSONAJES FLOTANDO POR LA PÁGINA
   Proporciones de Minecraft: cabeza 8x8, torso 8x12, brazos 4x12, piernas 4x12
   Dos parejas de bloques: una de la mano y otra levantando un corazón
   ===================================================== */
// Dibujo sin borde por pieza: el contorno se pone con CSS alrededor de toda la silueta
function pix(grid, pal){
  const R = grid.length, C = grid[0].length;
  let r = '';
  for(let y=0;y<R;y++) for(let x=0;x<C;x++){
    const ch = grid[y][x];
    if(ch !== '.') r += `<rect x="${x}" y="${y}" width="1.02" height="1.02" fill="${pal[ch]}"/>`;
  }
  return `<svg viewBox="0 0 ${C} ${R}" shape-rendering="crispEdges">${r}</svg>`;
}
const CH = [
  { // Crizzk (copiada de su skin): piel crema, corona dorada con gema magenta, ojos marrones,
    // bigote negro, traje negro con camisa crema y corbata oscura, manos y zapatos claros
    pal:{c:'#f0e0cd',d:'#e5d1bb',O:'#ffb52e',Y:'#ffe83a',y:'#fde668',M:'#df4fcf',B:'#5b3d2e',K:'#2a1c16',
         b:'#1c1613',j:'#2b211d',w:'#f3e5d2',T:'#241912',W:'#f4eadc',V:'#e2d6c4'},
    cabeza:["cccccccc","OcdYYdcO","yOYMMYOy","ccdccdcc","ccBccBcc","cKKKcKKc","cKKKKKKc","cccccccc"],
    torso:["bbwTTwbb","bbwTTwbb","bjwTTwjb","bbwTTwbb","bbwTTwbb","bbwTTwbb","bbwTTwbb","bjwTTwjb","bbwwTwbb","bbwwwwbb","bbwwwwbb","bbbbbbbb"],
    brazo:["bbbb","bjbb","bbbb","bjbb","bbbb","bbbb","bbbb","bjbb","bbbb","bbbb","bbbb","cccc"],
    pierna:["bbbb","bjbb","bbbb","bjbb","bbbb","bbbb","bbbb","bbbb","bbbb","WWWW","WVWW","WWWW"]
  },
  { // VIVI (copiada de su skin): traje de ajolote rosado con capucha, cara con ojos celestes.
    // Sin las aletas (branquias) ni la cola.
    pal:{p:'#f6c3cb',l:'#fbd5da',m:'#f1a9b7',E:'#5a2f3c',K:'#0a0a0c',t:'#cfa88c',s:'#a98b72',r:'#dcaaa4',q:'#e6a9ac',
         w:'#eceef0',W:'#dcdde0',c:'#35d0d4',C:'#1fb3ba'},
    cabeza:["pppplppp","pEppppEp","pppppppp","pppppppp","tKKllKKt","KwcllcwK","rWCttCWr","sqttttqs"],
    torso:["mmpllpmm","mpplllpm","ppllllpp","pppllppp","pmppppmp","ppmppmpp","pppmmppp","ppppppmp","pmpppppp","ppmpppmp","pppmmppp","pmppppmp"],
    brazo:["llpp","lppp","pplp","ppmp","pmpp","pppm","ppmm","pmpp","mppp","ppmp","pppp","wppw"],
    pierna:["pppp","pmpp","ppmp","pppp","mppp","ppmp","pppp","pmpp","pppm","ppmp","mppp","wppw"]
  }
];
// x = posición horizontal del personaje dentro de la pareja (en cuadritos)
function personaje(n, x){
  const c = CH[n-1], P = g => pix(g, c.pal), nombre = CONFIG.nombres[n-1];
  return `<div class="pj p${n}" style="left:calc(${x} * var(--px))"><div class="cu">
    <span class="pt p-li">${P(c.pierna)}</span><span class="pt p-ld">${P(c.pierna)}</span>
    <span class="pt p-t">${P(c.torso)}</span>
    <span class="pt p-ai">${P(c.brazo)}</span><span class="pt p-ad">${P(c.brazo)}</span>
    <span class="pt p-h">${P(c.cabeza)}</span>
    ${nombre ? `<span class="etiqueta">${nombre}</span>` : ''}
  </div></div>`;
}
const paseo = document.createElement('div');
paseo.className = 'paseo'; paseo.setAttribute('aria-hidden','true');
paseo.innerHTML = `
  <div class="pareja mano">${personaje(1,0)}${personaje(2,15)}</div>
  <div class="pareja alza sin-nombre">${personaje(1,0)}${personaje(2,16)}<span class="corazon">${pixel(SP.heart[0], SP.heart[1])}</span></div>`;
document.body.appendChild(paseo);


/* =====================================================
   FINAL: "Te amo, Mi amor." con pétalos cayendo
   El texto aparece poco a poco cuando llegas a esta parte
   ===================================================== */
(function(){
  const f = CONFIG.final, sec = $('final');
  $('fPre').textContent = f.pre;   $('fL1').textContent = f.l1;
  $('fL2').textContent  = f.l2;    $('fSub').textContent = f.sub;
  $('fFirma').textContent = f.firma;

  const cv = $('petalos'), c = cv.getContext('2d');
  const colores = ['#ffc2cf','#ff8aa0','#ffd9e0','#e0475a','#d4143c','#d4143c','#e8c27a','#f3d79a'];
  let w = 0, h = 0, ps = [], raf = 0, visible = false, primera = true;

  function medir(){
    const r = devicePixelRatio || 1;
    w = sec.clientWidth; h = sec.clientHeight;
    cv.width = w * r; cv.height = h * r; c.setTransform(r,0,0,r,0,0);
  }
  function petalo(arriba){
    const prof = Math.random();                    // 0 = lejos y chiquito, 1 = cerca y grande
    return { x:rnd(0,w), y: arriba ? rnd(-60,-10) : rnd(0,h), s:4 + prof*11, v:.35 + prof*1.1,
             dx:rnd(-.25,.25), bal:rnd(0,6.28), vb:rnd(.01,.03), a:rnd(0,6.28), va:rnd(-.03,.03),
             flip:rnd(0,6.28), vf:rnd(.02,.06), o:.35 + prof*.55, col:colores[(Math.random()*colores.length)|0],
             brillo: prof > .8 ? 8 : 0 };
  }
  function iniciar(){ medir(); ps = Array.from({length: innerWidth < 600 ? 45 : 85}, () => petalo(false)); }

  function dibuja(){
    c.clearRect(0,0,w,h);
    for(const p of ps){
      p.bal += p.vb; p.flip += p.vf; p.a += p.va;
      p.x += p.dx + Math.sin(p.bal)*.7; p.y += p.v;
      if(p.y > h + 20){ Object.assign(p, petalo(true)); }
      c.save(); c.translate(p.x,p.y); c.rotate(p.a);
      c.scale(1, .35 + .65*Math.abs(Math.cos(p.flip)));
      c.globalAlpha = p.o; c.fillStyle = p.col;
      if(p.brillo){ c.shadowColor = p.col; c.shadowBlur = p.brillo; }
      c.beginPath(); c.ellipse(0,0,p.s,p.s*.62,0,0,6.28); c.fill();
      c.restore();
    }
  }
  function bucle(){ dibuja(); if(visible) raf = requestAnimationFrame(bucle); }

  iniciar();
  addEventListener('resize', () => { medir(); });
  dibuja();                                         // un cuadro fijo (también sirve si el movimiento está reducido)

  new IntersectionObserver(es => {
    visible = es[0].isIntersecting;
    document.body.classList.toggle('final-on', visible);   // despeja los personajes y adornos para que el final quede limpio
    if(visible){
      sec.classList.add('visto');
      if(primera){ primera = false; setTimeout(explosion, 2200); }   // lluvia de corazones cuando aparece "Mi amor."
      if(!reducido){ cancelAnimationFrame(raf); raf = requestAnimationFrame(bucle); }
    } else cancelAnimationFrame(raf);
  }, { threshold: .25 }).observe(sec);
})();

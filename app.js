const main = document.querySelector('main');
const dialog = document.querySelector('dialog');
const routeHref = route => '#' + (route || 'home');
const currentRoute = () => location.hash.slice(1);
const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const icons = { projects: '<path d="M3 6h7l3 3h12v16H3z"/>', experience: '<circle cx="14" cy="15" r="12"/><path d="M14 13v9m0-15v2"/>', contact: '<path d="M2 6h25v20H2zM2 6l12.5 11L27 6"/>' };
function icon(name) { return `<svg viewBox="0 0 30 30" aria-hidden="true">${icons[name]}</svg>`; }
function navigation() { return `<nav aria-label="Main menu"><a href="${routeHref('projects')}">${icon('projects')}PROJECTS</a><a href="${routeHref('experience')}">${icon('experience')}ABOUT</a><button data-contact>${icon('contact')}CONTACT</button></nav>`; }
function photo(name, extra = '') {
  // To use your own photo, set image: 'assets/my-photo.jpg'.
  return ['lens','shell','fabric'].includes(name) ? `<span class="photo photo-${name} ${extra}" role="img" aria-label="${{lens:'Camera lens on fabric',shell:'Silver shell-shaped object',fabric:'Layered fabric material'}[name]}"></span>` : `<img class="photo ${extra}" src="${escapeHTML(name)}" alt="Album photo">`;
}
function showDetail(label, title, description, actions = []) {
  document.querySelector('#dialog-label').textContent = label;
  document.querySelector('#dialog-title').textContent = title;
  document.querySelector('#dialog-description').textContent = description;
  document.querySelector('#dialog-actions').innerHTML = actions.filter(action => action.href).map(action => `<a class="project-link" href="${escapeHTML(encodeURI(action.href))}"${action.href.startsWith('mailto:') ? '' : ' target="_blank" rel="noopener noreferrer"'}>${escapeHTML(action.label)}</a>`).join('');
  dialog.showModal();
}
function renderHome() {
  main.innerHTML = `<section class="home"><div class="studio"><h1>YUJIN's STUDIO.</h1><h2>CLICK AN OBJECT TO EXPLORE MY STORY.</h2><div class="still-life" aria-label="Favorite objects. Select an object to read its story.">${renderObjects()}</div><div class="month" aria-label="Me">VANCOUVER.</div></div><aside class="bio"><p class="hello">HI, I'M ${escapeHTML(SITE.name)}.</p><p class="role">BACK-END<br>&amp; CREATIVE<br>DEVELOPER.</p><p class="role-sub">INTERESTED<br>IN ROBOTICS.</p><p class="location">Based in ${escapeHTML(SITE.location)}</p><p class="tagline">${escapeHTML(SITE.tagline)}</p><p class="intro">${escapeHTML(SITE.introduction)}</p>${navigation()}</aside><footer><p>Some objects hold memories. Click each one to discover mine.</p><small> © ${new Date().getFullYear()} Yujin Song. All rights reserved.</small></footer></section>`;
}
function renderObjects() {
  const objects = window.OBJECT_ASSETS;
  if (!objects) return '';
  function sprite(key, placement, index) {
    const asset = objects[key];
    const [x,y,w,h,angle=0] = placement;
    const interactive = index !== undefined;
    return `<g class="scene-object object-${key}" ${interactive?`role="button" tabindex="0" data-tool="${index}" aria-label="${escapeHTML(SITE.tools[index].name)}: view details"`:''} transform="rotate(${angle} ${x+w/2} ${y+h/2})"><svg x="${x}" y="${y}" width="${w}" height="${h}" viewBox="${asset.box.join(' ')}" preserveAspectRatio="none" overflow="hidden"><defs><clipPath id="clip-${key}" clipPathUnits="userSpaceOnUse"><path d="${asset.path}"/></clipPath></defs><image class="object-image" href="${asset.file}" x="0" y="0" width="${asset.width}" height="${asset.height}" clip-path="url(#clip-${key})" pointer-events="none"/>${interactive?`<path class="object-hit" d="${asset.path}" fill="transparent" pointer-events="all"/>`:''}</svg></g>`;
  }
  return `<svg class="object-scene" viewBox="0 0 1000 690" aria-label="My collection of objects">${sprite('tray',[0,0,1000,690])}${sprite('replica',[150,245,200,356,-15],1)}${sprite('music',[393,65,342,450,-2],2)}${sprite('glasses',[130,75,350,129,-10],0)}${sprite('keyring',[420,554,265,74,-7],3)}${sprite('shell',[670,270,273,304,8],4)}${sprite('vial',[760,105,46,168,115],5)}</svg>`;
}
function renderArchive(type) {
  const experience = type === 'experience';
  main.innerHTML = `<div class="archive"><header class="archive-nav"><a href="${routeHref('')}">YUJIN. DEV. STUDIO</a><nav aria-label="Page menu"><a href="${routeHref('')}">HOME</a><a href="${routeHref('projects')}" ${!experience?'aria-current="page"':''}>PROJECTS</a><a href="${routeHref('experience')}" ${experience?'aria-current="page"':''}>EXPERIENCE</a><button data-contact>CONTACT</button></nav></header><section class="paper ${experience?'experience-paper':''}"><h1>${experience?'EXPERIENCE':'SELECTED WORKS'}</h1>${experience ? renderExperience() : `<div class="project-list">${SITE.projects.map((project,i) => `<article class="project-row"><div class="project-photos">${project.images.map((src,n) => `<img class="photo" src="${encodeURI(src)}" alt="${escapeHTML(project.title)} screenshot ${n+1}">`).join('')}</div><div class="project-copy"><span class="eyebrow">${escapeHTML(project.tag)}</span><div><h2>${escapeHTML(project.title)}</h2><p class="subtitle">- ${escapeHTML(project.subtitle)}</p></div><div class="project-actions"><a class="project-link" href="${escapeHTML(project.link)}" target="_blank" rel="noopener noreferrer">${escapeHTML(project.linkLabel)} <span aria-hidden="true">↗</span></a><details><summary aria-label="${escapeHTML(project.title)} details"><span>About Project</span><b aria-hidden="true">+</b></summary><div class="project-description"><p>${escapeHTML(project.description)}</p><p>${escapeHTML(project.details)}</p>${project.role ? `<h3 class="project-role-title">My role</h3>${project.role.map(text => `<p>${escapeHTML(text)}</p>`).join('')}` : ''}</div></details></div></div></article>`).join('')}</div>`}</section><footer class="archive-footer"><a href="${routeHref('')}">← BACK TO STUDIO</a><span>YUJIN © ${new Date().getFullYear()}</span></footer></div>`;
}
function renderExperience() {
 const entry = (item, i) => `<article class="timeline-entry" id="experience-${i}"><span class="eyebrow">${escapeHTML(item.date)} / 0${i+1}</span><h2>${escapeHTML(item.title)}</h2><p class="organization">${escapeHTML(item.organization)}</p><ul class="timeline-points">${item.points.map(point => `<li>${escapeHTML(point)}</li>`).join('')}</ul></article>`;
 const figure = (item, i) => `<button class="exp-photo" data-note="${i}" aria-label="${escapeHTML(item.photoTitle)}: view note"><img class="photo" src="${encodeURI(item.image)}" alt="${escapeHTML(item.alt || item.title)}" style="object-position:${escapeHTML(item.focus || '50% 50%')}"></button>`;
 return `<div class="experience-layout"><section class="exp-texts" aria-label="Experience">${SITE.experiences.map(entry).join('')}</section><section class="exp-gallery" aria-label="Photos from my school life">${SITE.experiences.map((item, i) => figure(item, i)).join('')}<p class="album-hint">Click a photo to see the story behind it.</p></section></div>`;
}
function render() {
 const route = currentRoute();
 if (route === 'projects' || route === 'experience') renderArchive(route); else renderHome();
 document.title = `${route === 'projects'?'Projects — ':route === 'experience'?'Experience — ':''}YUJIN. DEV. STUDIO`;
 window.scrollTo(0,0);
}
main.addEventListener('click', event => {
 const tool = event.target.closest('[data-tool]');
 if(tool) { const item=SITE.tools[Number(tool.dataset.tool)]; showDetail(item.label,item.name,item.description); }
 const note = event.target.closest('[data-note]');
 if(note) { const item=SITE.experiences[Number(note.dataset.note)]; showDetail(`0${Number(note.dataset.note)+1} / SCHOOL LIFE`,item.photoTitle,item.note); }
 const selected = event.target.closest('[data-photo]');
 if(selected) {
  const i = Number(selected.dataset.photo);
  document.querySelectorAll('[data-photo]').forEach((element,index) => { element.classList.toggle('selected',index===i); element.setAttribute('aria-pressed',String(index===i)); });
  document.querySelectorAll('.timeline-entry').forEach((element,index) => element.classList.toggle('active',index===i));
 }
 if(event.target.closest('[data-contact]')) showDetail('LET’S TALK','CONTACT',SITE.email,[{label:'Email',href:SITE.email && `mailto:${SITE.email}`},{label:'LinkedIn',href:SITE.linkedin},{label:'View Resume',href:SITE.cv}]);
});
main.addEventListener('keydown', event => {
 const object = event.target.closest('.scene-object[data-tool]');
 if (object && (event.key === 'Enter' || event.key === ' ')) {
  event.preventDefault();
  const item = SITE.tools[Number(object.dataset.tool)];
  showDetail(item.label, item.name, item.description);
 }
});
dialog.querySelector('.close-button').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if(event.target===dialog) { const r=dialog.getBoundingClientRect(); if(event.clientX<r.left || event.clientX>r.right || event.clientY<r.top || event.clientY>r.bottom) dialog.close(); } });
window.addEventListener('hashchange',render);
render();
